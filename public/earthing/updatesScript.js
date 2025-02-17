const buttonContainer = document.getElementById("buttonContainer");
const firebaseURL = "https://earthing-quality-c44c1-default-rtdb.asia-southeast1.firebasedatabase.app/.json?shallow=true";
const intervalMap = {};  // To store intervals for each node
const calibrationDataMap = {}; // To store calibration values for each node
const poleDataMap = {}; // To store pole data for each node

let updateInterval; // Variable to store the update interval ID

// Fetch data from Firebase and create buttons
function fetchNodes() {
  fetch(firebaseURL)
    .then(response => response.json())
    .then(data => {
      const nodeNames = Object.keys(data);
      nodeNames.forEach(nodeName => {
        createButton(nodeName);
        fetchCalibration(nodeName);
        startCalibrationInterval(nodeName);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Fetch calibration data for a specific node (Pole)
function fetchCalibration(Pole) {
  const calibrationURL = `https://earthing-quality-c44c1-default-rtdb.asia-southeast1.firebasedatabase.app/${Pole}/calibration.json?auth=YOUR_AUTH_KEY`;

  fetch(calibrationURL)
    .then(response => response.json())
    .then(data => {
      const calibrationString = data.trim().replace(/"/g, ""); // Remove quotes
      calibrationDataMap[Pole] = calibrationString.split(",").map(Number);
    })
    .catch(error => {
      console.error(`Error fetching calibration data for ${Pole}:`, error);
    });
}

function fetchData(Pole) {
  const dataURL = `https://earthing-quality-c44c1-default-rtdb.asia-southeast1.firebasedatabase.app/${Pole}/PoleID.json?auth=YOUR_AUTH_KEY`;

  fetch(dataURL)
    .then(response => response.json())
    .then(data => {
      const poleDataString = data.trim().replace(/"/g, ""); // Remove quotes
      poleDataMap[Pole] = poleDataString.split(",").map(Number);
    })
    .catch(error => {
      console.error(`Error fetching pole data for ${Pole}:`, error);
    });
}

// Start interval to fetch calibration data every second for a specific node
function startCalibrationInterval(nodeName) {
  if (intervalMap[nodeName]) clearInterval(intervalMap[nodeName]);

  intervalMap[nodeName] = setInterval(() => {
    fetchData(nodeName);
    changeColor(nodeName);
  }, 1000);
}

// Function to create a button with the node name
function createButton(nodeName) {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = nodeName;
  button.id = nodeName;
  button.addEventListener("click", () => {
    document.getElementById('RTDBspinner').style.display ='';
    // Show the popup and update its content
    updatePopupContent(nodeName);
  });
  buttonContainer.appendChild(button);
  document.getElementById('RTDBspinner-container').style.display ='none';
}

// Function to update the popup content
function updatePopupContent(nodeName) {
  const poleData = poleDataMap[nodeName] || [];

  document.getElementById('RTDBspinner').style.display = '';
  
  // Update the pole ID display at the top
  document.getElementById('poleIdDisplay').textContent = `Pole ID: ${nodeName}`;

  // Update all parameter values
  document.getElementById('vln').textContent = (poleData[0] || "N/A") + " V";
  document.getElementById('ven').textContent = (poleData[1] || "N/A") + " V";
  document.getElementById('vle').textContent = (poleData[2] || "N/A") + " V";
  document.getElementById('ce').textContent = (poleData[3] || "N/A") + " A";
  document.getElementById('cl').textContent = (poleData[4] || "N/A") + " A";
  document.getElementById('ls').textContent = poleData[5] === 0 ? "OFF" : "ON";
  document.getElementById('r').textContent = (poleData[6] || "N/A") + " Ω";

  // Show the popup
  document.getElementById('POP').style.display = '';
  
  document.getElementById('RTDBspinner').style.display = '';

  // Clear any existing update intervals
  clearInterval(updateInterval);
  
  // Start the update interval for the popup
  updateInterval = setInterval(() => {
    fetchData(nodeName); // Fetch new data
    const updatedPoleData = poleDataMap[nodeName] || [];
    
    // Update the popup content with the latest data
    document.getElementById('vln').textContent = (updatedPoleData[0] || "N/A") + " V";
    document.getElementById('ven').textContent = (updatedPoleData[1] || "N/A") + " V";
    document.getElementById('vle').textContent = (updatedPoleData[2] || "N/A") + " V";
    document.getElementById('ce').textContent = (updatedPoleData[3] || "N/A") + " A";
    document.getElementById('cl').textContent = (updatedPoleData[4] || "N/A") + " A";
    document.getElementById('ls').textContent = updatedPoleData[5] === 0 ? "OFF" : "ON";
    document.getElementById('r').textContent = (updatedPoleData[6] || "N/A") + " Ω";
  }, 1000);
}

// Close modal function
function closeModal() {
  document.getElementById('POP').style.display = 'none';
  // Clear the update interval when closing the modal
  clearInterval(updateInterval);
}

// Add event listener for the close button
document.getElementById('close').addEventListener('click', closeModal);

// Also add click event for clicking outside the modal
window.onclick = function(event) {
  const popup = document.getElementById("POP");
  if (event.target === popup) {
    closeModal();
  }
};

// Fetch nodes and create buttons on page load
fetchNodes();

// Function to change button color based on calibration and pole data
function changeColor(nodeName) {
  const calibrationValues = calibrationDataMap[nodeName] || [];
  const poleData = poleDataMap[nodeName] || [];

  if (calibrationValues.length === 0 || poleData.length === 0) {
    return; // If data is not available yet, do nothing
  }

  if (calibrationValues[0] < poleData[1] || calibrationValues[5] > poleData[2] || calibrationValues[8] < poleData[3]) {
    document.getElementById(nodeName).style.backgroundColor = 'rgb(155,26,26)';
    document.getElementById(nodeName).innerHTML = nodeName + '<br>Leakage Current';
  } else if (poleData[5] == 1 && calibrationValues[8] > poleData[4]) {
    document.getElementById(nodeName).style.backgroundColor = '#a65656';
    document.getElementById(nodeName).innerHTML = nodeName + '<br>Light Malfunction';
  } else {
    document.getElementById(nodeName).style.backgroundColor = 'rgb(71, 173, 66)';
    document.getElementById(nodeName).innerHTML = nodeName + '<br>Everything Looks Good';
  }
  
  // Sort buttons after changing colors
  sortButtons();
}

// Modify the buttonContainer's display order
function sortButtons() {
  const buttons = Array.from(buttonContainer.getElementsByClassName('button'));
  
  // Sort buttons based on background color
  buttons.sort((a, b) => {
    const aColor = window.getComputedStyle(a).backgroundColor;
    const bColor = window.getComputedStyle(b).backgroundColor;
    
    // Put red buttons first (both dark red and light red)
    if (aColor.includes('155, 26, 26') || aColor.includes('166, 86, 86')) {
      return -1;
    }
    if (bColor.includes('155, 26, 26') || bColor.includes('166, 86, 86')) {
      return 1;
    }
    return 0;
  });
  
  // Reappend buttons in the new order
  buttons.forEach(button => buttonContainer.appendChild(button));
}

const container = document.querySelector('.container');

// Function to handle logout popup
function showLogoutPopup() {
    document.getElementById('overlay').style.display = '';
    document.getElementById('logout').style.display = '';
    container.classList.add('blurred');
}

// Function to hide logout popup
function hideLogoutPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
    container.classList.remove('blurred');
}

// Update the logout click handler
document.getElementById('LO').addEventListener("click", function(event) {
    event.preventDefault();
    showLogoutPopup();
});

// Update the yes/no button handlers
document.getElementById('yes').addEventListener("click", function(event) {
    event.preventDefault();
    // Clear all session data
    sessionStorage.clear();
    localStorage.clear();
    // Set a temporary logout flag
    sessionStorage.setItem('isLoggedOut', 'true');
    // Redirect to login page
    window.location.replace("final.html");
});

document.getElementById('no').addEventListener("click", function(event) {
    event.preventDefault();
    hideLogoutPopup();
});

// Update the page load handler
window.addEventListener('load', function() {
    // Only redirect if coming from a logged out state
    if (sessionStorage.getItem('isLoggedOut') === 'true' && !sessionStorage.getItem('isLoggedIn')) {
        window.location.replace("final.html");
    }
    // Clear the logout flag once checked
    sessionStorage.removeItem('isLoggedOut');
});

// Update the navigation confirmation
function confirmNavigation(event) {
    event.preventDefault();
    showLogoutPopup();
    return false;
}

// Add click handler for overlay
document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        hideLogoutPopup();
    }
});

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (sessionStorage.getItem('isLoggedOut') === 'true') {
        location.replace("final.html");
    }
});

// Add hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    navClose.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && 
            !navMenu.contains(event.target) && 
            navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

// Get search elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Search functionality
function searchPoles() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const allButtons = buttonContainer.getElementsByClassName('button');

    Array.from(allButtons).forEach(button => {
        // Get only the Pole ID part before the <br> tag
        const poleId = button.innerHTML.split('<br>')[0].toLowerCase();
        if (searchTerm === '' || poleId.includes(searchTerm)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });
}

// Event listeners for search
searchButton.addEventListener('click', searchPoles);
searchInput.addEventListener('keyup', (event) => {
    searchPoles(); // Real-time search as user types
});

// Mobile search functionality
const mobileSearchIcon = document.getElementById('mobileSearchIcon');
const mobileSearch = document.getElementById('mobileSearch');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const mobileSearchButton = document.getElementById('mobileSearchButton');

// Toggle mobile search
mobileSearchIcon.addEventListener('click', () => {
  mobileSearch.classList.toggle('active');
  if (mobileSearch.classList.contains('active')) {
    mobileSearchInput.focus();
  }
});

// Mobile search function
function mobileSearchPoles() {
  const searchTerm = mobileSearchInput.value.toLowerCase().trim();
  const allButtons = buttonContainer.getElementsByClassName('button');

  Array.from(allButtons).forEach(button => {
    const poleId = button.innerHTML.split('<br>')[0].toLowerCase();
    if (searchTerm === '' || poleId.includes(searchTerm)) {
      button.style.display = '';
    } else {
      button.style.display = 'none';
    }
  });
}

// Mobile search event listeners
mobileSearchButton.addEventListener('click', mobileSearchPoles);
mobileSearchInput.addEventListener('keyup', (event) => {
  mobileSearchPoles(); // Real-time search
});

// Close mobile search when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileSearch.contains(event.target) && 
      !mobileSearchIcon.contains(event.target) && 
      mobileSearch.classList.contains('active')) {
    mobileSearch.classList.remove('active');
  }
});

// Add the clear button functionality
function toggleClearButton() {
            const searchInput = document.getElementById('searchInput');
            const clearButton = document.getElementById('clearSearchButton');
            clearButton.style.display = searchInput.value ? 'block' : 'none';
        }

        function clearSearch() {
            document.getElementById('searchInput').value = '';
            toggleClearButton();
            document.getElementById('searchInput').focus();
            searchPoles();
        }
// Add the clear button functionality
document.getElementById('clearMobileSearchButton').addEventListener('click', function() {
  mobileSearchInput.value = ''; // Clear the search input
  mobileSearchPoles(); // Reset the button display
});

//////////disable inspect option////////////////
 // Disable right-click context menu
 document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Optional: Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});
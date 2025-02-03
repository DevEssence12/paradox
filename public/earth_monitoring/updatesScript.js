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

  document.getElementById('RTDBspinner').style.display ='';
  // Update popup content with pole data
  document.getElementById('poleId').innerHTML = nodeName;
  document.getElementById('vln').innerHTML = poleData[0] || "N/A";
  document.getElementById('ven').innerHTML = poleData[1] || "N/A";
  document.getElementById('vle').innerHTML = poleData[2] || "N/A";
  document.getElementById('ce').innerHTML = poleData[3] || "N/A";
  document.getElementById('cl').innerHTML = poleData[4] || "N/A";
  document.getElementById('ls').innerHTML = poleData[5] === 0 ? "OFF" : "ON";
  document.getElementById('r').innerHTML = poleData[6] || "N/A";

  // Show the popup
  document.getElementById('POP').style.display = ''; // Open the popup
  
  document.getElementById('RTDBspinner').style.display ='';

  // Clear any existing update intervals
  clearInterval(updateInterval);
  
  // Start the update interval for the popup
  updateInterval = setInterval(() => {
    fetchData(nodeName); // Fetch new data
    const updatedPoleData = poleDataMap[nodeName] || [];
    
    // Update the popup content with the latest data
    document.getElementById('vln').innerHTML = updatedPoleData[0] +" V" || "N/A";
    document.getElementById('ven').innerHTML = updatedPoleData[1] +" V"|| "N/A";
    document.getElementById('vle').innerHTML = updatedPoleData[2] +" V"|| "N/A";
    document.getElementById('ce').innerHTML = updatedPoleData[3] +" A"|| "N/A";
    document.getElementById('cl').innerHTML = updatedPoleData[4] +" A"|| "N/A";
    document.getElementById('ls').innerHTML = updatedPoleData[5] === 0 ? "OFF" : "ON";
    document.getElementById('r').innerHTML = updatedPoleData[6] +" Ω"|| "N/A";
    // document.getElementById('RTDBspinner').style.display ='none';
  }, 1000); // 1000 ms = 1 second
}

// Close modal function
function closeModal() {
  document.getElementById('POP').classList.remove('active');

  // Clear the update interval when closing the modal
  clearInterval(updateInterval);

  setTimeout(() => {
    document.getElementById('POP').style.display = 'none';
  }, 100);
  document.body.classList.remove('modal-active');
}

// Event listener to close the popup when clicking outside
window.onclick = function (event) {
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
        //light malfunction
    document.getElementById(nodeName).style.backgroundColor = '#a65656';
    document.getElementById(nodeName).innerHTML =  nodeName + '<br>Light Malfunction';
  } 
  // else if(calibrationValues[0] > poleData[1] || poleData[0] > poleData[2] ){
  //     //Erathing problem
  //     document.getElementById(nodeName).style.backgroundColor = 'rgb(255,0,0)';
  //     document.getElementById(nodeName).innerText =  'text3';
  //   }
  else {
    document.getElementById(nodeName).style.backgroundColor = 'rgb(71, 173, 66)';
    document.getElementById(nodeName).innerHTML =  nodeName + '<br>Everything Looks Good';
 
  }
}
const container = document.querySelector('.container');
document.getElementById('LO').addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action (if it's a link)
  // document.querySelector('.container').style.backgroundColor = 'rgba(0,0,0,0.96)';
  // document.getElementById('logout').style.display ='';
  
        const popup = document.getElementById('logout');
        
        // Toggle the display of the popup
        
            popup.style.display = ''; // Show popup
            container.classList.add('blurred'); // Apply blur to container
        
  
});
document.getElementById('yes').addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action (if it's a link)
  location.replace("index.html");

});
document.getElementById('no').addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action (if it's a link)
  document.getElementById('logout').style.display ='none';
  container.classList.remove('blurred');

});
function confirmNavigation(event) {
  // Prevent the default navigation
  event.preventDefault();
  
  // Show confirmation dialog
  const userConfirmed = confirm("You will be Logged Out.Are you sure you want to navigate to this page?");
  
  // If the user confirmed, continue to the link
  if (userConfirmed) {
      // Navigate to the link's href
      window.location.href = event.target.href;
  }
  
  // Return false to prevent the default action if the user didn't confirm
  return false;
}
document.getElementById("close").addEventListener("click", function() {
  closeModal();
});
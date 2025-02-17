// Helper functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateMobile(mobile) {
    const re = /^[6-9]\d{9}$/; // Validates 10-digit Indian mobile numbers starting with 6-9
    return re.test(mobile);
}

async function handleSubmit(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const query = document.getElementById('query').value.trim();
    
    let isValid = true;

    // Validate username
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long';
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate mobile
    if (!validateMobile(mobile)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid 10-digit mobile number';
        isValid = false;
    }

    // Validate query
    if (query.length < 10) {
        document.getElementById('queryError').textContent = 'Please enter a detailed query (minimum 10 characters)';
        isValid = false;
    }

    if (!isValid) return;
        // Show spinner and disable button
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('spinner');
    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    btnText.textContent = '';
    // Create form data object
    const formData = {
        Name: username,
        Email: email,
        Mobile: mobile,
        Query: query
    };

    try {
        const response = await fetch("https://formspree.io/f/mjkgpgdp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Submitted. We will review your request and revert you back via email within 24 hours.");
            window.location.href = 'final.html';
        } else {
            const errorData = await response.json();
            alert(`Failed to send message: ${errorData.message || "Unknown error"}`);
        }
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
    finally {
        // Hide spinner and re-enable button (if not redirecting)
        spinner.style.display = 'none';
        btnText.textContent = 'Submit';
        submitBtn.disabled = false;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
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
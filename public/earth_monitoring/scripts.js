const images1 = [
    "image1.png",
    "image2.png",
    // Add more images as needed
];
const images2 = [
    "image3.png",
    "image4.png",
    "image5.png",
    // Add more images as needed
];
const images = [
    "im1.png",
    "im2.png",
    "im3.png",
    "im4.png",
    "im5.png",
    "im6.png",
    "im7.png"
    // Add more images as needed
];
const backgroundVideo = document.getElementById('home');

if (backgroundVideo.style.display != 'none') {
    setTimeout(() => {
        backgroundVideo.style.display = 'none';
        document.getElementById('imageSlider').style.display = '';
        document.getElementById('imageSlider').style.opacity = 1;
        // setInterval(() => {
        //     slideshow.classList.remove("fade-in");

        //     setTimeout(() => {
        //         currentIndex = (currentIndex + 1) % images.length;
        //         slideshow.src = images[currentIndex];
        //         slideshow.classList.add("fade-in");
        //     }, 500); // Delay for fade-out effect
        // }, 3000);
    }, 15000);
}
let currentIndex = 0;
let currentIndex1 = 0; // Index of the current image
let currentIndex2 = 0;
const slideshow = document.getElementById('slideshowImage');
const slideshow1 = document.getElementById('achievement1');
const slideshow2 = document.getElementById('achievement2');

function changeImage() {
    currentIndex1 = (currentIndex1 + 1) % images1.length; // Increment index and loop back
    slideshow1.classList.add("slide");
    slideshow1.src = images1[currentIndex1]; // Change the image source
    currentIndex2 = (currentIndex2 + 1) % images2.length; // Increment index and loop back
    slideshow2.classList.add("slide");
    slideshow2.src = images2[currentIndex2]; // Change the image sources 
    currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back
    slideshow.classList.add("blur");
    slideshow.src = images[currentIndex];
    setTimeout(() => {
        slideshow1.classList.remove("slide");
        slideshow2.classList.remove("slide");
        slideshow.classList.remove("blur");
    }, 900);
}

setInterval(changeImage, 5000);


///////////////////////////////////////////////
// Existing modal handling logic
const loginBtn = document.getElementById('login-button');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn'); // If you have a close button
const spinner = document.getElementById('spinner'); // Reference to the spinner
const spinnerContainer = document.getElementById('spinner-container'); // Reference to the spinner container

loginBtn.addEventListener('click', function () {
    loginModal.style.display = 'flex';
    setTimeout(() => {
        loginModal.classList.add('active'); // Add 'active' class to trigger transition
    }, 10); // Small delay to allow the initial display to take effect
    document.body.classList.add('modal-active');

});

document.getElementById('togglePassword').addEventListener('click', function (e) {
    // Get the password input and the eye icon
    const passwordInput = document.getElementById('password');
    const icon = e.target;

    // Toggle the password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash'); // Change to "eye-slash" when shown
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye'); // Change back to "eye" when hidden
    }
});

// Close modal when clicking outside the content or using a close button
window.onclick = function (event) {
    if (event.target === loginModal) {
        closeModal();
    }
};

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}



// Add your login form submission handling
const loginForm = document.getElementById('login-form');
const loginResponse = document.getElementById('loginResponse');

document.getElementById('fill').addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    if (document.getElementById('username').value != "" &&
        document.getElementById('password').value != "" &&
        document.getElementById('forget-activated').style.display == 'none') {
        // Show the spinner when form is submitted
        document.getElementById('fill').innerHTML = '';
        document.body.classList.add('blur-background');
        spinner.style.display = 'block';

        // Get the form input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace with your Google Apps Script Web App URL
        const url = `https://script.google.com/macros/s/AKfycbx9LqW7xoWB6_qKUeTMwlgTnz8jJw_1eZXFYNuEJ6PVnH5p99WuS98awDPWYsMzQ-SW/exec?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

        // Send the GET request
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Hide the spinner when the response is received
                document.body.classList.remove('blur-background');
                spinner.style.display = 'none';

                // Display the response (you can style or change this as needed)
                loginResponse.style.color = 'rgb(22, 123, 52)';
                loginResponse.innerText = data;
                loginResponse.style.display = 'block';

                // Optionally close the modal if login is successful
                if (data.includes('Success')) {
                    document.getElementById('fill').innerHTML = 'Login';
                    setTimeout(() => {
                        window.location.href = 'updates.html';
                    }, 1000); // Close modal after 2 seconds
                }
            })
            .catch(error => {
                document.getElementById('fill').innerHTML = 'Login';
                console.error('Error:', error);

                // Hide the spinner if an error occurs
                spinner.style.display = 'none';

                loginResponse.innerText = 'Invalid Credentials!';
                loginResponse.style.color = 'rgb(255, 0, 0)';
                loginResponse.style.display = 'block';
            });
    }
    else if (document.getElementById('forget-activated').style.display != 'none') {
        document.getElementById('fill').innerHTML = '';
        spinner.style.top = '445%';
        spinner.style.left = '60%';
        spinner.style.display = 'block';
        // if (//document.getElementById('id').value === "" ||
        //     // document.getElementById('name').value === "" ||
        //     // document.getElementById('email').value === "" ||
        //     // document.getElementById('Mob').value === "" ||
        //     document.getElementById("Remark").value === "") {

        //     // loginResponse.style.display = 'block';
        //     // loginResponse.innerText = 'All fields are Required!';

        //     alert("All fields are required");
        // }
        // else {
        //     alert("Submitted!");
        // }
        var formData =
        {
            Username: document.getElementById('id1').value,
            Name: document.getElementById('name1').value,
            Email: document.getElementById('email1').value,
            Mobile: document.getElementById('Mob1').value,
            Query: document.getElementById('Remark1').value
        }

        // Send the form data to Formspree
        try {
            const response = await fetch("https://formspree.io/f/mgveazea", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            spinner.style.display = 'none';
            document.getElementById('fill').innerHTML = 'Submit';
            spinner.style.top = '';
            spinner.style.left = '';
            // Handle response
            if (response.ok) {
                alert("Submitted. We will view your request and after verification you will recieve your password via mail.(Respond Time :< 24 hrs)");
            } else {
                alert("Bad Request, Try again after sometime");
                // document.getElementById("responseMessage").textContent = "Failed to send message.";
            }
        } catch (error) {
            alert(error.message);
        }
        closeModal();


    }
    else {
        alert("Username and Password is required");
    }
});

function closeModal() {
    loginModal.classList.remove('active');
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    loginResponse.innerText = "";
    setTimeout(() => {
        loginModal.style.display = 'none';
        forgot.style.display = 'flex';
        username.style.display = '';
        username_icon.style.display = '';
        password.style.display = '';
        togglePassword.style.display = '';
        log.style.position = 'relative';
        log.style.transform = 'translateX(0)';
        document.querySelector('.welcome-back').style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 50% 100%)';
        document.querySelector('.welcome-back').style.width = '50%';///////////
        document.querySelector('.fa-times').style.justifyContent = 'flex-end';

        document.querySelector('.welcome-back').style.paddingLeft = '20%';
        document.getElementById('loginTitle').style.textAlign = 'left';
        document.getElementById('loginTitle').textContent = 'Login';
        document.getElementById('topTitle').style.textAlign = 'center';
        document.getElementById('topTitle').textContent = 'Welcome Back!';
        document.getElementById('middleTitle').style.textAlign = 'center';
        document.getElementById('middleTitle').textContent = 'Please login with your ID & password to get the access of portal';
        document.getElementById('bottomTitle').style.textAlign = 'right';
        // document.getElementById('bottomTitle').textContent = '© 2024 | Paradox Innovator';
        //////////////////////////////////////////

        document.getElementById('loginTitle').style.paddingLeft = '';
        document.getElementById('fill').style.marginLeft = '';
        document.querySelector('.login-form').style.paddingTop = '';
        document.querySelector('.login-form').style.paddingLeft = '';
        // document.querySelector('.login-form input').style.width = '';
        document.getElementById('forget-activated').style.display = 'none';
        document.getElementById('fill').innerHTML = 'Login';

        document.querySelector('.form').style.paddingTop = '30px';
    }, 500);
    document.body.classList.remove('modal-active');
}

//for adding of forget password option////////////////////////
forgot.addEventListener('click', function () {
    setTimeout(1000);
    loginResponse.innerText = '';
    forgot.style.display = 'none';
    username.style.display = 'none';
    username_icon.style.display = 'none';
    password.style.display = 'none';
    togglePassword.style.display = 'none';
    log.style.position = 'absolute';
    log.style.transform = 'translateX(+80%)';
    document.querySelector('.welcome-back').style.clipPath = 'polygon(100% 0, 0 0, 0 100%, 50% 100%)';
    document.getElementById('loginTitle').style.paddingLeft = '70px';
    document.getElementById('fill').style.marginLeft = '50px';
    document.querySelector('.fa-times').style.justifyContent = 'flex-start';

    document.getElementById('loginTitle').style.textAlign = 'left';
    document.getElementById('loginTitle').textContent = 'Recovery';
    document.querySelector('.welcome-back').style.paddingLeft = '2%';
    document.getElementById('topTitle').style.textAlign = 'left';
    document.getElementById('topTitle').innerHTML = 'Forgot<br>Password?';
    document.getElementById('middleTitle').style.textAlign = 'left';
    document.getElementById('middleTitle').innerHTML = 'Please enter your mailID Correct!<br>Try to keep Username same,<br>if remembered ';
    document.getElementById('bottomTitle').style.textAlign = 'left';
    // document.getElementById('bottomTitle').textContent = '© 2024 | Paradox Innovator';
    ///////////////////////////////////////
    document.querySelector('.login-form').style.paddingTop = '10px';
    document.querySelector('.login-form').style.paddingLeft = '50px';
    document.getElementById('forget-activated').style.display = 'block';
    document.getElementById('fill').innerHTML = 'Submit';
    document.querySelector('.form').style.paddingTop = '0px';
    // document.querySelector('.login-form input').style.paddingTop = '10px';

    // document.querySelector('.forget-activated').style.marginBottom = '0px';


});

document.getElementById('submit-query').addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var formData =
    {
        Name: document.getElementById('name2').value,
        Email: document.getElementById('email2').value,
        Mobile: document.getElementById('mob2').value,
        Query: document.getElementById('queryBox2').value
    }
    document.getElementById('spinner2').style.display = 'block';
    document.getElementById('submit-query').innerHTML = '';
    // Send the form data to Formspree
    try {
        const response = await fetch("https://formspree.io/f/mzzbevdb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });


        document.getElementById('spinner2').style.display = 'none';
        document.getElementById('name2').innerHTML ='';
            document.getElementById('email2').innerText ='';
            document.getElementById('mob2').innerText ='';
            document.getElementById('queryBox2').innerText ='';

        document.getElementById('submit-query').innerHTML = 'Submit';
        // Handle response
        if (response.ok) {
            alert("Submitted.Usual Respond Time :< 24 hrs");
            
        } else {
            alert("Bad Request, Try again after sometime");
            // document.getElementById("responseMessage").textContent = "Failed to send message.";
        }
    } catch (error) {
        alert(error.message);
    }

});
// Get references to the form and display arera
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeContent = "\n   <h2><b>Resume</b></h2>\n   <h3>Personal Details</h3>\n   <p><b>Name:</b> ".concat(name, "</p>\n   <p><b>Email:</b> ").concat(email, "</p>\n   <p><b>Phone:</b> ").concat(phone, "</p>\n   <p><b>GitHub:</b> ").concat(github, "</p>\n   <p><b>LinkedIn:</b> ").concat(linkedin, "</p>\n\n   <h3>Education</h3>\n   <p> ").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p> ").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p> ").concat(skills, "</p>\n   ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error("Resume display element not found");
    }
});

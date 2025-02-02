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
    var resumeContent = "\n   <h2><b>Editable Resume</b></h2>\n   <h3>Personal Details</h3>\n   <p><b>Name:</b> <span contenteditable='true'> ".concat(name, "</span></p>\n   <p><b>Email:</b>  <span contenteditable='true'> ").concat(email, "</span></p>\n   <p><b>Phone:</b> <span contenteditable='true'>  ").concat(phone, "</span></p>\n   <p><b>GitHub:</b>  <span contenteditable='true'>  ").concat(github, "</span></p>\n   <p><b>LinkedIn:</b>  <span contenteditable='true'> ").concat(linkedin, "</span></p>\n\n   <h3>Education</h3>\n   <p contenteditable='true'>").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable='true'> ").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable='true'> ").concat(skills, "</p>\n   ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error("Resume display element not found");
    }
});

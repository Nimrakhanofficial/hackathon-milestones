// Get references to the form and display arera
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", (event: Event )=> {
     event.preventDefault(); //prevent page reload

     //collect input values
     const name = (document.getElementById('name') as HTMLInputElement).value;
     const email = (document.getElementById('email') as HTMLInputElement).value;
     const phone = (document.getElementById('phone') as HTMLInputElement).value;
     const github = (document.getElementById('github') as HTMLInputElement).value;
     const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
     const education= (document.getElementById('education') as HTMLInputElement).value;
     const experience = (document.getElementById('experience') as HTMLInputElement).value;
     const skills = (document.getElementById('skills') as HTMLInputElement).value;

   // generate the resume content dynamically
   const resumeContent = `
   <h2><b>Editable Resume</b></h2>
   <h3>Personal Details</h3>
   <p><b>Name:</b> <span contenteditable='true'> ${name}</span></p>
   <p><b>Email:</b>  <span contenteditable='true'> ${email}</span></p>
   <p><b>Phone:</b> <span contenteditable='true'>  ${phone}</span></p>
   <p><b>GitHub:</b>  <span contenteditable='true'>  ${github}</span></p>
   <p><b>LinkedIn:</b>  <span contenteditable='true'> ${linkedin}</span></p>

   <h3>Education</h3>
   <p contenteditable='true'>${education}</p>

   <h3>Experience</h3>
   <p contenteditable='true'> ${experience}</p>

   <h3>Skills</h3>
   <p contenteditable='true'> ${skills}</p>
   `;

   //Display the generated resume
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeContent;
   }else {
    console.error("Resume display element not found");
   }
})
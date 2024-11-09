const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const school = (document.getElementById("school") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const field = (document.getElementById("field") as HTMLInputElement).value;
  const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;

  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;

  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim());

  // Generate resume HTML with contenteditable attribute for editing
  resumeOutput.innerHTML = `
    <div contenteditable="true">
      <h2>${name}'s Resume</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <h3>Education</h3>
      <p><strong>School:</strong> ${school}</p>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Field of Study:</strong> ${field}</p>
      <p><strong>Graduation Year:</strong> ${graduationYear}</p>

      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Years of Experience:</strong> ${experience}</p>

      <h3>Skills</h3>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
  `;
});

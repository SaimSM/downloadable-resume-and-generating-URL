// // Selecting form and output area
// const form = document.getElementById('resumeForm');
// const resumeContent = document.getElementById('resumeContent');
// const resumePreview = document.getElementById('resumePreview');
// const shareLink = document.getElementById('shareLink');
// const resumeURL = document.getElementById('resumeURL');
// const copyLinkButton = document.getElementById('copyLinkButton');
// const downloadButton = document.getElementById('downloadButton');

// // Function to make content editable
// function makeEditable(element) {
//     element.setAttribute('contenteditable', 'true');
//     element.style.border = "1px solid #ccc"; // Visual cue for editable content
//     element.style.padding = "10px";
// }

// // Function to stop editing and save changes
// function stopEditing(element) {
//     element.setAttribute('contenteditable', 'false');
//     element.style.border = "none"; // Remove visual cue after editing
//     element.style.padding = "0";
// }

// // Event listener for form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault();  // Prevent form from submitting

//     // Get user inputs
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const number = document.getElementById('number').value;
//     const education = document.getElementById('education').value;
//     const work = document.getElementById('work').value;
//     const skills = document.getElementById('skills').value.split(',');

//     // Generate a username from the name
//     const username = name.replace(/\s+/g, '_').toLowerCase();

//     // Generate the resume content dynamically
//     resumeContent.innerHTML = `
//         <h3 id="nameDisplay">${name}</h3>
//         <div class="contact-info">
//             <p><strong>Email:</strong> <span id="emailDisplay">${email}</span></p>
//             <p><strong>Contact No:</strong> <span id="numberDisplay">${number}</span></p>
//         </div>

//         <h4>Education</h4>
//         <p id="educationDisplay">${education}</p>

//         <h4>Work Experience</h4>
//         <p id="workDisplay">${work}</p>

//         <h4>Skills</h4>
//         <ul id="skillsDisplay">${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>

//         <button id="editButton">Edit</button>
//     `;

//     // Generate unique URL
//     const uniqueURL = `${username}.vercal.app/resume`;
//     resumeURL.innerText = uniqueURL;
//     shareLink.style.display = 'block';

//     // Show the resume preview
//     resumePreview.style.display = 'block';

//     // Make sections editable when the "Edit" button is clicked
//     const editButton = document.getElementById('editButton');
//     editButton.addEventListener('click', () => {
//         makeEditable(document.getElementById('nameDisplay'));
//         makeEditable(document.getElementById('emailDisplay'));
//         makeEditable(document.getElementById('numberDisplay'));
//         makeEditable(document.getElementById('educationDisplay'));
//         makeEditable(document.getElementById('workDisplay'));

//         // Adding editability to skills
//         const skillsList = document.getElementById('skillsDisplay');
//         for (let item of skillsList.getElementsByTagName('li')) {
//             makeEditable(item);
//         }

//         // Change button to "Save" after enabling editing
//         editButton.innerText = "Save";
//         editButton.addEventListener('click', () => {
//             stopEditing(document.getElementById('nameDisplay'));
//             stopEditing(document.getElementById('emailDisplay'));
//             stopEditing(document.getElementById('numberDisplay'));
//             stopEditing(document.getElementById('educationDisplay'));
//             stopEditing(document.getElementById('workDisplay'));

//             // Disable editing for skills
//             for (let item of skillsList.getElementsByTagName('li')) {
//                 stopEditing(item);
//             }

//             // Revert button text back to "Edit"
//             editButton.innerText = "Edit";
//         }, { once: true });  // Ensures the save handler is triggered only once
//     });

//     // Copy Link Functionality
//     copyLinkButton.addEventListener('click', () => {
//         navigator.clipboard.writeText(uniqueURL).then(() => {
//             alert('Link copied to clipboard!');
//         });
//     });

//     // Download PDF Functionality
//     downloadButton.addEventListener('click', () => {
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();

//         // Set PDF content
//         doc.setFontSize(22);
//         doc.text(name, 10, 10);
//         doc.setFontSize(14);
//         doc.text(`Email: ${email}`, 10, 20);
//         doc.text(`Contact No: ${number}`, 10, 30);
//         doc.text('Education:', 10, 40);
//         doc.text(education, 10, 50);
//         doc.text('Work Experience:', 10, 70);
//         doc.text(work, 10, 90);
//         doc.text('Skills:', 10, 110);
        
//         skills.forEach((skill, index) => {
//             doc.text(skill.trim(), 10, 120 + (index * 10));
//         });

//         // Save the PDF
//         doc.save(`${username}_resume.pdf`);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const resumeLink = document.getElementById("resume-link");
    let clicked = false;

    resumeLink.addEventListener("click", () => {
        if (!clicked) {
            resumeLink.textContent = "VIEW RESUME"; // Change text to "View Resume"
            clicked = true;
        } else {
            window.open("Resume.pdf", "_blank"); // Open the resume file in a new tab
        }
    });
});

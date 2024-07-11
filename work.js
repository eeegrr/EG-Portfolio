const projects = [
    {
        number: "01",
        category: "Python Project",
        description: "At the beginning of the game, the human player specifies the length of the number sequence to be used in the game, which can range from 15 to 20 numbers. The game software randomly generates a number sequence of the specified length, including the numbers 1, 2, 3, and 4.",
        stack: "Python, Tkinter",
        imageSrc: "images/work-1.png",
        liveLink: "#",
        repoLink: "https://github.com/eeegrr/2-Player-Game/tree/main"
    },
    {
        number: "02",
        category: "Contruct 3 Project",
        description: "In Cave Mission, players embark on a thrilling journey as a treasure hunter navigating through ancient caves. But it is not just about the treasure—it is about survival. Ghostly foes, deadly cannons, and razor-sharp blades pose relentless challenges. Dare to delve into the depths and claim the ultimate prize?",
        stack: "Contruct 3",
        imageSrc: "images/work-2.png",
        liveLink: "#",
        repoLink: "https://github.com/eeegrr/2D-Platformer"
    },
    {
        number: "03",
        category: "HTML Project",
        description: "This project implements a web-based calculator with support for basic arithmetic operations, square root, and exponentiation.",
        stack: "HTML, CSS, JavaScript",
        imageSrc: "images/work-3.png",
        liveLink: "#",
        repoLink: "https://github.com/eeegrr/Advanced-Calculator"
    }
];

let currentProjectIndex = 0;

function updateProjectDisplay() {
    const project = projects[currentProjectIndex];
    document.getElementById("work-number").innerText = project.number;
    document.getElementById("work-category").innerText = project.category;
    document.getElementById("work-description").innerText = project.description;
    document.getElementById("work-stack").innerText = project.stack;
    document.getElementById("work-image").src = project.imageSrc;
    //document.getElementById("live-link").href = project.liveLink;
    document.getElementById("repo-link").href = project.repoLink;
}

document.getElementById("prev-arrow").addEventListener("click", function (event) {
    event.preventDefault();
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectDisplay();
});

document.getElementById("next-arrow").addEventListener("click", function (event) {
    event.preventDefault();
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectDisplay();
});

// Initial display
updateProjectDisplay();

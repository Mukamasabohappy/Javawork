// Define the projects array
const projects = [
    {
        name: "IoT Smart Home System",
        description: "A system to control home appliances remotely via an app.",
        technologyUsed: ["IoT", "Arduino", "Wi-Fi", "Mobile App"],
        year: 2023,
    },
    {
        name: "Wireless Communication Prototype",
        description: "A prototype demonstrating wireless data transmission.",
        technologyUsed: ["RF Modules", "Microcontrollers", "Sensors"],
        year: 2024,
    },
    {
        name: "Signal Processing Analyzer",
        description: "An application to analyze and visualize signal patterns.",
        technologyUsed: ["MATLAB", "DSP Algorithms", "Python"],
        year: 2022,
    },
];

// Use map to display project details
projects.map((project) => {
    console.log(`Project Name: ${project.name}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technologies Used: ${project.technologyUsed.join(", ")}`);
    console.log(`Year: ${project.year}`);
    console.log("------------");
});

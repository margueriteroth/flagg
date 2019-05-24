import React from "react";

const projects = {
    dvs: {
        title: "Data Visualization Society Member Map",
        projectType: "web",
        description: <div>
            The <a href="https://www.datavisualizationsociety.com/" rel="noopener noreferrer" target="_blank">Data Visualization Society</a> asked
            members to rank their skills in the following categories: data, visualization, and society.
            <br />
            <br />
            I mapped the location of each
            member with the ability to filter by their highest ranked skill
            to show the distribution of each around the world.
        </div>,
        demo: "https://marguerite.io/dvs",
        github: "https://github.com/margueriteroth/flagg/tree/master/src/components/Map",
        "tech": [
            "react",
            "d3",
            "data",
        ],
        "img_src": [
            "project-dvs-01"
        ],
    },
    albondiga: {
        title: "Albondiga | App for requesting some dinner 🍝",
        projectType: "web",
        description: "I developed this project as a birthday gift for my partner — a lover of spaghetti and meatballs. The recipient can pick the ingredients making up a spaghetti and meatballs dinner: pasta type, sauce, drinks, etc.",
        demo: "https://margueriteroth.github.io/albondiga/",
        github: "https://github.com/margueriteroth/albondiga",
        "tech": [
            "react",
            "firebase",
            "scss",
            "bem",
            "node"
        ],
        "img_src": [
            "project-albondiga-01"
        ],
    },
};

export default projects;
import { Site } from "./definitions"

export const sites: Site[] = [
    {
        name: "All Keyboard Shortcuts",
        url: "https://allkeyboardshortcuts.info",
        image: "/allkeyboardshortcuts.png",
        description: "A reference for shortcuts across OS and apps. Built with React + Vite, and styled with TailwindCSS. Provides quick lists for productivity.",
        repo: "https://github.com/MattyMeans19/all-keyboard-shortcuts.git"
    },
    {
        name: "Small Business Template",
        url: "https://smallbusiness-p-e6a955b1be25.herokuapp.com/",
        image: "/SBtemplate.png",
        description: "Full-stack template featuring live inventory and cart reservations. Front-end: React/Vite & TailwindCSS. Back-end: Express.js & PostgreSQL.  Add '/business-portal' to view business end, Login using 'Admin' for the username and password!",
        repo:"https://github.com/MattyMeans19/small-business-premium.git"
    },
    {
        name: "Post Most Anything",
        url: "https://post-most-anything-45028429ddb1.herokuapp.com/",
        image: "/PMA.png",
        description: "Modern blog site built with Next.js and TypeScript. Features secure hashing/salting, session data, PostgreSQL database, and TailwindCSS styling. ",
        repo: "https://github.com/MattyMeans19/post-most-anything.git"
    },
    {
        name: "LyriQuery",
        url: "https://lyriquery-3b245fcbd6b4.herokuapp.com/",
        image: "/LyriQuery.png",
        description: "Search application for lyrics via the LRCLIB API. Uses an Express.js back-end and EJS (Embedded JavaScript Templating) with standard CSS for the front-end. ",
        repo: "https://github.com/MattyMeans19/LyriQuery.git"
    }
]
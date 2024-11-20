var objTable = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
    objTable.addEventListener("scroll", () => {
        const scrollContainer = document.querySelector('.scrollable-container');
        
        // Ensure scrollContainer is found
        if (!scrollContainer) {
            console.log("Scroll container not found!");
            return;
        }

        const nav = document.getElementsByClassName("sticky-nav");

        const maxScroll = 200; // The point at which the background becomes fully opaque
        const scrollTop = scrollContainer.scrollTop; // Get the scroll position of the container
        const opacity = Math.min(scrollTop / maxScroll, 1);

        if (nav.length === 0) {
            console.log("Navbar not found!");
            return;
        }

        // Loop through the nav collection or use the first element
        nav[0].style.backgroundColor = `rgba(13, 17, 23, ${opacity})`; // Access the first element in the collection
    });
});

console.log("script.js loaded");

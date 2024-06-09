// Function to create the "Explore the Beaches" button
function createExploreButton() {
    // Create a new button element
    var button = document.createElement("button");

    // Set the button's text content
    button.textContent = "Explore the Beaches";

    // Apply styles to the button
    button.style.backgroundColor = "rgb(235, 70, 196)";
    button.style.color = "rgb(255, 255, 255)";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.fontFamily = 'Roboto';
    button.style.fontSize = "15px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "8px";
    button.style.marginTop = "35px";
    button.style.transition = "background-color 0.3s";
    button.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

    // Add a hover effect to the button
    button.onmouseover = function() {
        button.style.backgroundColor = "rgb(205, 70, 196)";
    };
    button.onmouseout = function() {
        button.style.backgroundColor = "rgb(235, 70, 196)";
        button.style.boxShadow = '0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    };

    // Add a click event to scroll to the top beaches section
    button.onclick = function() {
        // Select the <ul> element containing the top beaches
        var topBeachesHeading = document.querySelector("section:nth-of-type(2) ul");

        // Smoothly scroll to the top beaches section
        topBeachesHeading.scrollIntoView({ behavior: "smooth" });
    };

    // Select the section where the button will be added
    var section = document.querySelector("section");

    // Append the button to the section
    section.appendChild(button);
}

// Call the function to create the button when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createExploreButton);

// Function to add images to the beach list items and enable fullscreen view on click
document.addEventListener('DOMContentLoaded', function() {
    // Array of image filenames for the beaches
    const images = [
        'AnneSourcedArgent.jpg',   // Image for Whitehaven Beach
        'GraceBay.jpg',          // Image for Grace Bay
        'BaiaDoSancho.jpg',      // Image for Baia do Sancho
        'NavagioBeach.jpg',      // Image for Navagio Beach
        'PlayaParaiso.jpeg',     // Image for Playa Paraiso
        'AnneSourcedArgent.jpg', // Image for Anse Source d'Argent
        'SevenMileBeach.jpg',    // Image for Seven Mile Beach
        'BoraBora.jpg',          // Image for Bora Bora
        'LanikaiBeach.jpg',      // Image for Lanikai Beach
        'PinkSandsBeach.jpg'     // Image for Pink Sands Beach
    ];

    // Select all list items in the second section containing the beach names
    const listItems = document.querySelectorAll('section:nth-of-type(2) ul li');

    // Add images and click event to each list item
    listItems.forEach((li, index) => {
        if (images[index]) {
            // Create an image element and set its source
            const img = document.createElement('img');
            img.src = images[index];
            img.alt = `Image of ${li.querySelector('h3').textContent}`;
            li.insertBefore(img, li.firstChild);
        }

        // Add click event listener to each list item
        li.addEventListener('click', function() {
            showFullscreenOverlay(li, images[index]);
        });
    });

    // Function to show fullscreen overlay with beach details
    function showFullscreenOverlay(li, imageSrc) {
        // Create a fullscreen overlay div
        const overlay = document.createElement('div');
        overlay.classList.add('fullscreen-overlay');

        // Add the image to the overlay
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = li.querySelector('h3').textContent;
        overlay.appendChild(img);

        // Add the beach title to the overlay
        const title = document.createElement('h3');
        title.textContent = li.querySelector('h3').textContent;
        overlay.appendChild(title);

        // Add the beach description to the overlay
        const description = document.createElement('p');
        description.textContent = li.querySelector('p').textContent;
        overlay.appendChild(description);

        // Add a close button to the overlay
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        overlay.appendChild(closeButton);

        // Append the overlay to the body
        document.body.appendChild(overlay);
    }
});

// Thanks to chatGPT for the comments lol

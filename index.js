document.addEventListener('DOMContentLoaded', function () {
  // Ensure the DOM is fully loaded before trying to access elements

  // Typewriter Effect
  const appElement = document.getElementById("app");

  if (appElement) {
    const typewriter = new Typewriter(appElement, {
      loop: true,
      delay: 75,
      strings: [
        "Tax Professional",
        "Bookkeeping Specialist",
        "Technical Problem-Solver",
        "Community Volunteer"
      ],
      autoStart: true,
    });
  } else {
    console.error("Element with ID 'app' not found for Typewriter effect.");
  }

  // Granim.js Background
  const granimCanvas = document.getElementById("canvas-image-blending");
  if (granimCanvas) {
    try {
      var granimInstance = new Granim({
        element: "#canvas-image-blending", // Selector for the canvas element
        direction: "top-bottom", // Gradient direction
        isPausedWhenNotInView: true, // Pause animation when out of view
        image: {
          source: "assets/Trees.jpg", // Path to your background image
          blendingMode: "multiply", // Blending mode for the image
          position: ['center', 'center'], // Image position
          stretchMode: ['stretch', 'stretch'] // How the image should stretch
        },
        states: {
          "default-state": {
            gradients: [ // Array of gradient definitions
              ["#29323c", "#485563"],
              ["#FF6B6B", "#556270"],
              ["#80d3fe", "#7ea0c4"],
              ["#f0ab51", "#eceba3"],
            ],
            transitionSpeed: 7000, // Speed of transition between gradients
            loop: true // Whether to loop through gradients
          },
        },
        // Optional: Callback functions
        onStart: function() {
          // console.log('Granim instance started.');
        },
        onGradientChange: function(colorDetails) {
          // console.log('Gradient changed to: ', colorDetails);
        },
        onEnd: function() {
          // console.log('Granim animation ended (if loop is false).');
        }
      });
    } catch (e) {
      console.error("Granim.js initialization error:", e);
      // Fallback solid background color if Granim fails
      granimCanvas.style.backgroundColor = "#485563";
    }
  } else {
    console.error("Element with ID 'canvas-image-blending' not found for Granim.js.");
    // Fallback for body if canvas isn't there
    document.body.style.backgroundColor = "#f0f0f0";
  }

  // Note: Your original modal JavaScript for custom modals is not included here.
  // If you were using custom modals (not Bootstrap modals), that code would go here.
  // However, Bootstrap handles its own modals if you're using data-bs-toggle attributes.
  // Example: If you had custom modals like in the old 'index.js'
  /*
  // Function to handle modal opening
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  // Function to handle modal closing
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Function to handle modal closing when clicking outside
  window.onclick = function (event) {
    var modals = document.querySelectorAll(".modal"); // Select all elements with class "modal"
    modals.forEach(function (modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  // Get all buttons and add event listeners (for custom modals)
  const buttons = [
    // { id: "btn1", modalId: "modal1" }, // Example
  ];

  buttons.forEach((buttonInfo) => {
    const button = document.getElementById(buttonInfo.id);
    if (button) {
      if (buttonInfo.modalId) {
        const closeBtn = document.querySelector(
          `#${buttonInfo.modalId} .close-button`
        );
        button.addEventListener("click", () => openModal(buttonInfo.modalId));
        if (closeBtn) {
          closeBtn.addEventListener("click", () =>
            closeModal(buttonInfo.modalId)
          );
        }
      } else if (buttonInfo.url) {
        button.addEventListener("click", () => window.open(buttonInfo.url, "_blank", "noopener,noreferrer"));
      }
    }
  });
  */

}); // End of DOMContentLoaded
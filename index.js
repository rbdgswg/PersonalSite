var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Web Designer, Systems Engineer, Privacy Advocate, Tinkerer") //Add your own tagline
  .pauseFor(3000)
  .start();

var granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "assets/Trees.jpg", //change image for intro section if desired
    blendingMode: "multiply",
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"],
      ],
      transitionSpeed: 8000,
    },
  },
});

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

// Get all buttons and add event listeners
const buttons = [
  { id: "btn1", modalId: "modal1" },
  { id: "btn2", modalId: "modal2" },
  { id: "btn3", url: "https://www.nintendo.com" }, // Add URL for button 3
  { id: "btn4", modalId: "modal4" },
  { id: "btn5", modalId: "modal5" },
  { id: "btn6", url: "https://www.arduino.cc" }, // Add URL for button 6
  { id: "hobbyBtn1", modalId: "modalHobby1" },
  { id: "hobbyBtn2", modalId: "modalHobby2" },
  { id: "hobbyBtn3", modalId: "modalHobby3" },
  { id: "hobbyBtn4", modalId: "modalHobby4" },
  { id: "hobbyBtn5", modalId: "modalHobby5" },
  { id: "hobbyBtn6", modalId: "modalHobby6" },
];

buttons.forEach((buttonInfo) => {
  const button = document.getElementById(buttonInfo.id);
  if (button) {
    if (buttonInfo.modalId) {
      // Handle modal buttons
      const closeBtn = document.querySelector(
        `#${buttonInfo.modalId} .close-button`
      ); // Assumes a close button with class "close-button"
      button.addEventListener("click", () => openModal(buttonInfo.modalId));
      if (closeBtn) {
        closeBtn.addEventListener("click", () =>
          closeModal(buttonInfo.modalId)
        );
      }
    } else if (buttonInfo.url) {
      // Handle URL buttons
      button.addEventListener("click", () => window.open(buttonInfo.url, "_blank"));
    }
  }
});
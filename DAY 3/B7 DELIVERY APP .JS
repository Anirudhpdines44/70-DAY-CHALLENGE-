function animateTruck(button) {
  // Reset animation if it already ran
  button.classList.remove("animate");
  void button.offsetWidth; // force reflow
  button.classList.add("animate");

  // Optional: disable button after animation
  setTimeout(() => {
    button.classList.remove("animate");
  }, 1500);
}

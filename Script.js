// Initial scale
let scale = 1;

// Function to apply the scale
function applyScale() {
    const solarSystem = document.querySelector('.solar-system');
    solarSystem.style.transform = `scale(${scale})`;
}

// Event listener for the mouse wheel
document.addEventListener('wheel', (event) => {
    // Prevent the page from scrolling
    event.preventDefault();

    // Determine the scroll direction and adjust the scale
    if (event.deltaY < 0) {
        // Scrolling up, zoom in
        scale += 0.1;
    } else {
        // Scrolling down, zoom out
        scale -= 0.1;
    }

    // Apply the scale
    applyScale();
});

// Apply the initial scale
applyScale();

// Function to apply the scale
document.querySelectorAll('.orbit').forEach((orbit, index) => {
    // const speeds = [
    //     2 * Math.PI / (88 * 24 * 60 * 60), // Mercury: 88 days
    //     2 * Math.PI / (225 * 24 * 60 * 60), // Venus: 225 days
    //     2 * Math.PI / (365 * 24 * 60 * 60), // Earth: 365 days
    //     2 * Math.PI / (687 * 24 * 60 * 60), // Mars: 687 days
    //     2 * Math.PI / (12 * 365 * 24 * 60 * 60), // Jupiter: 12 years
    //     2 * Math.PI / (29 * 365 * 24 * 60 * 60), // Saturn: 29 years
    //     2 * Math.PI / (84 * 365 * 24 * 60 * 60), // Uranus: 84 years
    //     2 * Math.PI / (165 * 365 * 24 * 60 * 60), // Neptune: 165 years
    // ];
    const speeds = [0.04, 0.028, 0.02, 0.012, 0.01, 0.008, 0.006, 0.0048];
    const speed = speeds[index];
    let angle = 0;

    function animate() {
        angle += speed;
        const radius = orbit.offsetWidth / 2;
        const planet = orbit.querySelector('.planet');

        planet.style.left = `${50 + radius * Math.cos(angle) / (orbit.offsetWidth / 100)}%`;
        planet.style.top = `${50 + radius * Math.sin(angle) / (orbit.offsetHeight / 100)}%`;

        requestAnimationFrame(animate);
    }
    animate();
});
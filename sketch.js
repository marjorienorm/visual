// This project is a visual representation of a ship with a white sail on the ocean.

function setup() {
  createCanvas(800, 800);
}

function draw() {
    background(173, 216, 230); // Set the sky color to light blue

    // Draw the sun
    fill(255, 255, 0); // Set the sun color to yellow
    ellipse(width / 4, height / 18, 80, 80); // Draw the sun

    // Draw lines coming out from the sun
    stroke(255, 255, 0); // Set the line color to yellow
    for (let i = 0; i < 360; i += 45) {
        let x = (width / 4) + 80 * cos(radians(i));
        let y = (height / 18) + 80 * sin(radians(i));
        line(width / 4, height / 18, x, y);
    }

    // Draw the ocean
    fill(0, 0, 139);
    rect(0, height / 2, width, height / 2);


    // Draw the whites clouds and show only the intersections yby removing the outline of the clouds
    noStroke(); // Remove the outline of the clouds
    fill(255); // Set the cloud color to white
    ellipse(200, 100, 100, 100); // Draw the first cloud
    ellipse(250, 100, 100, 100); // Draw the second cloud
    ellipse(225, 125, 100, 100); // Draw the third cloud

    // Calculate the x-coordinate of the ship and the sail
    let x = (frameCount * 1) % width;

    // Draw the ship
    fill(139, 69, 19); // Set the ship color to brown
    rect(x, height / 2 - height / 16, width / 2, height / 8); // Draw the ship

    // Draw the sail
    fill(255); // Set the sail color to white
    triangle(x + width / 4, height / 2 - height / 16, x + width / 4, height / 4 - height / 16, x + width / 8, height / 2 - height / 16); // Draw the sail

}

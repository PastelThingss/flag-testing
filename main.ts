// Initialize the motion detector
const motionDetector = new MotionDetector();

// Initialize the Micro:Bit
const microbitDevice = new MicroBit();

// Define the LED lights
const ledLights = [
    microbitDevice.pin0,
    microbitDevice.pin1,
    microbitDevice.pin2
];

// Function to turn on the next LED light
function turnOnNextLight() {
    // Find the index of the currently lit LED light
    const currentIndex = ledLights.findIndex(light => light.readDigitalValue() === 1);

    // Turn off the current light
    ledLights[currentIndex].writeDigitalValue(0);

    // Calculate the index of the next light
    const nextIndex = (currentIndex + 1) % ledLights.length;

    // Turn on the next light
    ledLights[nextIndex].writeDigitalValue(1);
}

// Event handler for motion detection
function onMotionDetected() {
    // Turn on the next LED light
    turnOnNextLight();
}

// Start the motion detector
motionDetector.start();

// Register the event handler for motion detection
motionDetector.on('motion', onMotionDetected);

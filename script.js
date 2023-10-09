// Function to start the simulation
function startSimulation() {
    // Generate a random scenario based on the literature review's identified challenges
    const scenarioDescription = generateScenario(); 

    // Display the scenario
    const scenarioElement = document.getElementById("scenarioDescription");
    scenarioElement.textContent = scenarioDescription;

    // Show the scenario section
    const scenarioSection = document.getElementById("scenario");
    scenarioSection.classList.remove("hidden");
}

// Function to generate a scenario based on literature review challenges
function generateScenario() {
    const challenges = [
        "A student is confused about the assignment instructions and seeks clarification.",
        "A parent expresses concern about their child's progress in the course.",
        "A colleague from a different department requests collaboration on a project."
    ];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
}

// Function to evaluate the user's response and provide feedback
function evaluateResponse() {
    // Get the user's response from the textarea
    const userInput = document.getElementById("userInput").value;

    // Evaluate the response based on the literature review's identified criteria
    const feedbackCriteria = evaluateFeedback(userInput);

    // Display the feedback
    displayFeedback(feedbackCriteria);
}

// Function to evaluate feedback based on literature review's identified criteria
function evaluateFeedback(userInput) {
    // Implement feedback evaluation logic later
    // Example criteria:
    const criteria = {
        clarity: 5, // Rating out of 5
        tone: 'friendly', // Feedback on tone
        responsiveness: 'timely', // Feedback on responsiveness
        appropriateness: 'excellent' // Feedback on appropriateness
    };

    return criteria;
}

// Function to display the feedback to the user
function displayFeedback(criteria) {
    const feedbackSection = document.getElementById("feedback");
    feedbackSection.innerHTML = `
        <h2>Feedback</h2>
        <p><strong>Clarity:</strong> ${criteria.clarity}/5</p>
        <p><strong>Tone:</strong> ${criteria.tone}</p>
        <p><strong>Responsiveness:</strong> ${criteria.responsiveness}</p>
        <p><strong>Appropriateness:</strong> ${criteria.appropriateness}</p>
    `;

    // You can customize the feedback display as needed
    feedbackSection.classList.remove("hidden");
}

// Call this function when the "Submit" button is clicked
document.getElementById("submit").addEventListener("click", evaluateResponse);

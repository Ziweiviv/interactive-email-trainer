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
    const scenarios = [
        {
            title: "Low-Achieving Students' Struggles",
            emails: [
                "Email 1 content for Low-Achieving Students' Struggles...",
                "Email 2 content for Low-Achieving Students' Struggles...",
                "Email 3 content for Low-Achieving Students' Struggles..."
            ]
        },
        {
            title: "Lack of Teacher Support",
            emails: [
                "Email 1 content for Lack of Teacher Support...",
                "Email 2 content for Lack of Teacher Support...",
                "Email 3 content for Lack of Teacher Support..."
            ]
        },
        {
            title: "Financial Difficulties",
            emails: [
                "Email 1 content for Financial Difficulties...",
                "Email 2 content for Financial Difficulties...",
                "Email 3 content for Financial Difficulties..."
            ]
        },
        {
            title: "Physical and Psychological Readiness",
            emails: [
                "Email 1 content for Physical and Psychological Readiness...",
                "Email 2 content for Physical and Psychological Readiness...",
                "Email 3 content for Physical and Psychological Readiness..."
            ]
        },
        {
            title: "Loss of Hands-on Experiences",
            emails: [
                "Email 1 content for Loss of Hands-on Experiences...",
                "Email 2 content for Loss of Hands-on Experiences...",
                "Email 3 content for Loss of Hands-on Experiences..."
            ]
        },
        {
            title: "Unequal Access to Education",
            emails: [
                "Email 1 content for Unequal Access to Education...",
                "Email 2 content for Unequal Access to Education...",
                "Email 3 content for Unequal Access to Education..."
            ]
        }
    ];

    // Randomly select a scenario
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    // Randomly select an email from the chosen scenario
    const randomEmail = randomScenario.emails[Math.floor(Math.random() * randomScenario.emails.length)];

    return {
        title: randomScenario.title,
        content: randomEmail
    };
}

// Example usage
const randomScenario = generateScenario();
console.log(randomScenario.title);
console.log(randomScenario.content);


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

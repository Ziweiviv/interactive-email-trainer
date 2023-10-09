function generateScenario() {
    const scenarios = [
        "Low-Achieving Students' Struggles",
        "Lack of Teacher Support",
        "Financial Difficulties",
        "Physical and Psychological Readiness",
        "Loss of Hands-on Experiences",
        "Unequal Access to Education"
    ];
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
}

function generateEmail(scenario) {
    const emails = {
        "Low-Achieving Students' Struggles": [
            "Hi professor,\n\nI'm having some difficulties understanding the assignment instructions. Could you please provide some clarification? Thank you.",
            "Hello,\n\nI'm struggling a bit with the assignment. Can you help me understand it better? Appreciate your assistance.",
            "Hey,\n\nI'm finding it hard to grasp the assignment details. Any chance you could explain it in simpler terms?"
        ],
        "Lack of Teacher Support": [
            "Hi professor,\n\nI feel like I'm not getting enough support in the online classes. Can you suggest some strategies to help me out?",
            "Hello,\n\nI've been feeling a bit lost in the online classes. Can you provide some guidance or resources to help me catch up?",
            "Hey,\n\nI'm struggling with the online format and could use some more support. Do you have any advice or tips?"
        ],
        "Financial Difficulties": [
            "Hi professor,\n\nI'm facing some financial challenges which are affecting my ability to access the required course materials. Any suggestions?",
            "Hello,\n\nI'm having some financial difficulties right now. How can I make sure I can still access all the necessary resources for the course?",
            "Hey,\n\nI'm worried about my finances, and it's impacting my access to course materials. Can you offer any advice or alternatives?"
        ],
        "Physical and Psychological Readiness": [
            "Hi professor,\n\nI'm feeling a bit unprepared for the demands of online learning. Can you share some tips on how to get better prepared?",
            "Hello,\n\nI'm not sure if I'm physically and mentally ready for online learning. Any advice on how to handle this transition?",
            "Hey,\n\nI'm feeling a bit overwhelmed by the shift to online learning. Can you suggest some ways to better prepare myself?"
        ],
        "Loss of Hands-on Experiences": [
            "Hi professor,\n\nI'm in a discipline that usually involves hands-on learning. I'm worried about losing out on practical skills. Any suggestions?",
            "Hello,\n\nI'm concerned about the impact of online learning on my practical skills. How can I make up for the lack of hands-on experiences?",
            "Hey,\n\nI'm in a discipline where hands-on learning is crucial. How can I ensure I'm not missing out on practical skills during online classes?"
        ],
        "Unequal Access to Education": [
            "Hi professor,\n\nI come from a disadvantaged background and face challenges in accessing quality online education. Any advice on how to level the playing field?",
            "Hello,\n\nI'm dealing with some challenges in accessing quality online education due to my background. Can you suggest some ways to overcome this?",
            "Hey,\n\nI'm facing some barriers in accessing quality online education. What steps can I take to ensure I have an equal opportunity to succeed?"
        ]
    };


const emailOptions = emails[scenario];
const randomIndex = Math.floor(Math.random() * emailOptions.length);
return [emailOptions[randomIndex], randomIndex];
}

function startSimulation() {
const scenarioDescription = document.getElementById('scenarioDescription');
const scenario = generateScenario();
scenarioDescription.textContent = scenario;
document.getElementById('scenario').classList.remove('hidden');
document.getElementById('feedback').classList.add('hidden');

// Call generateEmail and set the email content
const [emailContent, emailIndex] = generateEmail(scenario);
document.getElementById('generatedEmail').value = emailContent;

// Store the selected email index for evaluation
document.getElementById('generatedEmail').setAttribute('data-email-index', emailIndex);
}

function evaluateResponse() {
const userInput = document.getElementById('userInput').value;
const emailIndex = document.getElementById('userInput').getAttribute('data-email-index');
const feedbackSection = document.getElementById('feedback');
feedbackSection.innerHTML = `<h2>Feedback</h2>
<p>Your response:</p>
<p>${userInput}</p>
<p>Feedback based on your response...</p>`;
feedbackSection.classList.remove('hidden');
}
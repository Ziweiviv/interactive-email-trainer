function generateScenario() {
    const scenarios = [
        "Low-Achieving Students' Struggles",
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
            "Amy, a 25-year-old female student, enrolled in your online course. She submitted the first assignment just meeting the passing grade. However, she has become very quiet and her second assignment is now two days overdue.\n\nTips: In this email, it's important to express understanding and concern for Amy's situation. Additionally, inform her about the college's policy regarding late submissions. Offer support and encourage her to communicate any challenges she may be facing.",
            "Sam, an 18-year-old student, are enrolled in your online course. They missed the deadline for the first assignment but submitted it two days later. Unfortunately, their submission was incomplete, as they missed half of the assignment. The first half, while completed, falls within the passing range. Your task is to compose an email to Sam, encouraging them to resubmit the assignment and offering guidance on how to improve their next submission.\n\nTips: In this email, it's crucial to address Sam's situation with empathy and encouragement. Clearly communicate the issues with their previous submission and emphasize the importance of a complete assignment. Offer specific suggestions on how they can improve their work for the next submission. Remember to provide resources or support options that can aid Sam in their efforts to succeed.",
            "Alex, a 20-year-old male student, is enrolled in your online course. He has been consistently submitting assignments on time, but the performance has been below average. Their recent quiz results indicate a struggle with understanding the material. Tips: In this email, it's important to express concern about Alex's performance and offer support. Encourage them to seek help, such as attending virtual office hours or utilizing additional resources. Consider providing specific suggestions for improvement and highlight the importance of regular engagement with the course material."
        ],

        "Physical and Psychological Readiness": [
            "Sophia, a 32-year-old student with a history of anxiety, recently started your online course. She's struggling with the isolation of online learning and expresses concerns about her mental well-being. Sophia is seeking resources and support to help her navigate these challenges.\n\nTips: Provide Sophia with information about available mental health resources, both within your organization and externally. Encourage her to establish a routine that includes self-care practices and social connections, even in a digital environment.",
            "Alex, a 23-year-old student and a part-time fitness instructor, is enrolled in your online course. They're experiencing difficulties in adjusting to the sedentary nature of online learning after being used to an active lifestyle. They're seeking strategies to maintain physical health while pursuing their studies.\n\nTips: Offer Alex tailored advice on incorporating short, effective workouts into their routine, as well as tips on maintaining a healthy posture during extended study sessions.",
            "Emily, a 28-year-old student and a single parent of two young children, recently joined your online course. She expresses feeling overwhelmed by the responsibilities of parenting while trying to focus on her studies. She's seeking advice on how to create a balanced routine.\n\nTips: In this email, acknowledge Emily's unique situation and provide practical tips on time management, setting priorities, and finding moments of self-care amidst her responsibilities."
        ],
        "Loss of Hands-on Experiences": [
            "Hi professor,\n\nI'm in a discipline that usually involves hands-on learning. I'm worried about losing out on practical skills. Any suggestions?",
            "Hello,\n\nI'm concerned about the impact of online learning on my practical skills. How can I make up for the lack of hands-on experiences?",
            "Hey,\n\nI'm in a discipline where hands-on learning is crucial. How can I ensure I'm not missing out on practical skills during online classes?"
        ],
        "Unequal Access to Education": [
            "Isabella, a 20-year-old student from a rural area, recently joined your online course. She expresses concerns about the limited access to high-speed internet and technology in her area, which is affecting her ability to participate fully in the course. Isabella is seeking advice on how to overcome these access challenges.\n\nTips: In your response, acknowledge Isabella's situation and offer alternative solutions for accessing course materials and participating in online activities with limited internet connectivity. Provide guidance on how to optimize learning with the available resources, and suggest local or community resources that may provide additional support. Additionally, consider offering alternative assignments or assessments that don't heavily rely on online quizzes.",
            "Alex, a dedicated student with a slower laptop, recently encountered challenges while attempting to complete a written assignment. They describe experiencing delays and difficulties in accessing online resources. Alex is looking for strategies to optimize their laptop's performance for smoother online learning.\n\nTips: Advise Alex to close unnecessary applications, clear browser cache, and consider upgrading memory or storage if possible. Additionally, recommend utilizing offline resources or downloading essential course materials in advance. Also, advise that local libraries provide free usage of laptops and internet.",
            "Jamal, a motivated student, faces challenges due to limited access to technology. He doesn't have a personal computer or a reliable internet connection at home, which is impacting his ability to complete assignments and participate in online activities. He's seeking advice on how to overcome these obstacles. \n\n Tips: Acknowledge Jamal's situation and express understanding for the difficulties he's encountering without access to essential technology. Offer alternative solutions for completing assignments and participating in online activities without the need for a personal computer or a stable internet connection. Provide guidance on how to optimize learning with the available resources, including prioritizing assignments, creating a schedule, and utilizing offline tools for studying. Recommend downloading essential course materials during periods of higher connectivity for offline access. Inquire if there are any technological resources available through the institution, such as loaner laptops or tablets, that Jamal can borrow. Consider offering alternative assignments or assessments that don't heavily rely on technology, like projects or written assignments. Assure Jamal of your commitment to supporting his learning journey and willingness to work together to find solutions."
        ]
    };


    const emailOptions = emails[scenario];
    const randomIndex = Math.floor(Math.random() * emailOptions.length);
    return [emailOptions[randomIndex], randomIndex];
}

// Start the simulation
function startSimulation() {
    const scenarioDescription = document.getElementById('scenarioDescription');
    const generatedEmailTextarea = document.getElementById('generatedEmail');

    const scenario = generateScenario();
    scenarioDescription.textContent = scenario;

    const generatedEmailContent = generateEmail(scenario);
    generatedEmailTextarea.value = generatedEmailContent;

    generatedEmailTextarea.dataset.emailIndex = scenario;
    document.getElementById('scenario').classList.remove('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function evaluateResponse() {
    const userInput = document.getElementById('userInput').value;
    const feedbackSection = document.getElementById('feedback');

    const words = userInput.split(' ');
    let typoCount = 0;

    words.forEach(word => {
        if (!checkSpelling(word)) {
            typoCount++;
        }
    });

    feedbackSection.innerHTML = `<h2>Feedback</h2>
        <p>Your response:</p>
        <p>${userInput}</p>
        <p>Typo Count: ${typoCount}</p>`;
    feedbackSection.classList.remove('hidden');
}



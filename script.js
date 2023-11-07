function generateScenario() {
    const scenarios = [
        "Low-Achieving Students' Struggles",
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
            "Amy, a 25-year-old female student, enrolled in your online course. She submitted the first assignment just meeting the passing grade. However, she has become very quiet, and her second assignment is now two days overdue.\n\nTips: In this email, it's important to express understanding and concern for Amy's situation. Additionally, inform her about the college's policy regarding late submissions. Offer support and encourage her to communicate any challenges she may be facing.",
            "Sam, an 18-year-old student, are enrolled in your online course. They missed the deadline for the first assignment but submitted it two days later. Unfortunately, their submission was incomplete, as they missed half of the assignment. The first half, while completed, falls within the passing range. Your task is to compose an email to Sam, encouraging them to resubmit the assignment and offering guidance on how to improve their next submission. \n\nTips: In this email, it's crucial to address Sam's situation with empathy and encouragement. Clearly communicate the issues with their previous submission and emphasize the importance of a complete assignment. Offer specific suggestions on how they can improve their work for the next submission. Remember to provide resources or support options that can aid Sam in their efforts to succeed.",
            "Alex, a 20-year-old male student, is enrolled in your online course. He has been consistently submitting assignments on time, but the performance has been below average. Their recent quiz results indicate a struggle with understanding the material.\n\nTips: In this email, it's important to express concern about Alex's performance and offer support. Encourage them to seek help, such as attending virtual office hours or utilizing additional resources. Consider providing specific suggestions for improvement and highlight the importance of regular engagement with the course material.",
            " add another senario as an example."
        ],

        "Physical and Psychological Readiness": [
            "Sophia, a 32-year-old student with a history of anxiety, recently started your online course. She's struggling with the isolation of online learning and expresses concerns about her mental well-being. Sophia is seeking resources and support to help her navigate these challenges.\n\nTips: Provide Sophia with information about available mental health resources, both within your organization and externally. Encourage her to establish a routine that includes self-care practices and social connections, even in a digital environment.",
            "Alex, a 23-year-old student and a part-time fitness instructor, is enrolled in your online course. They're experiencing difficulties in adjusting to the sedentary nature of online learning after being used to an active lifestyle. They're seeking strategies to maintain physical health while pursuing their studies.\n\nTips: Offer Alex tailored advice on incorporating short, effective workouts into their routine, as well as tips on maintaining a healthy posture during extended study sessions.",
            "Emily, a 28-year-old student and a single parent of two young children, recently joined your online course. She expresses feeling overwhelmed by the responsibilities of parenting while trying to focus on her studies. She's seeking advice on how to create a balanced routine.\n\nTips: In this email, acknowledge Emily's unique situation and provide practical tips on time management, setting priorities, and finding moments of self-care amidst her responsibilities."
        ],
        "Loss of Hands-on Experiences": [
            "Ethan, a 24-year-old chemistry major, was looking forward to conducting experiments in the university's well-equipped laboratory. Unfortunately, the lab sessions have been moved online, and he's finding it hard to grasp complex concepts without hands-on experience.\n\nTips: Acknowledge Ethan's frustration and provide resources to supplement his virtual lab experience. Suggest interactive simulations and virtual lab platforms that closely mimic real experiments. Encourage him to seek out discussion forums or communities where he can connect with other students facing similar challenges.",
            "Jay, a 22-year-old engineering student, was looking forward to applying theoretical concepts in the institution's well-equipped lab. With labs moved online, he's grappling with translating theory into practice.\n\nTips: Express understanding for Jay's predicament and the importance of practical application in engineering. Suggest virtual engineering platforms or simulations that allow for hands-on experimentation and problem-solving. Encourage Jay to join virtual engineering communities or forums where he can collaborate with peers on projects and assignments.",
            "Amy, a 25-year-old biology major, was eagerly anticipating the hands-on experiments in her advanced biology course. Due to unforeseen circumstances, the lab sessions have shifted online, and she's struggling to replicate the same level of understanding.\n\nTips: Empathize with Amy's disappointment and acknowledge the value of hands-on experiences in her field. Recommend virtual lab platforms that offer interactive simulations and experiments, providing a close approximation of real-world scenarios. Encourage Amy to engage with online biology communities or forums where she can discuss concepts and experiments with fellow students."
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

// Define the sample emails
function getSampleEmail(scenario, index) {
    const sampleEmails = {
        "Low-Achieving Students' Struggles": [
            // Sample emails for "Low-Achieving Students' Struggles"
            `Subject: Supporting Your Progress in the Course
            
Hi Amy,

I hope this message finds you well. I noticed that you've recently faced some challenges with the course assignments. It's completely normal to encounter difficulties, and I'm here to support you.

If you're experiencing specific issues or have questions about the material, please don't hesitate to reach out. Additionally, remember that there are resources available, such as virtual office hours and study groups, to provide extra assistance.

Keep up the good work, and let's work together to ensure your success in the course.

Best regards,
XXX`,

            `Subject: Feedback on Your Recent Assignment
            
Hi Sam,

I hope you're doing well. I wanted to discuss the recent assignment you submitted. While the first half of the assignment was well-done, I noticed that the second half was missing.

It's crucial to submit complete assignments to demonstrate your understanding of the material. I encourage you to review the assignment guidelines and ensure all components are addressed.

If you have any questions or need further clarification, please feel free to reach out. I'm here to help you succeed in the course.

Best regards,
XXX`,

            `Subject: Supporting Your Academic Progress
            
Hi Alex,

I hope this message finds you well. I wanted to discuss your recent quiz results, which indicate a struggle with understanding the material.

It's important to address any challenges you're facing early on. I encourage you to attend virtual office hours or utilize additional resources available to you. Regular engagement with the course material can greatly enhance your understanding.

If there are specific topics you find difficult, please let me know. I'm here to assist you in any way I can.

Best regards,
XXX`
        ],

        "Physical and Psychological Readiness": [
            // Sample emails for "Physical and Psychological Readiness"
            `Subject: Supporting Your Well-Being in Online Learning
            
Hi Sophia,

I hope this message finds you in good spirits. I wanted to address the concerns you've shared about feeling isolated and anxious during our online course.

Your well-being is a top priority, and I'm here to support you. I recommend establishing a routine that includes self-care practices, regular breaks, and opportunities for social connection, even in a digital environment. Additionally, please remember that there are mental health resources available both within our institution and externally.

If you ever need someone to talk to or additional resources, please don't hesitate to reach out. Your success and well-being are important to us.

Take care,
XXX`,

            `Subject: Balancing Fitness and Studies in Online Learning
            
Hi Alex,

I hope this message finds you well. It's completely normal to find it challenging to adjust to a more sedentary lifestyle while engaging in online learning.

To maintain your physical health, I recommend incorporating short, effective workouts into your routine. Even a brief daily walk or simple stretches can make a significant difference. Additionally, paying attention to your posture during extended study sessions can help alleviate discomfort.

Remember, your well-being is important. Finding a balance between fitness and studies will contribute to your overall success.

Best regards,
XXX`,

            `Subject: Creating a Balanced Routine for Success
            
Hi Emily,

I hope this message finds you managing your responsibilities with grace. Balancing parenting and studies is undoubtedly a challenge, but it's also a tremendous achievement.

To help you navigate this, I recommend establishing a structured routine that prioritizes essential tasks. Setting aside specific study times and moments for self-care is crucial. Additionally, don't hesitate to seek support from friends, family, or community resources.

Your determination is admirable, and I'm here to support you every step of the way.

Warm regards,
XXX`
        ],

        "Loss of Hands-on Experiences": [
            // Sample emails for "Loss of Hands-on Experiences"
            `Subject: Enhancing Your Virtual Lab Experience
            
Hi Ethan,

I hope this message finds you well. I understand that you were looking forward to conducting experiments in our university's well-equipped chemistry laboratory.

While online learning has shifted the way we approach experiments, there are still valuable resources available. I recommend exploring interactive simulations and virtual lab platforms that closely mimic real experiments. These platforms can provide a hands-on experience even in a digital environment. Additionally, connecting with other students facing similar challenges through online chemistry communities or forums can be a great way to share experiences and knowledge.

If you have any specific questions or need guidance on virtual labs, please don't hesitate to reach out. I'm here to help you succeed.

Best regards,
XXX`,

            `Subject: Bridging Theory and Practice in Engineering
            
Hi Jay,

I hope you're doing well. It's completely understandable that you're grappling with translating theoretical concepts into practice, especially with our labs moving online.

To help bridge this gap, I recommend exploring virtual engineering platforms and simulations that offer hands-on experimentation and problem-solving experiences. These platforms can provide valuable practical exposure even in a digital format. Additionally, I encourage you to join virtual engineering communities or forums where you can collaborate with peers on projects and assignments. Sharing experiences and knowledge with others can be extremely beneficial.

If you have specific questions or need guidance on virtual engineering tools, please reach out. I'm here to assist you in any way I can.

Best regards,
XXX`,

            `Subject: Maximizing Your Online Biology Experience
            
Hi Amy,

I hope this message finds you eager to explore the world of biology. I understand that you were anticipating hands-on experiments in our advanced biology course, and the shift to online labs has been a challenge.

To enhance your understanding, I recommend exploring virtual lab platforms offering interactive simulations and experiments that closely resemble real-world scenarios. Engaging with online biology communities or forums can also provide opportunities to discuss concepts and experiments with fellow students.

If you have any specific questions or need guidance on virtual biology labs, please feel free to reach out. I'm here to help you succeed in your studies.

Best regards,
XXX`
        ],

        "Unequal Access to Education":[
            // Sample emails for "Unequal Access to Education"
            `Subject: Addressing Access Challenges for Effective Learning
            
Hi Isabella,

I hope this message finds you well.

I understand that you're facing challenges with limited access to high-speed internet and technology in your area. It's important to us that you have an equal opportunity to participate fully in the course.

To address this, I recommend exploring alternative solutions for accessing course materials and participating in online activities with limited internet connectivity. Additionally, consider optimizing your learning with the available resources. You might find it helpful to download essential course materials in advance or explore local or community resources that provide additional support.

If there are specific assignments or assessments that pose difficulties due to limited internet connectivity, please let me know. We can work together to find alternative solutions.

Your dedication to your studies is commendable, and I'm here to support you every step of the way.

Best regards,
XXX`,

            `Subject: Optimizing Your Online Learning Experience with Limited Resources
            
Hi Alex,

I hope this message finds you well. I understand that you're dedicated to your studies and have encountered challenges due to your current laptop's performance.

To optimize your online learning experience, I recommend the following steps:

1. Close unnecessary applications to free up system resources.
2. Clear your browser cache regularly for smoother performance.
3. Consider upgrading memory or storage if possible.
4. Take advantage of offline resources by downloading essential course materials in advance.

Additionally, local libraries often provide free usage of laptops and internet facilities. This could be a valuable resource for you.

If you have any further questions or need additional support, please don't hesitate to reach out. Your success in the course is important to us.

Best regards,
XXX`,

            `Subject: Overcoming Technological Obstacles for Success
            
Hi Jamal,

I hope this message finds you well.

I understand that you're facing challenges due to limited access to technology, which is impacting your ability to complete assignments and participate in online activities.

I want to assure you that your situation is important to us, and we're committed to supporting your learning journey. To help you overcome these obstacles, I recommend the following steps:

1. Explore alternative solutions for completing assignments and participating in online activities that don't require a personal computer or a stable internet connection.
2. Prioritize assignments and create a schedule that aligns with periods of higher connectivity.
3. Utilize offline tools and resources for studying.

Additionally, I recommend downloading essential course materials during periods of higher connectivity for offline access.

If you have any specific questions or need further guidance, please don't hesitate to reach out. We're here to work together to find solutions that support your success.

Best regards,
XXX`
        ]
    };

    return sampleEmails[scenario][index];
}





function startSimulation() {
    const scenarioDescription = document.getElementById('scenarioDescription');
    const generatedEmailTextarea = document.getElementById('generatedEmail');

    const scenario = generateScenario();
    scenarioDescription.textContent = scenario;

    const [generatedEmailContent, emailIndex] = generateEmail(scenario);
    generatedEmailTextarea.value = generatedEmailContent;

    generatedEmailTextarea.dataset.emailIndex = emailIndex;
    document.getElementById('scenario').classList.remove('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

function evaluateResponse() {
    const userInput = document.getElementById('userInput').value;
    const feedbackSection = document.getElementById('feedback');
    const emailIndex = document.getElementById('generatedEmail').dataset.emailIndex;
    const generatedScenario = document.getElementById('scenarioDescription').textContent;

    const sampleEmail = getSampleEmail(generatedScenario, emailIndex);

    feedbackSection.innerHTML = `
        <h3>Sample Email for Your Reference:</h3>
        <pre>${sampleEmail}</pre>
    `;
    feedbackSection.classList.remove('hidden');
}
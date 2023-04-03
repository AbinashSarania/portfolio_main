import React, { useState } from 'react';
import classNames from 'classnames';

const questions = [
    'Can you tell us a little bit about yourself and your background?',
    'What inspired you to pursue a career in software development?',
    'What are your favorite programming languages or technologies to work with and why?',
    'Can you walk us through a project that you have worked on and the technologies you used?',
    'How do you stay current with new technologies and trends in the industry?',
    'How do you approach problem-solving and troubleshooting?',
    'Can you give an example of a particularly challenging project you have worked on and how you overcame any obstacles?',
    'How do you collaborate with team members and communicate effectively in a team environment?',
    'How do you prioritize tasks and manage your time effectively?',
    'What are your long-term career goals as a developer?',
];

const answers = [
    'I am a full-stack developer with experience in various technologies such as MERN, LAMP, and .NET. I have completed my Bachelor\'s and Master\'s degrees in Computer Application from NERIM, Guwahati, and have earned respectable percentages in both. As a developer, I enjoy building personal projects and implementing technical solutions that solve complex problems. I am passionate about keeping up-to-date with the latest technologies and frameworks in the industry and am always looking for opportunities to learn and grow. In addition to my technical skills, I have developed various soft skills, such as persistence, attention to detail, and natural negotiation skills, that I believe are essential for success in any role. Overall, I am excited to continue honing my skills and contributing to the success of any organization I join.',
    'I have always been fascinated by the power of technology to solve complex problems and improve people\'s lives. As I grew up, I became increasingly interested in the world of software development, and I was captivated by the endless possibilities that technology offers. I realized that I could use my passion for coding and problem-solving to create innovative solutions that can make a real impact in the world. That\'s what inspired me to pursue a career in software development.',
    'As a full-stack developer, I have worked with a variety of programming languages and technologies. However, I have a particular affinity for the MERN (MongoDB, Express, React, and Node.js) stack. ReactJS is my favorite front-end library because of its flexibility and ease of use. With ReactJS, I can build complex user interfaces and design custom components with ease. I also enjoy working with Node.js and ExpressJS for server-side development, as they provide a lightweight and flexible platform for building scalable and robust APIs. In addition to MERN, I have also worked with LAMP (Linux, Apache, MySQL, and PHP) stack and .NET technologies. I enjoy working with PHP because of its simplicity and ease of use, and .NET provides a powerful framework for building robust applications.Finally, I am also passionate about emerging technologies such as blockchain and web 3.0. I believe that these technologies have the potential to revolutionize the way we interact with each other and do business, and I am excited to be at the forefront of this movement.',
    'One of the most exciting projects I worked on was a Hospital Management System, where I implemented a scalable and robust system utilizing the MERN stack architecture (MongoDB, ExpressJS, ReactJS, and Node.JS). The project aimed to provide a comprehensive tracking system for healthcare data and transactions while simplifying the process for users to register and schedule appointments.I structured the system into three distinct panels: Admin, Patients, and Doctors, providing customized interfaces and capabilities to each user group. The user-friendly appointment scheduling system enabled users to book appointments quickly and efficiently, reducing wait times for patients and improving overall satisfaction.In addition to the MERN stack, I also utilized RESTful API, Docker, MySQL, and MongoDB to ensure seamless data flow and storage. The project also incorporated several security measures to ensure patient data privacy and protection.Overall, this project was an exciting challenge that allowed me to use my full-stack development skills to design and integrate complex systems with intuitive problem-solving skills. It was a great experience, and I am looking forward to tackling new projects that challenge me to grow as a developer.',
    'As a software developer, it\'s essential to stay up-to-date with the latest technologies and trends in the industry. I regularly read tech blogs and news articles to keep myself informed about new developments. I also follow industry experts on social media and attend conferences and meetups to learn from peers and gain new perspectives. In addition, I often work on side projects to experiment with new technologies and stay sharp in my skills. Finally, I participate in online communities and forums where developers can discuss new ideas and technologies, share their knowledge and experiences, and provide feedback to one another.',
    'When faced with a problem or issue, I usually start by breaking down the problem into smaller components and analyzing each part separately. Then, I try to identify any patterns or potential causes for the problem. Once I have a better understanding of the issue, I start researching and gathering information to find possible solutions.If the problem still persists, I turn to my colleagues/friends or online communities for help, seeking advice or feedback on the issue. Collaboration and open communication are crucial in problem-solving, and I always try to keep an open mind and remain flexible in my approach.When troubleshooting, I follow a systematic approach, isolating the problem and testing various solutions to determine the root cause of the issue. I also document my process and any solutions that were successful for future reference.',
    'I can give you an example of a challenging project I worked on using the YouTube API. The project involved building an application that could search for and display YouTube videos based on user input. While working on this project, I faced several challenges, such as understanding the YouTube API documentation, working with OAuth authentication, and handling pagination of search results. To overcome these challenges, I began by reading through the YouTube API documentation and experimenting with the different endpoints to gain a better understanding of how the API worked. I also researched best practices for working with OAuth authentication to ensure the security of the application. One of the biggest challenges I faced was handling pagination of search results, as the API would only return a limited number of results per request. To solve this problem, I implemented a recursive function that would continue making API requests until all search results had been retrieved. Throughout the project, I also made sure to thoroughly test my code, including error handling and edge cases, to ensure that the application was reliable and user-friendly. In the end, I was able to build a fully functional YouTube search and display application that met all the requirements and provided a smooth user experience. This project taught me valuable skills in working with APIs and handling complex data structures, and I\'m proud of the solution I was able to create.',
    'As a software developer, collaboration and effective communication are crucial skills when working in a team environment. To collaborate with team members, I make sure to establish clear communication channels and set expectations for regular check-ins and updates. To facilitate effective communication, I make use of collaboration tools such as Slack, Microsoft Teams, or Zoom, to have regular meetings and share project updates. I also make sure to actively listen to my team members\' perspectives and input, and provide feedback and suggestions in a constructive and respectful manner. To ensure that everyone is on the same page, I also make use of project management tools such as Trello or JIRA to track progress and assign tasks. These tools help to ensure that everyone knows what they are responsible for and that deadlines are being met. In addition, I also try to promote a positive team environment by being supportive, respectful, and fostering a culture of open communication. This helps to ensure that everyone feels comfortable contributing their ideas and that we can work together effectively as a team to achieve our goals.',
    'As a software developer, prioritizing tasks and managing my time effectively is crucial to meeting project deadlines and delivering high-quality work. To do this, I typically use the following approach: Evaluate the urgency and importance of each task: I start by identifying which tasks are the most critical and need to be completed first. I evaluate the urgency and importance of each task and prioritize accordingly. Break down larger tasks into smaller subtasks: For larger, more complex tasks, I break them down into smaller subtasks that are more manageable and easier to accomplish. This helps me stay focused and motivated, and I can track progress more easily. Use a to-do list or project management tool: I use a to-do list or a project management tool such as Trello or Asana to organize my tasks and keep track of deadlines. This allows me to see what needs to be done and when, and helps me stay on top of things. Communicate with team members: If I am working in a team environment, I make sure to communicate with team members regularly to ensure that we are all on the same page and working towards the same goals. We discuss priorities, progress, and any potential roadblocks that may affect the project timeline. Avoid distractions: Finally, I try to eliminate distractions as much as possible when working on tasks. This means turning off my phone, logging out of social media accounts, and finding a quiet workspace where I can focus on the task at hand. By following these steps, I am able to effectively manage my time and prioritize tasks, leading to a more productive and efficient workflow.',
    'My long-term career goals as a developer are to continue to learn and grow in my skills and knowledge, to take on more challenging projects, and to eventually become a senior or lead developer. I also have an interest in exploring different areas of software development, such as mobile app development, machine learning, and artificial intelligence, and I hope to have the opportunity to work on projects in these areas in the future. Ultimately, I want to make a positive impact in the industry and contribute to the development of innovative and impactful technology solutions.',
];

const ChatBot = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    const handleQuestionClick = (index) => {
        setActiveQuestion(index);
    };

    return (
        <div>
<div class="flex justify-center">
    <div class="text-center mx-auto">
        <h1 class="font-bold font-Urbanist items-center tracking-wider cursor-pointer relative" style={{ maxWidth: '60vw', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            <span class="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Gain Insights on my Expertise and Experience.
            </span>
        </h1>
    </div>
</div>


            <div className="container mx-auto my-8 p-4 text-justify ">
                <div className="mb-4">
                    {questions.map((question, index) => (
                        <button
                            key={index}
                            className={classNames('mr-2 mb-2 px-2 py-1 rounded-lg transition duration-500 ease-in-out font-Urbanist', {
                                'bg-gray-200': activeQuestion === index,
                                'bg-gradient-to-r from-purple-400 to-pink-400': true,
                                'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 ': true,
                            })}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {question}
                        </button>
                    ))}
                </div>
                <div className="text-lg font-Urbanist">{answers[activeQuestion]}</div>
            </div>
        </div>
    );
};

export default ChatBot;

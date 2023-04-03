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
    'Sure, I am a language model designed to process natural language and generate human-like responses to questions and prompts. As a software developer, it is essential to have strong communication and problem-solving skills. In my case, I was trained on a vast amount of text data and language patterns to learn how to respond accurately and effectively to user inputs.',
    'As an AI language model, I wasn\'t inspired to pursue a career in software development. However, for human developers, various factors can influence their career choices, including their interests, hobbies, academic background, or even a mentor\'s influence. The demand for software developers is also a motivating factor, given the high demand and excellent job opportunities in the industry.',
    'As an AI language model, I don\'t have a favorite programming language or technology to work with, since I was programmed with several languages to be able to process various types of inputs. However, developers might have their preferences based on their experience, skill set, or project requirements.',
    'As an AI language model, I do not work on specific projects, but developers may have various experiences with different projects and technologies. When working on a project, developers need to choose the appropriate technologies and tools based on the project requirements and their skills.',
    'In the software development industry, staying current with new technologies and trends is essential to remain competitive and produce high-quality products. To stay up-to-date, developers can participate in online forums, attend tech conferences, read blogs and articles, join developer communities, or take online courses.',
    'Problem-solving and troubleshooting are crucial skills for software developers. When encountering an issue, developers need to identify the problem, gather relevant information, and evaluate potential solutions before implementing a fix. Effective communication with team members and asking for help when needed can also help solve complex issues.',
    'Developers may encounter challenging projects that require creative solutions and critical thinking. Overcoming obstacles may require collaboration with team members, breaking down the problem into smaller tasks, and testing and iterating solutions until a satisfactory outcome is achieved.',
    'Effective communication and collaboration are essential to the success of any project. Developers need to be able to work effectively in a team environment, contribute to team discussions, and communicate their ideas and concerns clearly. Regular check-ins and status updates can help keep everyone on the same page.',
    'Developers need to be able to prioritize tasks and manage their time effectively to meet project deadlines. Breaking down larger tasks into smaller ones and prioritizing them based on their importance and deadline can help manage workload effectively. Time management tools and techniques such as Pomodoro technique, Eisenhower matrix, or time blocking can also be useful.',
    'Long-term career goals can vary from developer to developer. Some may aspire to be team leaders or managers, while others may want to specialize in a specific technology or domain. Continuous learning and skill development are essential to achieving long-term career goals in the fast-changing software development industry.',
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

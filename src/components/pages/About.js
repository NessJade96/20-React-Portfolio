import React from 'react';
import profilePic from '../../assets/profilepic.jpg';

export default function About() {
	return (
		<main class="p-8 m-4 ml-auto mr-auto lg:max-w-7xl lg:flex lg:flex-row md:p-10 xl:p-20">
			<div class="flex flex-col place-items-center lg:px-20">
				<div class="mb-5 w-16 h-16 rounded-full bg-amber-500 md:w-24 md:h-24 lg:w-44 lg:h-44 lg:mt-10">
					<img
						class="inline-flex justify-center object-fill w-auto h-12 m-2 rounded-full md:max-w-none md:w-20 md:h-20 lg:w-40 lg:h-40 "
						src={profilePic}
						alt="Vanessa smiling"
					/>
				</div>
			</div>
			<p>
				<h2 class="py-5 text-2xl text-center xl:text-3xl">About Me</h2>
				Hi! I am a full stack web developer with strong organization and
				communication skills from a background in administration and retail
				management. With strong communication prowess I quickly assess
				situations and collaborate with peers to find the best practice
				solutions. As a fast paced learner I am excited to bring my skills to an
				enriching, progressive team environment to improve quality web
				applications. <br />
				<h2 class="py-5  text-center text-2xl xl:text-3xl">Technical Skills</h2>
				<p>
					HTML, CSS, Git, JavaScript, DOM, Bootstrap, Tailwind, Styled
					Components, JQuery, AJAX, APIs, Node.js, Object-Oriented Programming,
					Express.js, mySQL, Object-Relational Mapping, Model-View-Controller,
					Handlebars.js, Computer science for JavaScript, nodeMailer, NoSQL,
					MongoDB, Mongoose, Progressive Web Applications, Webpack, React, MERN,
					and Extensive knowledge in Visual Studio Code
					{/* <button class="my-5 block border-2 border-amber-600 bg-amber-300 px-3 hover:bg-amber-600 rounded hover:text-orange-50">
						<a href="/Portfolio">View Projects </a>
					</button> */}
				</p>
			</p>
		</main>
	);
}

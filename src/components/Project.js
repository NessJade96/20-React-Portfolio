import React from 'react';
import listIt from '../assets/List-It.png.jpg';
// import MVCTechyBlog from '../assets/MVC-TechyBlog.jpg';
import Booksearch from '../assets/Booksearch.PNG';
import cheapdate from '../assets/cheapdate.jpg';
import pawfectMatch from '../assets/Project-2-pawfectmatch.png';
// import PWAJate from '../assets/PWA-JATE.PNG';

//Array of my projects
const projects = [
	{
		id: 1,
		group: 'solo',
		name: 'List-It',
		stack: 'MERN',
		src: listIt,
		alt: 'List-It homepage screenshot',
		hrefDeploy: 'https://web-production-dec1.up.railway.app/',
		hrefGithub: 'https://github.com/NessJade96/List-It',
		description:
			'This shopping list application is a dynamic application created with Mongodb, Express, React, and Node. The user is able to create an account, and access their saved shopping lists from anywhere, users can even link their shopping lists with others! This was a solo full stack application that I created from beginning to end. The techonologies I used are: Vite for React, HTML, CSS, Styled-Components, Babel-plugin-styled-components, Apollo, GraphQL, Bcrypt, Express, JWT, Mongoose, Nodemon, React-dom, React-router-dom, and is deployed on Heroku.',
	},
	{
		id: 2,
		group: 'collaborative',
		name: 'Pawfect Match',
		stack: 'Fullstack MySQL',
		src: pawfectMatch,
		alt: 'Pawfect Match homepage screenshot',
		hrefDeploy: 'https://pawfect---match.herokuapp.com/',
		hrefGithub: 'https://github.com/NessJade96/pawfect-match',
		description:
			'Pawfect Match is an application where a user can post their pet for adoption. Other users can then message the owner to meet and potentially adopt the pet if it is their "perfect match". The technologies used to build this app are: HTML, CSS, Bootstrap, JS, Node, Express, Handlebars, Sequelize, and more. This was a collaborative project, I was involved with Signup, Login, js functions, styling, email notifications, and more.',
	},
	{
		id: 3,
		group: 'collaborative',
		name: 'Cheapdate',
		stack: 'Frontend API',
		src: cheapdate,
		alt: 'Cheapdate homepage screenshot',
		hrefDeploy: 'https://nessjade96.github.io/cheap-date/index.html',
		hrefGithub: 'https://github.com/NessJade96/cheap-date',
		description:
			'Cheapdate was created because we realised that the vast majority of people who enjoyed cocktails out at the bars, Would like to create them at home using this application. We allow users to seach for their favourite cocktails, and browse the numerous recipes we have to offer. Users can also favourite drinks, save ingredients, and check live prices. This app uses HTML, CSS, Bootstrap, external APIs, Javacsript, and Jquery. This was a collaborative project, and I was involved with the APIs, Javascript, and Jquery. Additionally I created the favourite/heart function.',
	},
	// {
	// 	id: 4,
	// 	group: 'solo',
	// 	name: 'JATE',
	// 	stack: 'PWA',
	// 	src: PWAJate,
	// 	alt: 'JATE homepage screenshot',
	// 	hrefDeploy: 'https://lit-refuge-55705.herokuapp.com/',
	// 	hrefGithub:
	// 		'https://github.com/NessJade96/19-Text-Editor-Made-Using-Progressive-Web-Applications',
	// 	description:
	// 		'A text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline. The technologies used are HTML, CSS, Webpack, Javascript. I was given starter code to convert this into a PWA',
	// },
	// {
	// 	id: 5,
	// 	group: 'solo',
	// 	name: 'Techy Blog',
	// 	stack: 'MVC',
	// 	src: MVCTechyBlog,
	// 	alt: 'Techy Blog homepage screenshot',
	// 	hrefDeploy: 'https://shielded-coast-87876.herokuapp.com/',
	// 	hrefGithub:
	// 		'https://github.com/NessJade96/14-Model-View-Controller-MVC-Tech-Blog',
	// 	description:
	// 		'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I created this application solo from scratch using MySql, sequelize, MVC, handlebars, HTML, Tailwind, Javascript.',
	// },
	{
		id: 4,
		group: 'solo',
		name: 'Book Search Engine',
		stack: 'MERN',
		src: Booksearch,
		alt: 'Google book search screenshot',
		hrefDeploy:
			'https://book-search-engine-graphql-mern-production.up.railway.app/',
		hrefGithub: 'https://github.com/NessJade96/Book-Search-Engine-GraphQL-MERN',
		description:
			'I Converted a RESTful API into GraphQL. I was given starter code of a fully functioning Google Books API search engine built with a RESTful API, and I successfully refactored it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.',
	},
];

export default function Project({filter}) {
	// The below will render each of my projects below as seperate components
	return (
		<div class="my-50 md:grid md:grid-cols-1">
			{projects.map((project) => {
				const isAll = filter === 'all';
				const isMatchingGroup = filter === project.group;
				if (!isAll && !isMatchingGroup) {
					return null;
				}
				return (
					<article class="my-10 p-7 bg-orange-100" key={project.id}>
						<div class="flex flex-col items-center ">
							<div class="md:flex ">
								<div class="flex aspect-video items-center ">
									<a target="_blank" href={project.hrefDeploy} rel="noreferrer">
										<img
											src={project.src}
											alt={project.alt}
											class="object-fill hover:opacity-40 border-2 border-amber-600"
										/>
									</a>
								</div>
								<div class="md:ml-5 md:max-w-md">
									<h3 class="text-4xl my-4">{project.name}</h3>
									{project.description}
								</div>
							</div>
							<div class="flex p-3">
								<a
									target="_blank"
									class="border-2 border-amber-600 bg-amber-300 px-3 my-1 hover:bg-amber-600 rounded hover:text-orange-50"
									href={project.hrefDeploy}
									rel="noreferrer"
								>
									Visit {project.name}
								</a>
								<a
									target="_blank"
									class="mx-3 border-2 border-amber-600 bg-amber-300 px-3 my-1 hover:bg-amber-600 rounded hover:text-orange-50"
									href={project.hrefGithub}
									rel="noreferrer"
								>
									Github
								</a>
							</div>
						</div>
					</article>
				);
			})}
		</div>
	);
}

import React from 'react';
import APIWeather from '../assets/API-weather.png';
import expressNoteTaker from '../assets/Express-Notetaker.png';
import MVCTechyBlog from '../assets/MVC-TechyBlog.jpg';
import cheapdate from '../assets/cheapdate.jpg';
import pawfectMatch from '../assets/Project-2-pawfectmatch.png';
import PWAJate from '../assets/PWA-JATE.PNG';

export default function Project() {
	//Array of my projects
	const projects = [
		{
			id: 1,
			name: 'Fullstack MySQL - Pawfect Match',
			src: pawfectMatch,
			alt: 'Pawfect Match homepage screenshot',
			hrefDeploy: 'https://pawfect---match.herokuapp.com/',
			hrefGithub: 'https://github.com/NessJade96/pawfect-match',
		},
		{
			id: 2,
			name: 'Frontend API - Cheapdate',
			src: cheapdate,
			alt: 'Cheapdate homepage screenshot',
			hrefDeploy: 'https://nessjade96.github.io/cheap-date/index.html',
			hrefGithub: 'https://github.com/NessJade96/cheap-date',
		},
		{
			id: 3,
			name: 'PWA - JATE',
			src: PWAJate,
			alt: 'JATE homepage screenshot',
			hrefDeploy: 'https://lit-refuge-55705.herokuapp.com/',
			hrefGithub:
				'https://github.com/NessJade96/19-Text-Editor-Made-Using-Progressive-Web-Applications',
		},
		{
			id: 4,
			name: 'MVC - Techy Blog',
			src: MVCTechyBlog,
			alt: 'Techy Blog homepage screenshot',
			hrefDeploy: 'https://shielded-coast-87876.herokuapp.com/',
			hrefGithub:
				'https://github.com/NessJade96/14-Model-View-Controller-MVC-Tech-Blog',
		},
		{
			id: 5,
			name: 'Express.js - Note Taker',
			src: expressNoteTaker,
			alt: 'Note Taker homepage screenshot',
			hrefDeploy: 'https://glacial-river-44300.herokuapp.com/',
			hrefGithub: 'https://github.com/NessJade96/Express.js-Note-Taker',
		},
		{
			id: 6,
			name: 'APIs - Weather Dashboard',
			src: APIWeather,
			alt: 'Weather API homepage screenshot',
			hrefDeploy:
				'https://nessjade96.github.io/Server-Side-APIs-Weather-Dashboard/',
			hrefGithub:
				'https://github.com/NessJade96/Server-Side-APIs-Weather-Dashboard',
		},
	];
	// The below will render each of my projects below as seperate components
	return (
		<div class=" md:grid md:grid-cols-2">
			{projects.map((project) => (
				<article class="py-3" key={project.id}>
					<div class="flex flex-col items-center ">
						<div class="justify-center w-4/5 border-2 aspect-video border-amber-600 ">
							<a target="_blank" href={project.hrefDeploy} rel="noreferrer">
								<img
									src={project.src}
									alt={project.alt}
									class="object-fill hover:opacity-40 "
								/>
							</a>
						</div>
						<div class="flex px-3">
							<a
								target="_blank"
								class="px-3 my-1 hover:bg-amber-600 rounded hover:text-orange-50"
								href={project.hrefDeploy}
								rel="noreferrer"
							>
								<h3>{project.name}</h3>
							</a>
							<a
								target="_blank"
								class="px-3 my-1 hover:bg-amber-600 rounded hover:text-orange-50"
								href={project.hrefGithub}
								rel="noreferrer"
							>
								Github
							</a>
						</div>
					</div>
				</article>
			))}
		</div>
	);
}

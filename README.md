# 20-React-Portfolio

## Description:

Being a web developer means being part of a community. I need a place to share my projects not only if I'm applying for jobs or working as a freelancer but also so that I can share my work with fellow developers and collaborate on future projects. Now that I've completed multiple projects, I am to create a portfolio, using my new React skills to help be set apart from other developers whose portfolios don’t use the latest technologies.

## User Setup:

To use this at home, in your terminal run the following commands to invoke the application:
`npm i` to install packages,
then `npm run start` starts the live server.

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Screenshots:

![image](./assets/)

## Links:

- GitHub: https://github.com/NessJade96/20-React-Portfolio
- Heroku:

## planning notes:

1. Go through the criteria

- Research styling theme and have a concept idea for mobile, tablet, and desktop.
- Plain HTML and CSS styling created before transferring to React app.
- Setup React, src code etc. Client and Server.
- Move the plain html into react components so they conditionally render.
- Finalise app and deploy.

## Commit notes:

1. Write my planning notes, folder setup, and create readme.md

2. Started on vanilla HTML and CSS using Tailwind.

3. Created mobile about me, commit to test on my mobile.

4. All responsive styling for About Me page done

5. Responsive styling for Portfolio page

6. fixed a few responsive errors on Portfolio page.

7. Finished the responsive CSS styling and HTML content. Next I will move onto turning this into React.

8. Today I got the gitLab criteria so I was able to create react app and ensure I had all the correct versions in my package.json. Set up React components and pages, and rendered the plain html to the page in React.

9. SGot the css displaying by changing react app version to 5.0.1 from 4.0.1 in the package.json. Set up React pages to conditionally render depending on what nav bar link is selected and imported tailwind styling.

10. Moved assets into src folder, changed the fa-links and my profile img links to render with React.

11. Imported the project images to the project component and changed the parent div in the project export function. Got the project components rendering from an array of projet information.

12.

Thank you, Vanessa Bloom <(^.^)>

export default function Project() {
return (
<div class=" md:grid md:grid-cols-2">
<article class="py-3">
<div class="flex flex-col items-center ">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={pawfectMatch}
							alt="Pawfect Match screenshot"
							class="object-fill hover:opacity-40 "
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://pawfect---match.herokuapp.com/"
							rel="noreferrer"
						>
<h3>Fullstack mysql - Pawfect Match</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/pawfect-match"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
<article class="py-3">
<div class="flex flex-col items-center">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={cheapdate}
							alt="Cheapdate homepage screenshot"
							class="h-full hover:opacity-40"
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://nessjade96.github.io/cheap-date/index.html"
							rel="noreferrer"
						>
<h3>frontend API - Cheapdate</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/cheap-date"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
<article class="py-3">
<div class="flex flex-col items-center">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={PWAJate}
							alt="JATE homepage screenshot"
							class="h-full hover:opacity-40"
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://lit-refuge-55705.herokuapp.com/"
							rel="noreferrer"
						>
<h3>PWA - JATE</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/19-Text-Editor-Made-Using-Progressive-Web-Applications"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
<article class="py-3">
<div class="flex flex-col items-center">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={MVCTechyBlog}
							alt="Techy Blog homepage screenshot"
							class="h-full hover:opacity-40"
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://shielded-coast-87876.herokuapp.com/"
							rel="noreferrer"
						>
<h3>MVC - Techy Blog</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/14-Model-View-Controller-MVC-Tech-Blog"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
<article class="py-3">
<div class="flex flex-col items-center">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={expressNoteTaker}
							alt="Note Taker homepage screenshot"
							class="h-full hover:opacity-40"
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://glacial-river-44300.herokuapp.com/"
							rel="noreferrer"
						>
<h3>Express.js - Note Taker</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/Express.js-Note-Taker"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
<article class="py-3">
<div class="flex flex-col items-center">
<div class="justify-center w-4/5 border-2 aspect-video border-amber-600">
<img
							src={APIWeather}
							alt="Weather API homepage screenshot"
							class="h-full hover:opacity-40"
						/>
</div>
<div class="flex px-3">
<a
							target="_blank"
							class="px-3"
							href="https://nessjade96.github.io/Server-Side-APIs-Weather-Dashboard/"
							rel="noreferrer"
						>
<h3>APIs - Weather Dashboard</h3>
</a>
<a
							target="_blank"
							class="px-3"
							href="https://github.com/NessJade96/Server-Side-APIs-Weather-Dashboard"
							rel="noreferrer"
						>
Github
</a>
</div>
</div>
</article>
</div>
);
}

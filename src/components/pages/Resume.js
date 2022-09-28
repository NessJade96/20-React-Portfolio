import React from 'react';

export default function Resume() {
	return (
		<main class="ml-auto mr-auto 2xl:max-w-7xl ">
			<h2 class="py-5 text-2xl text-center xl:text-3xl">Resume</h2>
			<div class="px-5 py-2 md:px-10 md:py-5 lx:py-10 xl:px-20">
				<p class="mx-5">
					Download my
					<a
						class="px-2 my-1 hover:bg-amber-600 rounded hover:text-orange-50"
						href="../assets/resume.pdf"
						download="Vanessa_Bloom_Resume"
					>
						resume
					</a>
				</p>
				<article class="flex flex-col justify-center md:flex-row">
					<ul class="py-3 md:px-12 md:py-20">
						<h3 class="px-5 text-2xl xl:text-3xl">Frontend</h3>
						<li>- HTML</li>
						<li>- CSS</li>
						<li>- JavaScript</li>
						<li>- Bootstrap</li>
						<li>- Tailwind</li>
						<li>- JQuery</li>
						<li>- Responsive Design</li>
					</ul>
					<ul class="py-3 md:px-12 md:py-20 ">
						<h3 class="px-5 text-2xl xl:text-3xl">Backend</h3>
						<li>- APIs</li>
						<li>- Node</li>
						<li>- Express</li>
						<li>- MySQL, Sequelize</li>
						<li>- MongoDB, Mongoose</li>
						<li>- REST</li>
						<li>- GraphQL</li>
					</ul>
				</article>
			</div>
		</main>
	);
}

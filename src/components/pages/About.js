import React from 'react';

export default function About() {
	return (
		<main class="p-5 m-12 ml-auto mr-auto 2xl:max-w-7xl md:p-10 xl:p-20">
			<div class="flex flex-col place-items-center ">
				<h2 class="py-5 text-2xl text-center xl:text-3xl">About Me</h2>
				<div class="w-16 h-16 rounded-full bg-amber-500 md:w-24 md:h-24">
					<img
						class="inline-flex justify-center object-fill w-auto h-12 m-2 rounded-full md:max-w-none md:w-20 md:h-20"
						src="../../assets/profilepic.jpg"
						alt="Vanessa smiling"
					/>
				</div>
			</div>
			<p>
				Hi! I am a full stack web developer with strong organization and
				communication skills from a background in administration and retail
				management. With strong communication prowess I quickly assess
				situations and collaborate with peers to find the best practice
				solutions. As a fast paced learner I am excited to bring my skills to an
				enriching, progressive team environment to improve quality web
				applications. <br />
				<br />
				Let's get in touch! <br />
				<a href="mailto: ness.jade@outlook.com">
					<i class="fa fa-envelope" aria-hidden="true"></i> Send Email
				</a>
			</p>
		</main>
	);
}

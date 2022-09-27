import React from 'react';
import Navigation from './Navigation';

export default function Header() {
	return (
		<nav class="flex flex-col w-full py-10 text-lg font-bold bg-orange-700 text-amber-500">
			<div class="flex flex-col ml-auto mr-auto md:flex-row place-items-center 2xl:max-w-7xl">
				<div class="w-16 h-16 rounded-full bg-amber-500 md:w-24 md:h-24">
					<img
						class="inline-flex object-fill w-auto h-12 m-2 rounded-full md:max-w-none md:w-20 md:h-20"
						src="../../assets/profilepic.jpg"
						alt="Vanessa smiling"
					/>
				</div>
				<h1 class="py-3 text-3xl md:px-10 xl:pr-60 xl:text-4xl 2xl:pr-80">
					Vanessa Bloom
				</h1>
				<Navigation />
			</div>
		</nav>
	);
}

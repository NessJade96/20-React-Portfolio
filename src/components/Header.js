import React from 'react';
import Navigation from './Navigation';
import profilePic from '../assets/profilepic.jpg';

export default function Header({currentPage, handlePageChange}) {
	return (
		<nav class="flex flex-col w-full py-10 text-lg font-bold bg-orange-700 text-amber-500">
			<div class="flex flex-col ml-auto mr-auto md:flex-row place-items-center 2xl:max-w-7xl">
				<h1 class="py-3 text-3xl md:px-10 xl:pr-60 xl:text-4xl 2xl:pr-80">
					Vanessa Bloom
				</h1>
				<Navigation
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</div>
		</nav>
	);
}

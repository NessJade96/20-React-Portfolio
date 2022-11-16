import React, {useState} from 'react';
import Project from '../Project';

export default function Portfolio() {
	const [filter, setFilter] = useState('all');

	return (
		<main class="my-12 ml-auto mr-auto lg:max-w-7xl">
			<h2 class="mx-10 text-4xl md:text-6xl  ">Portfolio</h2>
			<div class="flex flex-col mx-8 md:flex-row">
				<button
					onClick={() => setFilter('solo')}
					class="my-2 mx-2 border-2 border-amber-600 bg-amber-300 px-3 hover:bg-amber-600 rounded hover:text-orange-50"
				>
					Solo Projects
				</button>
				<button
					onClick={() => setFilter('collaborative')}
					class="my-2 mx-2 border-2 border-amber-600 bg-amber-300 px-3 hover:bg-amber-600 rounded hover:text-orange-50"
				>
					Collaborative
				</button>
				<button
					onClick={() => setFilter('all')}
					class="my-2 mx-2 border-2 border-amber-600 bg-amber-300 px-3 hover:bg-amber-600 rounded hover:text-orange-50"
				>
					All Projects
				</button>
			</div>
			<Project filter={filter} />
		</main>
	);
}

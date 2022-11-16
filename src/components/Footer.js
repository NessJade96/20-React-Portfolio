import React from 'react';

export default function Footer() {
	return (
		<footer class="flex flex-col w-full p-10 text-2xl font-bold text-center bg-orange-700 place-items-center text-amber-500">
			<ul class="md:flex-row md:flex">
				<li class="md:px-4 hover:text-orange-100">
					<a
						target="_blank"
						href="https://github.com/NessJade96"
						rel="noreferrer"
					>
						Github
					</a>
				</li>
				<li class="md:px-4 hover:text-orange-100">
					<a
						href="https://www.linkedin.com/in/vanessa-bloom/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li class="md:px-4 hover:text-orange-100">
					<a
						href="https://linktr.ee/Vanessa.Jade"
						target="_blank"
						rel="noreferrer"
					>
						Linktree
					</a>
				</li>
			</ul>
		</footer>
	);
}

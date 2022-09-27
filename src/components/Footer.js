import React from 'react';

export default function Footer() {
	return (
		<footer class="flex flex-col w-full p-10 text-lg font-bold text-center bg-orange-700 place-items-center text-amber-500">
			<ul class="md:flex-row md:flex">
				<li class="md:px-4">
					<a
						target="_blank"
						href="https://github.com/NessJade96"
						rel="noreferrer"
					>
						<i class="fa fa-github"></i>
					</a>
				</li>
				<li class="md:px-4">
					<a
						href="https://www.linkedin.com/in/vanessa-bloom-8411b0238/"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa fa-linkedin-square"></i>
					</a>
				</li>
				<li class="md:px-4">
					<a
						href="https://linktr.ee/Vanessa.Jade"
						target="_blank"
						rel="noreferrer"
					>
						linktree
					</a>
				</li>
			</ul>
		</footer>
	);
}

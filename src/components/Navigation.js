import React from 'react';

export default function Navigation({currentPage, handlePageChange}) {
	return (
		<ul class="flex flex-col w-full px-4 xl:text-xl place-items-center md:flex-row md:justify-end">
			<li class="px-3">
				<a
					href="#about"
					onClick={() => handlePageChange('About')}
					className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
				>
					About Me
				</a>
			</li>
			<li class="px-3">
				<a
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
					className={
						currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
					}
				>
					Portfolio
				</a>
			</li>
			<li class="px-3">
				<a
					href="#contact"
					onClick={() => handlePageChange('ContactMe')}
					className={
						currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'
					}
				>
					Contact me
				</a>
			</li>
			<li class="px-3">
				<a
					href="#resume"
					onClick={() => handlePageChange('Resume')}
					className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
				>
					Resume
				</a>
			</li>
		</ul>
	);
}

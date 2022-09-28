import React from 'react';

export default function Navigation({currentPage, handlePageChange}) {
	console.log(
		'🚀 ~ file: Navigation.js ~ line 11 ~ Navigation ~ currentPage',
		currentPage,
		currentPage === 'About'
	);
	return (
		<ul class="flex flex-col w-full px-4  place-items-center md:flex-row md:justify-end">
			<li class="px-3 hover:text-orange-100 ">
				<a
					href="#about"
					onClick={() => handlePageChange('About')}
					className={currentPage === 'About' ? 'text-orange-100' : ''}
				>
					About Me
				</a>
			</li>
			<li class="px-3 hover:text-orange-100">
				<a
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
					className={currentPage === 'Portfolio' ? 'text-orange-100' : ''}
				>
					Portfolio
				</a>
			</li>
			<li class="px-3 hover:text-orange-100">
				<a
					href="#contact"
					onClick={() => handlePageChange('ContactMe')}
					className={currentPage === 'ContactMe' ? 'text-orange-100' : ''}
				>
					Contact me
				</a>
			</li>
			<li class="px-3 hover:text-orange-100">
				<a
					href="#resume"
					onClick={() => handlePageChange('Resume')}
					className={currentPage === 'Resume' ? 'text-orange-100' : ''}
				>
					Resume
				</a>
			</li>
		</ul>
	);
}

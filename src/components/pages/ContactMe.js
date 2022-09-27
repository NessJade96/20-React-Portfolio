import React from 'react';

export default function ContactMe() {
	return (
		<main class="ml-auto mr-auto 2xl:max-w-7xl ">
			{/* eslint-disable-next-line jsx-a11y/anchor-has-content*/}
			<h2 class="py-5 text-2xl text-center xl:text-3xl">
				Contact Me{' '}
				<a href="mailto: ness.jade@outlook.com">
					<i class="fa fa-envelope" aria-hidden="true"></i>
				</a>
			</h2>
			<form
				action=""
				class="p-5 mx-5 mt-10 mb-20 border-2 md:m-10 xl:m-20 border-amber-600"
			>
				<p class="p-3 ">
					Name:
					<input required class="block border-2 border-amber-600" type="text" />
				</p>
				<p class="p-3">
					Email address:
					<input
						required
						class="block border-2 border-amber-600"
						type="email"
					/>
				</p>
				<p class="p-3">
					Message:
					<textarea
						required
						class="block max-w-full border-2 border-amber-600 placeholder:text-amber-500"
						placeholder="Write your message here"
						type="textarea"
						rows="4"
						cols="50"
					></textarea>
				</p>
				<input class="p-3 text-lg font-bold" type="submit" value="Submit" />
			</form>
		</main>
	);
}

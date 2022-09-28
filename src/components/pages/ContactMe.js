import {React, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
// imports a helper function that will check if the email is valid
import {validateEmail} from '../../utils/helpers';

export default function ContactMe() {
	// Create state variables for the fields in the form
	// We are also setting their initial values to an empty string
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const {target} = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, name, or message
		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'name') {
			setName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		// First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.

		if (!name) {
			setErrorMessage('Please enter your name');
			// We want to exit out of this code block if something is wrong so that the user can correct it
			return;
		}
		if (!validateEmail(email)) {
			setErrorMessage('Please enter a valid email address');
			return;
		}

		if (!message) {
			setErrorMessage('Please enter a message to Vanessa');
			// We want to exit out of this code block if something is wrong so that the user can correct it
			return;
		}

		// If everything goes according to plan, we want to clear out the input.
		setMessage('');
		setName('');
		setEmail('');
	};

	return (
		<main class="ml-auto mr-auto 2xl:max-w-7xl ">
			<h2 class="py-5 text-2xl text-center xl:text-3xl">
				Contact Me
				<a
					class="hover:bg-orange-100 rounded px-5"
					href="mailto: ness.jade@outlook.com"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</h2>
			<form
				action=""
				class="p-5 mx-5 mt-10 mb-20 border-2 md:m-10 xl:m-20 border-amber-600"
			>
				<p class="p-3 ">
					Name:
					<input
						name="name"
						required
						value={name}
						onChange={handleInputChange}
						class="block border-2 border-amber-600"
						type="text"
					/>
				</p>
				<p class="p-3">
					Email address:
					<input
						required
						name="email"
						value={email}
						onChange={handleInputChange}
						class="block border-2 border-amber-600"
						type="email"
					/>
				</p>
				<p class="p-3">
					Message:
					<textarea
						required
						name="message"
						value={message}
						onChange={handleInputChange}
						class="block max-w-full border-2 border-amber-600 placeholder:text-amber-500"
						placeholder="Write your message here"
						type="textarea"
						rows="4"
						cols="50"
					></textarea>
				</p>
				{errorMessage && (
					<div>
						<p className="px-3 error-text">{errorMessage}</p>
					</div>
				)}
				<input
					class="m-3 py-2 hover:bg-orange-100 px-4 rounded text-lg font-bold border-2 border-amber-600"
					type="submit"
					value="Submit"
					onClick={handleFormSubmit}
				/>
			</form>
		</main>
	);
}

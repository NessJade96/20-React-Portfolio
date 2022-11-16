import {React, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
		<main class="ml-auto mr-auto lg:max-w-5xl items-center">
			<h2 class="py-5 my-10 text-2xl text-center xl:text-3xl">Get in touch!</h2>
			<div class="p-5 mx-5 mt-20 mb-20 border-2  border-amber-600">
				<p class="py-3">
					Thank you for taking the time to browse my portfolio, let's connect!
				</p>
				<ul class="flex-row flex">
					<li>
						{' '}
						<a
							class="hover:text-orange-400 rounded px-2"
							href="mailto: ness.jade@outlook.com"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</li>
					<li class="px-4 hover:text-black">
						<a
							target="_blank"
							href="https://github.com/NessJade96"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li class="px-4 hover:text-blue-800">
						<a
							href="https://www.linkedin.com/in/vanessa-bloom/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
				</ul>
				<p class="py-3">
					Take a look at my
					<a
						class="px-1 text-orange-500 hover:text-amber-500"
						href="./resume.pdf"
						download="Vanessa_Bloom_Resume"
					>
						resume
					</a>
				</p>
			</div>
			<div class="py-20"></div>
		</main>
	);
}

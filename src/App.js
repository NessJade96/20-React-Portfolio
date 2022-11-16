// imports React
import React, {useState} from 'react';

// // imports the components
import Header from './components/Header';
import Footer from './components/Footer';

// imports the pages
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';
import Portfolio from './components/pages/Portfolio';

export default function App() {
	const [currentPage, setCurrentPage] = useState('About');

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'ContactMe') {
			return <ContactMe />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div class="text-orange-700 bg-orange-50 xl:text-2xl">
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer />
		</div>
	);
}

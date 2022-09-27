import './App.css';
// imports React
import React, {useState} from 'react';

// // imports the components
// import Project from '../components/Project';
import Header from './components/Header';
import Footer from './components/Footer';

// imports the pages
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
	// const [currentPage, setCurrentPage] = useState('About');

	return (
		<div>
			<Header />
			<About />
			<Portfolio />
			<ContactMe />
			<Resume />
			<Footer />
		</div>
	);
}

export default App;

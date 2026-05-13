import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
	return (
		<LanguageProvider>
			<div className="App bg-[#0B0B0B] min-h-screen">
				<Header />
				<main>
					<Hero />
					<Pillars />
					<Experiences />
					<Contact />
				</main>
				<Footer />
				<WhatsAppButton />
			</div>
		</LanguageProvider>
	);
}

export default App;

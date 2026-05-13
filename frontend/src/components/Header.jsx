import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
	const { language, t, toggleLanguage } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const fn = () => setIsScrolled(window.scrollY > 40);
		window.addEventListener('scroll', fn);
		return () => window.removeEventListener('scroll', fn);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const go = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	const navItems = ['stays', 'yachts', 'concierge', 'experiences', 'contact'];

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'}`}
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
					<button
						onClick={() => go('hero')}
						className="font-serif text-lg md:text-xl font-light tracking-widest hover:text-[#b8964e] transition-colors z-[102]"
						style={{ color: 'var(--cream)' }}
					>
						Caribe Privé
					</button>

					<nav className="hidden lg:flex items-center gap-9">
						{navItems.map((id) => (
							<button key={id} onClick={() => go(id)} className="nav-link">
								{t(`nav.${id}`)}
							</button>
						))}
					</nav>

					<div className="hidden lg:flex items-center gap-6">
						<div className="lang-toggle">
							<button
								onClick={() => toggleLanguage('en')}
								className={language === 'en' ? 'active' : ''}
							>
								EN
							</button>
							<span
								style={{ color: 'rgba(240,236,228,.2)', fontSize: '0.7rem' }}
							>
								|
							</span>
							<button
								onClick={() => toggleLanguage('es')}
								className={language === 'es' ? 'active' : ''}
							>
								ES
							</button>
						</div>
						<button
							onClick={() => go('contact')}
							className="btn-primary text-xs px-6 py-3"
						>
							{t('hero.cta')}
						</button>
					</div>

					<div className="flex lg:hidden items-center gap-4 z-[102]">
						<div className="lang-toggle">
							<button
								onClick={() => toggleLanguage('en')}
								className={language === 'en' ? 'active' : ''}
							>
								EN
							</button>
							<span
								style={{ color: 'rgba(240,236,228,.2)', fontSize: '0.7rem' }}
							>
								|
							</span>
							<button
								onClick={() => toggleLanguage('es')}
								className={language === 'es' ? 'active' : ''}
							>
								ES
							</button>
						</div>
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							style={{ color: 'var(--cream)', padding: '4px' }}
							aria-label="menu"
						>
							{menuOpen ? (
								<X size={20} strokeWidth={1.2} />
							) : (
								<Menu size={20} strokeWidth={1.2} />
							)}
						</button>
					</div>
				</div>
			</header>

			<div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
				{navItems.map((id) => (
					<button key={id} onClick={() => go(id)}>
						{t(`nav.${id}`)}
					</button>
				))}
				<button
					onClick={() => go('contact')}
					className="btn-primary text-xs mt-4 px-10 py-3"
				>
					{t('hero.cta')}
				</button>
			</div>
		</>
	);
};

export default Header;

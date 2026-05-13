import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
	const { t } = useLanguage();

	const go = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section id="hero" className="hero-section">
			<div
				className="hero-bg"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920')`,
				}}
			/>
			<div className="hero-overlay" />

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-36">
				<div className="max-w-2xl">
					{/* Thin gold line - Corregido: Un solo objeto style */}
					<div
						className="animate-fadeInUp"
						style={{
							width: '36px',
							height: '1px',
							background: 'var(--gold)',
							marginBottom: '1.75rem',
							animationDelay: '.1s',
							animationFillMode: 'forwards',
						}}
					/>

					<p
						className="animate-fadeInUp font-sans text-xs tracking-[.28em] uppercase mb-5"
						style={{
							color: 'var(--gold)',
							animationDelay: '.2s',
							animationFillMode: 'forwards',
						}}
					>
						{t('hero.subtitle')}
					</p>

					<h1
						className="animate-fadeInUp font-serif font-light tracking-tight leading-[1.05] mb-8"
						style={{
							fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
							color: 'var(--cream)',
							animationDelay: '.35s',
							animationFillMode: 'forwards',
						}}
					>
						{t('hero.title')}
						<br />
						<em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
							{t('hero.titleHighlight')}
						</em>
					</h1>

					<p
						className="animate-fadeInUp font-sans font-light tracking-wide mb-10"
						style={{
							fontSize: 'clamp(.85rem, 1.4vw, 1.05rem)',
							color: 'var(--cream-dim)',
							maxWidth: '32rem',
							lineHeight: 1.8,
							animationDelay: '.5s',
							animationFillMode: 'forwards',
						}}
					>
						{t('hero.description')}
					</p>

					<button
						onClick={() => go('contact')}
						className="animate-fadeInUp btn-primary"
						style={{
							animationDelay: '.65s',
							animationFillMode: 'forwards',
						}}
					>
						{t('hero.cta')}
					</button>
				</div>
			</div>

			<button
				onClick={() => go('stays')}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce cursor-pointer"
				style={{ color: 'rgba(240,236,228,.35)' }}
				aria-label="Scroll down"
			>
				<ChevronDown size={26} strokeWidth={1} />
			</button>
		</section>
	);
};

export default Hero;

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ExperienceModal from './ExperienceModal';

const data = [
	{
		key: 'catamaran',
		sub: { en: 'Sailing', es: 'Navegación' },
		img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200',
	},
	// Busca esta sección en tu código y reemplaza la URL de 'stays'
	{
		key: 'stays',
		sub: { en: 'Private Villas', es: 'Villas Privadas' },
		// Nueva URL funcional:
		img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
	},
	{
		key: 'scuba',
		sub: { en: 'Underwater', es: 'Submarinismo' },
		img: 'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg?auto=compress&cs=tinysrgb&w=800',
	},
	{
		key: 'waterSports',
		sub: { en: 'Adrenaline', es: 'Adrenalina' },
		img: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
	},
	{
		key: 'tennis',
		sub: { en: 'Sport', es: 'Deporte' },
		img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
	},
	{
		key: 'paddle',
		sub: { en: 'Ocean', es: 'Océano' },
		img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
	},
];

const labels = {
	en: {
		catamaran: 'Catamaran',
		stays: 'Ocean Villas',
		scuba: 'Scuba Diving',
		waterSports: 'Water Sports',
		tennis: 'Tennis',
		paddle: 'Paddle Surf',
	},
	es: {
		catamaran: 'Catamarán',
		stays: 'Villas en el Mar',
		scuba: 'Buceo',
		waterSports: 'Deportes Acuáticos',
		tennis: 'Tenis',
		paddle: 'Paddle Surf',
	},
};

const Experiences = () => {
	const { t, language } = useLanguage();
	const sectionRef = useRef(null);
	const [active, setActive] = useState(null);
	const lang = labels[language] || labels.en;

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('active');
				}),
			{ threshold: 0.08 },
		);
		sectionRef.current
			?.querySelectorAll('.reveal')
			.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	const handleReserve = () => {
		setActive(null);
		setTimeout(
			() =>
				document
					.getElementById('contact')
					?.scrollIntoView({ behavior: 'smooth' }),
			100,
		);
	};

	return (
		<>
			<section
				id="experiences"
				ref={sectionRef}
				style={{
					background: 'var(--bg)',
					paddingTop: '6rem',
					paddingBottom: '6rem',
				}}
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
					{/* Header */}
					<div className="mb-14 md:mb-16">
						<div
							className="reveal"
							style={{
								width: '28px',
								height: '1px',
								background: 'var(--gold)',
								marginBottom: '1.5rem',
							}}
						/>
						<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
							<div>
								<p
									className="reveal font-sans text-xs tracking-[.25em] uppercase mb-4"
									style={{ color: 'var(--gold)' }}
								>
									{t('experiences.overline')}
								</p>
								<h2
									className="reveal font-serif font-light tracking-tight"
									style={{
										color: 'var(--cream)',
										fontSize: 'clamp(2.2rem,4.5vw,4rem)',
										lineHeight: 1.05,
									}}
								>
									{t('experiences.title')}
								</h2>
							</div>
							<p
								className="reveal font-sans font-light tracking-wide md:max-w-xs md:text-right"
								style={{
									color: 'var(--muted)',
									fontSize: '.85rem',
									lineHeight: 1.8,
								}}
							>
								{t('experiences.description')}
							</p>
						</div>
					</div>

					{/* Grid Corregido con Tailwind */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
						{data.map((exp) => (
							<div
								key={exp.key}
								className="relative overflow-hidden rounded-xl shadow-lg group aspect-[4/3] cursor-pointer bg-gray-900"
								onClick={() => setActive(exp.key)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => e.key === 'Enter' && setActive(exp.key)}
							>
								{/* Imagen ajustada */}
								<img
									src={exp.img}
									alt={lang[exp.key]}
									loading="lazy"
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
								/>

								{/* Overlay oscuro para legibilidad del texto */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

								{/* Textos posicionados en la parte inferior */}
								<div className="absolute bottom-0 left-0 p-6 z-10 flex flex-col">
									<h3
										className="text-2xl font-serif text-white mb-1"
										style={{ color: 'var(--cream)' }}
									>
										{lang[exp.key]}
									</h3>
									<span
										className="text-xs tracking-widest uppercase font-sans"
										style={{ color: 'var(--gold)' }}
									>
										{exp.sub[language] || exp.sub.en}
									</span>
								</div>

								{/* Ícono de "Explorar" en la esquina superior */}
								<div className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(184,150,78,0.5)] bg-black/20 opacity-70 transition-opacity group-hover:opacity-100">
									<svg width="12" height="12" viewBox="0 0 10 10" fill="none">
										<path
											d="M2 5h6M5 2l3 3-3 3"
											stroke="#b8964e"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						))}
					</div>

					{/* CTA */}
					<div className="mt-16 flex justify-center">
						<button
							onClick={() =>
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className="reveal btn-secondary"
						>
							{language === 'es'
								? 'Reserva tu experiencia'
								: 'Reserve your experience'}
							<span
								style={{
									fontSize: '1rem',
									color: 'var(--gold)',
									marginLeft: '0.5rem',
								}}
							>
								→
							</span>
						</button>
					</div>
				</div>
			</section>

			{/* Modal */}
			{active && (
				<ExperienceModal
					expKey={active}
					language={language}
					onClose={() => setActive(null)}
					onReserve={handleReserve}
				/>
			)}
		</>
	);
};

export default Experiences;

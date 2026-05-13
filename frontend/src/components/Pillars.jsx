import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Pillar = ({ id, overline, title, description, cta, image, side }) => {
	const ref = useRef(null);

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('active');
				}),
			{ threshold: 0.15 },
		);
		ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	const go = () =>
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

	return (
		<section
			id={id}
			ref={ref}
			className={`relative min-h-[60vh] md:min-h-[80vh] flex flex-col ${side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center overflow-hidden`}
			style={{ background: 'var(--bg)' }}
		>
			{/* Contenedor de Imagen: Ahora es parte del flujo, no se superpone */}
			<div className="relative w-full md:w-1/2 h-[400px] md:h-screen">
				<img
					src={image}
					alt={title}
					loading="lazy"
					className="w-full h-full object-cover"
				/>
				{/* Degradado para fundir con el fondo */}
				<div
					className="absolute inset-0"
					style={{
						background:
							side === 'left'
								? 'linear-gradient(to right, var(--bg) 0%, transparent 100%)'
								: 'linear-gradient(to left, var(--bg) 0%, transparent 100%)',
					}}
				/>
			</div>

			{/* Contenedor de Contenido */}
			<div className="w-full md:w-1/2 px-8 py-16 md:px-20 lg:px-32 flex flex-col justify-center">
				<div
					className="reveal"
					style={{
						width: '28px',
						height: '1px',
						background: 'var(--gold)',
						marginBottom: '1.5rem',
					}}
				/>
				<p
					className="reveal font-sans text-xs tracking-[.22em] uppercase mb-4"
					style={{ color: 'var(--gold)' }}
				>
					{overline}
				</p>
				<h2
					className="reveal font-serif font-light tracking-tight mb-5"
					style={{
						color: 'var(--cream)',
						fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
						lineHeight: 1.1,
					}}
				>
					{title}
				</h2>
				<p
					className="reveal font-sans font-light tracking-wide mb-9"
					style={{
						color: 'var(--muted)',
						fontSize: '1rem',
						lineHeight: 1.8,
						maxWidth: '28rem',
					}}
				>
					{description}
				</p>
				<div>
					<button
						onClick={go}
						className="reveal btn-secondary flex items-center gap-3"
					>
						{cta} <ArrowRight size={15} strokeWidth={1.5} />
					</button>
				</div>
			</div>
		</section>
	);
};

const Pillars = () => {
	const { t } = useLanguage();
	const conciergeRef = useRef(null);

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('active');
				}),
			{ threshold: 0.12 },
		);
		conciergeRef.current
			?.querySelectorAll('.reveal')
			.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	return (
		<div className="w-full">
			<Pillar
				id="stays"
				overline={t('stays.overline')}
				title={t('stays.title')}
				description={t('stays.description')}
				cta={t('stays.cta')}
				image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
				side="left"
			/>

			<Pillar
				id="yachts"
				overline={t('yachts.overline')}
				title={t('yachts.title')}
				description={t('yachts.description')}
				cta={t('yachts.cta')}
				image="https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
				side="right"
			/>

			{/* Concierge — Corregido para evitar superposición */}
			<div
				id="concierge"
				className="relative overflow-hidden w-full border-t border-white/5"
				style={{ background: 'var(--bg)' }}
			>
				<div
					ref={conciergeRef}
					className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
						<div className="order-2 md:order-1">
							<div
								className="reveal"
								style={{
									width: '28px',
									height: '1px',
									background: 'var(--gold)',
									marginBottom: '1.5rem',
								}}
							/>
							<p
								className="reveal font-sans text-xs tracking-[.22em] uppercase mb-4"
								style={{ color: 'var(--gold)' }}
							>
								{t('concierge.overline')}
							</p>
							<h2
								className="reveal font-serif font-light tracking-tight mb-5"
								style={{
									color: 'var(--cream)',
									fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
									lineHeight: 1.1,
								}}
							>
								{t('concierge.title')}
							</h2>
							<p
								className="reveal font-sans font-light tracking-wide mb-9"
								style={{
									color: 'var(--muted)',
									fontSize: '1rem',
									lineHeight: 1.85,
								}}
							>
								{t('concierge.description')}
							</p>
							<button
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className="reveal btn-secondary flex items-center gap-3"
							>
								{t('concierge.cta')} <ArrowRight size={15} strokeWidth={1.5} />
							</button>
						</div>

						<div className="order-1 md:order-2 reveal relative">
							<div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900"
									alt="Concierge dining"
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
								/>
							</div>
							{/* Borde dorado decorativo */}
							<div
								className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-0"
								style={{ borderColor: 'var(--gold-dim)', opacity: 0.5 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pillars;

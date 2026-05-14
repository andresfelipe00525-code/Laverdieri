import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

/* ── contenido bilingüe de cada experiencia ── */
const content = {
	catamaran: {
		en: {
			title: 'Catamaran',
			sub: 'Private Sailing',
			desc: 'Glide across the turquoise waters of the Colombian Caribbean aboard an exclusive catamaran. From intimate sunset cruises to full-day island escapes, every journey is designed around your desires — champagne, snorkeling stops, and total privacy included.',
			details: [
				'Private charter',
				'Up to 12 guests',
				'Sunrise & sunset cruises',
				'Island hopping available',
			],
		},
		es: {
			title: 'Catamarán',
			sub: 'Navegación Privada',
			desc: 'Navega las turquesas aguas del Caribe colombiano a bordo de un catamarán exclusivo. Desde íntimos cruceros al atardecer hasta escapadas de día completo por las islas, cada travesía se diseña alrededor de tus deseos — champagne, paradas de snorkel y privacidad total incluidos.',
			details: [
				'Chárter privado',
				'Hasta 12 personas',
				'Cruceros al amanecer y atardecer',
				'Recorrido por islas disponible',
			],
		},
		image:
			'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
	stays: {
		en: {
			title: 'Ocean Villas',
			sub: 'Private Residences',
			desc: 'Handpicked ocean-front villas where luxury meets the Caribbean breeze. Hotel-grade amenities, impeccable check-in, and a dedicated concierge team ensure every detail of your stay is flawless.',
			details: [
				'Beachfront locations',
				'Private pool & staff',
				'Concierge on call 24h',
				'Curated welcome packages',
			],
		},
		es: {
			title: 'Villas en el Mar',
			sub: 'Residencias Privadas',
			desc: 'Villas frente al mar seleccionadas a mano donde el lujo se encuentra con la brisa caribeña. Amenidades de hotel cinco estrellas, check-in impecable y un equipo de concierge dedicado garantizan que cada detalle de tu estancia sea perfecto.',
			details: [
				'Frente al mar',
				'Piscina privada y personal',
				'Concierge disponible 24h',
				'Paquetes de bienvenida curados',
			],
		},
		image:
			'https://images.unsplash.com/photo-1540541338537-f5847a1e0fa6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
	scuba: {
		en: {
			title: 'Scuba Diving',
			sub: 'Underwater Exploration',
			desc: 'Discover a world beneath the surface — vibrant coral reefs, exotic marine life, and crystal-clear visibility make the Colombian Caribbean one of the top diving destinations in the world. Expert guides accompany you at every depth.',
			details: [
				'Certified PADI guides',
				'All skill levels welcome',
				'Equipment provided',
				'Private dive boat',
			],
		},
		es: {
			title: 'Buceo',
			sub: 'Exploración Submarina',
			desc: 'Descubre un mundo bajo la superficie — vibrantes arrecifes de coral, vida marina exótica y una visibilidad cristalina hacen del Caribe colombiano uno de los mejores destinos de buceo del mundo. Guías expertos te acompañan a cada profundidad.',
			details: [
				'Guías certificados PADI',
				'Todos los niveles',
				'Equipo incluido',
				'Lancha privada de buceo',
			],
		},
		image:
			'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg?auto=compress&cs=tinysrgb&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
	waterSports: {
		en: {
			title: 'Water Sports',
			sub: 'Adrenaline on the Water',
			desc: "Jet skis, wakeboarding, parasailing — the Caribbean is your playground. Our curated water sports packages combine the best of speed, freedom, and the stunning backdrop of Cartagena's coastline.",
			details: [
				'Jet ski rentals',
				'Wakeboard & kitesurf',
				'Parasailing available',
				'Safety certified instructors',
			],
		},
		es: {
			title: 'Deportes Acuáticos',
			sub: 'Adrenalina en el Agua',
			desc: 'Motos de agua, wakeboard, parasailing — el Caribe es tu patio de juegos. Nuestros paquetes de deportes acuáticos combinan lo mejor de la velocidad, la libertad y el impresionante telón de fondo de la costa de Cartagena.',
			details: [
				'Alquiler de motos de agua',
				'Wakeboard y kitesurf',
				'Parasailing disponible',
				'Instructores certificados',
			],
		},
		image:
			'https://images.unsplash.com/photo-1530053969600-caed2596d242?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
	tennis: {
		en: {
			title: 'Tennis',
			sub: 'Court & Club',
			desc: "World-class tennis courts with private coaching sessions, tournament-level equipment, and access to exclusive beach clubs. Whether you're a seasoned player or a beginner, a perfect match awaits.",
			details: [
				'Private coaching available',
				'Tournament-grade courts',
				'Racket & equipment rental',
				'Beach club access',
			],
		},
		es: {
			title: 'Tenis',
			sub: 'Cancha & Club',
			desc: 'Canchas de tenis de clase mundial con sesiones de coaching privado, equipamiento de nivel de torneo y acceso a clubes de playa exclusivos. Ya seas un jugador experimentado o principiante, el partido perfecto te espera.',
			details: [
				'Coaching privado disponible',
				'Canchas de nivel torneo',
				'Alquiler de raquetas y equipos',
				'Acceso a club de playa',
			],
		},
		image:
			'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
	paddle: {
		en: {
			title: 'Paddle Surf',
			sub: 'Stand Up Paddleboarding',
			desc: 'Stand above the Caribbean waters and feel the calm. Sunrise SUP sessions through mangroves, guided coastal tours, and sunset paddles in the open sea — the most serene way to connect with the ocean.',
			details: [
				'Sunrise & sunset sessions',
				'Mangrove tours available',
				'All skill levels',
				'Board & equipment included',
			],
		},
		es: {
			title: 'Paddle Surf',
			sub: 'Stand Up Paddleboarding',
			desc: 'Párate sobre las aguas del Caribe y siente la calma. Sesiones de SUP al amanecer por los manglares, recorridos guiados por la costa y paseos al atardecer en mar abierto — la forma más serena de conectar con el océano.',
			details: [
				'Sesiones al amanecer y atardecer',
				'Recorridos por manglares',
				'Todos los niveles',
				'Tabla y equipo incluido',
			],
		},
		image:
			'https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400',
		cta: { en: 'Reserve this experience', es: 'Reservar esta experiencia' },
	},
};

const ExperienceModal = ({ expKey, language, onClose, onReserve }) => {
	const overlayRef = useRef(null);
	const lang = language === 'es' ? 'es' : 'en';
	const exp = content[expKey];
	if (!exp) return null;

	const { title, sub, desc, details } = exp[lang];

	/* close on overlay click */
	const handleOverlay = (e) => {
		if (e.target === overlayRef.current) onClose();
	};

	/* close on Escape */
	useEffect(() => {
		const fn = (e) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', fn);
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', fn);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	return (
		<div
			ref={overlayRef}
			onClick={handleOverlay}
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 200,
				background: 'rgba(6,6,6,0.88)',
				backdropFilter: 'blur(6px)',
				WebkitBackdropFilter: 'blur(6px)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '1rem',
				animation: 'fadeIn .35s ease forwards',
			}}
		>
			<div
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '900px',
					maxHeight: '92vh',
					background: '#0e0e0e',
					border: '1px solid rgba(184,150,78,.18)',
					overflow: 'hidden',
					display: 'flex',
					flexDirection: 'column',
					animation: 'slideUp .4s cubic-bezier(.16,1,.3,1) forwards',
				}}
			>
				{/* Image top */}
				<div
					style={{
						position: 'relative',
						height: 'clamp(200px, 38vh, 340px)',
						flexShrink: 0,
					}}
				>
					<img
						src={exp.image}
						alt={title}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							display: 'block',
							filter: 'brightness(.75)',
						}}
					/>
					{/* gradient over image */}
					<div
						style={{
							position: 'absolute',
							inset: 0,
							background:
								'linear-gradient(to bottom, transparent 40%, rgba(14,14,14,.95) 100%)',
						}}
					/>
					{/* title over image */}
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							padding: '2rem 2.5rem',
						}}
					>
						<p
							style={{
								fontFamily: "'Jost', sans-serif",
								fontSize: '.6rem',
								letterSpacing: '.25em',
								textTransform: 'uppercase',
								color: 'var(--gold)',
								marginBottom: '6px',
							}}
						>
							{sub}
						</p>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond', serif",
								fontWeight: 300,
								fontSize: 'clamp(1.8rem, 4vw, 3rem)',
								color: 'var(--cream)',
								lineHeight: 1,
							}}
						>
							{title}
						</h2>
					</div>
					{/* close btn */}
					<button
						onClick={onClose}
						style={{
							position: 'absolute',
							top: '1.25rem',
							right: '1.25rem',
							background: 'rgba(10,10,10,.65)',
							border: '1px solid rgba(184,150,78,.25)',
							width: '38px',
							height: '38px',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							color: 'var(--cream)',
							transition: 'background .25s',
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.background = 'var(--gold)')
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.background = 'rgba(10,10,10,.65)')
						}
						aria-label="Close"
					>
						<X size={15} strokeWidth={1.5} />
					</button>
				</div>

				{/* Body — scrollable */}
				<div
					style={{ overflowY: 'auto', padding: '2rem 2.5rem 2.5rem', flex: 1 }}
				>
					{/* gold divider line */}
					<div
						style={{
							width: '32px',
							height: '1px',
							background: 'var(--gold)',
							marginBottom: '1.5rem',
						}}
					/>

					<p
						style={{
							fontFamily: "'Jost', sans-serif",
							fontWeight: 300,
							fontSize: '.92rem',
							color: 'rgba(240,236,228,.7)',
							lineHeight: 1.88,
							marginBottom: '2rem',
						}}
					>
						{desc}
					</p>

					{/* details list */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
							gap: '.75rem',
							marginBottom: '2.5rem',
						}}
					>
						{details.map((d, i) => (
							<div
								key={i}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '.75rem',
									padding: '.7rem 1rem',
									border: '1px solid rgba(184,150,78,.12)',
									background: 'rgba(184,150,78,.04)',
								}}
							>
								{/* gold dot */}
								<div
									style={{
										width: '5px',
										height: '5px',
										borderRadius: '50%',
										background: 'var(--gold)',
										flexShrink: 0,
									}}
								/>
								<span
									style={{
										fontFamily: "'Jost', sans-serif",
										fontWeight: 300,
										fontSize: '.75rem',
										letterSpacing: '.06em',
										color: 'rgba(240,236,228,.65)',
									}}
								>
									{d}
								</span>
							</div>
						))}
					</div>

					{/* CTA */}
					<button
						onClick={onReserve}
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '.75rem',
							background: 'var(--gold)',
							color: '#0a0a0a',
							border: 'none',
							cursor: 'pointer',
							fontFamily: "'Jost', sans-serif",
							fontWeight: 300,
							fontSize: '.65rem',
							textTransform: 'uppercase',
							letterSpacing: '.22em',
							padding: '.9rem 2.25rem',
							transition: 'background .3s, letter-spacing .3s',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = '#f0ece4';
							e.currentTarget.style.letterSpacing = '.28em';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'var(--gold)';
							e.currentTarget.style.letterSpacing = '.22em';
						}}
					>
						{exp.cta[lang]}
						<ArrowRight size={13} strokeWidth={1.2} />
					</button>
				</div>
			</div>

			<style>{`
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
		</div>
	);
};

export default ExperienceModal;
export { content };

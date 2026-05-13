import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';

const IconLoc = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
		<circle cx="12" cy="9" r="2.5" />
	</svg>
);

const IconMail = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
		<rect x="3" y="6" width="18" height="14" rx="2" />
	</svg>
);

const IconPhone = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
	</svg>
);

const contacts = [
	{ Icon: IconLoc, main: 'Cartagena & San Andrés', sub: 'Colombia' },
	{ Icon: IconMail, main: 'info@caribeprive.com', sub: 'Email us anytime' },
	{ Icon: IconPhone, main: '+57 300 000 0000', sub: 'Mon – Sun, 8am – 10pm' },
];

const Contact = () => {
	const { t } = useLanguage();
	const ref = useRef(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [submitted, setSubmit] = useState(false);

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('active');
				}),
			{ threshold: 0.1 },
		);
		ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		setTimeout(() => {
			setSubmit(false);
			setForm({ name: '', email: '', phone: '', message: '' });
		}, 3000);
	};

	return (
		<section id="contact" ref={ref} className="contact-section py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<div className="grid md:grid-cols-2 gap-14 md:gap-20 lg:gap-28">
					{/* Left */}
					<div>
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
							className="reveal font-sans text-xs tracking-[.25em] uppercase mb-4"
							style={{ color: 'var(--gold)' }}
						>
							{t('contact.overline')}
						</p>
						<h2
							className="reveal font-serif font-light tracking-tight mb-5"
							style={{
								color: 'var(--cream)',
								fontSize: 'clamp(2rem,3.5vw,3.2rem)',
								lineHeight: 1.1,
							}}
						>
							{t('contact.title')}
						</h2>
						<p
							className="reveal font-sans font-light tracking-wide mb-12"
							style={{
								color: 'var(--muted)',
								fontSize: '.88rem',
								lineHeight: 1.85,
							}}
						>
							{t('contact.description')}
						</p>

						<div className="reveal">
							{contacts.map(({ Icon, main, sub }, i) => (
								<div key={i}>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '1.25rem',
											padding: '1.1rem 0',
										}}
									>
										<div
											style={{
												flexShrink: 0,
												width: '44px',
												height: '44px',
												position: 'relative',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: 'var(--gold)',
											}}
										>
											<div
												style={{
													position: 'absolute',
													inset: 0,
													border: '1px solid var(--gold-dim)',
													transform: 'rotate(45deg)',
												}}
											/>
											<Icon />
										</div>
										<div>
											<p
												style={{
													color: 'var(--cream)',
													fontWeight: 300,
													fontSize: '.9rem',
													letterSpacing: '.02em',
												}}
											>
												{main}
											</p>
											<p
												style={{
													color: 'var(--gold)',
													fontSize: '.6rem',
													letterSpacing: '.2em',
													textTransform: 'uppercase',
													marginTop: '3px',
													opacity: 0.65,
												}}
											>
												{sub}
											</p>
										</div>
									</div>
									{i < contacts.length - 1 && (
										<div
											style={{
												height: '1px',
												background:
													'linear-gradient(to right, rgba(184,150,78,.15), transparent)',
											}}
										/>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Right — form */}
					<div className="reveal">
						<form
							onSubmit={onSubmit}
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '1.75rem',
							}}
						>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={onChange}
								placeholder={t('contact.form.name')}
								className="form-input"
								required
							/>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={onChange}
								placeholder={t('contact.form.email')}
								className="form-input"
								required
							/>
							<input
								type="tel"
								name="phone"
								value={form.phone}
								onChange={onChange}
								placeholder={t('contact.form.phone')}
								className="form-input"
							/>
							<textarea
								name="message"
								value={form.message}
								onChange={onChange}
								placeholder={t('contact.form.message')}
								rows={4}
								className="form-input"
								style={{ resize: 'none' }}
								required
							/>

							{submitted ? (
								<div
									style={{
										color: 'var(--gold)',
										textAlign: 'center',
										padding: '1rem',
										border: '1px solid var(--gold-dim)',
										fontSize: '.8rem',
										letterSpacing: '.1em',
									}}
								>
									{t('contact.form.success')}
								</div>
							) : (
								<button
									type="submit"
									className="btn-primary w-full flex items-center justify-center gap-3"
								>
									{t('contact.form.submit')}
									<Send size={13} strokeWidth={1.2} />
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

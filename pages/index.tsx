import { useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<Head>
				<title>Nicolas Guérin | Full-Stack dev.</title>
				<meta
					name='description'
					content='Personal site to showcase my work and experiences'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='h-full text-primary'>
				<Navbar
					homeRef={homeRef}
					aboutRef={aboutRef}
					projectsRef={projectsRef}
					skillsRef={skillsRef}
					contactRef={contactRef}
				/>
				<Hero homeRef={homeRef} />
				<About aboutRef={aboutRef} />
				<Projects projectsRef={projectsRef} />
				<Skills skillsRef={skillsRef} />
				<Contact contactRef={contactRef} />
				<Footer />
			</main>
		</>
	);
}

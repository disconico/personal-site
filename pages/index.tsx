import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
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
				<Navbar />
				<Hero />
				<Projects />
			</main>
		</>
	);
}

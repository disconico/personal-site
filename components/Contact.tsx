import Link from 'next/link';
import ContactForm from './ContactForm';
import React from 'react';

type Props = {
	contactRef: React.MutableRefObject<HTMLElement | null>;
};

const Contact = ({ contactRef }: Props) => {
	return (
		<section className='pb-10 px-4 sm:px-8 md:px-12' ref={contactRef}>
			<div className='container mx-auto  max-w-screen-xl p-2 sm:px-6 font-WorkSans tracking-tight '>
				<h1 className='font-semibold text-3xl md:text-4xl mb-6'>Contact</h1>
				<p className=''>
					If you&apos;d like to reach me, please fill out the form below. You
					can also reach me via{' '}
					<Link href='/' className='underline hover:no-underline'>
						LinkedIn
					</Link>{' '}
					or email.
				</p>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;

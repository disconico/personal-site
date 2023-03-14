import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);

	const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
	const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '';
	const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

	console.log(serviceID);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await toast
				.promise(
					emailjs.sendForm(
						serviceID,
						templateID,
						e.target as HTMLFormElement,
						userID,
					),
					{
						pending: 'Sending...',
						success: 'Message sent!',
						error: 'Error sending message.',
					},
					{
						position: 'bottom-right',
						autoClose: 2500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'light',
					},
				)
				.then((res) => {
					console.log('Sending message response : ', res);
					form.current?.reset();
				});
		} catch (error) {
			console.log('Sending message error : ', error);
		}
	};

	return (
		<form
			ref={form}
			onSubmit={handleSubmit}
			className='flex flex-col gap-6 mt-6'
		>
			<label htmlFor='name' className='w-full max-w-sm'>
				Name <span className='text-red-600'>{' *'}</span>{' '}
				<input
					type='text'
					name='name'
					id='name'
					required
					className=' border p-2 rounded w-full text-sm font-light outline-primary-400 mt-2'
				/>
			</label>
			<label htmlFor='email' className='w-full max-w-sm'>
				Email <span className='text-red-600'>{' *'}</span>{' '}
				<input
					type='email'
					name='email'
					id='email'
					required
					className=' border p-2 rounded w-full text-sm font-light outline-primary-400 mt-2'
				/>
			</label>

			<label htmlFor='message' className='w-full max-w-sm'>
				Message <span className='text-red-600'>{' *'}</span>{' '}
				<textarea
					name='message'
					id='message'
					required
					cols={30}
					rows={8}
					className=' border p-2 rounded w-full text-sm font-light outline-primary-400 mt-2'
				/>
			</label>

			<button
				type='submit'
				className='w-40  bg-primary text-white p-2 rounded border-primary border-2 font-light text-sm hover:bg-white hover:text-primary  hover:border-primary hover:shadow-2xl active:bg-primary active:text-white active:shadow-xl'
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;

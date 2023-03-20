import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import code from '../public/images/code.png';
import React from 'react';

type Props = {
	homeRef: React.MutableRefObject<HTMLElement | null>;
};

const Hero = ({ homeRef }: Props) => {
	return (
		<section className='py-20 px-4 sm:px-8 md:px-12' ref={homeRef}>
			<div className='container mx-auto  max-w-screen-xl p-2 sm:px-6'>
				<div className='flex flex-wrap flex-col text-center lg:flex-row lg:text-left justify-center items-center'>
					<div className='w-full lg:w-1/2 lg:pr-12'>
						<h1 className='text-4xl md:text-5xl font-bold mb-6'>
							Hi, I&apos;m Nicolas Guerin 👋
						</h1>
						<div className='text-xl md:text-2xl mb-6 tracking-tight font-WorkSans'>
							I&apos;m a full-stack web developer specialized
							<Typewriter
								options={{
									strings: ['React', 'Node.js', 'Express.js', 'Next.js'],
									autoStart: true,
									loop: true,
									deleteSpeed: 35,
								}}
							/>
						</div>
						<div className='flex gap-6 max-lg:justify-center'>
							<div className='h-10 w-10'>
								<Link
									href='https://github.com/disconico'
									target={'_blank'}
									className='text-gray-700 hover:text-gray-800'
								>
									<svg viewBox='0 0 128 128'>
										<g fill='#1F2937'>
											<path
												fill='currentColor'
												fillRule='evenodd'
												clipRule='evenodd'
												d='M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z'
											></path>
											<path d='M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0'></path>
										</g>
									</svg>
								</Link>
							</div>
							<div className='h-10 w-10'>
								<Link
									href='https://www.linkedin.com/in/nicolas-gu%C3%A9rin-7a2983b6/'
									target={'_blank'}
									className='text-gray-700 hover:text-gray-800'
								>
									<svg viewBox='0 0 128 128'>
										<g fill='#1F2937'>
											<path
												fill='currentColor'
												d='M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z'
											></path>
										</g>
									</svg>
								</Link>
							</div>
							<div className='flex items-end text-lg md:text-xl'>
								<Link
									href='/CV_NICOLAS_GUERIN_2023.pdf'
									target={'_blank'}
									className='border-b-2 border-slate-700 hover:border-b-0 flex gap-2 items-center'
								>
									Resume
									<span className=''>
										<svg
											width='15'
											height='15'
											viewBox='0 0 15 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z'
												fill='currentColor'
												fillRule='evenodd'
												clipRule='evenodd'
											></path>
										</svg>
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
						<div className='shadow-2xl rounded-lg overflow-hidden'>
							<Image
								src={code}
								alt='Code code code'
								width={1200}
								height={1200}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

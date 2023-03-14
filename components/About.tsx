import React from 'react';

type Props = {
	aboutRef: React.MutableRefObject<HTMLElement | null>;
};

const About = ({ aboutRef }: Props) => {
	return (
		<section className='pb-10 px-4 sm:px-8 md:px-12' ref={aboutRef}>
			<div className='container mx-auto  max-w-screen-xl p-2 sm:px-6 font-WorkSans tracking-tight  '>
				<div className='mb-4'>
					<h1 className='font-semibold text-3xl md:text-4xl mb-6'>About</h1>
					<p>
						Hello there! My name is{' '}
						<span className='underline--magical'>Nicolas</span> and I&apos;m a
						29-year-old Frenchman currently living in Paris. I graduated from
						Grenoble Ecole de Management (<span>GEM</span>) and spent a year in
						Taiwan where I also completed an iMBA program specializing in
						<span>entrepreneurship</span>.
					</p>
					<br />
					<p>
						After graduation, I gained valuable experience in finance, working
						for Deloitte for six months and then spending three years at Oderis
						Consulting as a Transaction Services{' '}
						<span className='underline--magical'>Associate</span>. During this
						time, I developed a range of skills in accountability, finance, and
						data modeling, as well as soft skills such as communication,
						teamwork, hard work, and autonomy.
					</p>
					<br />
					<p>
						At the beginning of 2022, I decided to change my career path and
						pursue my passion for{' '}
						<span className='underline--magical'>technology</span>. I started
						learning how to code on my own and followed the Odin Project
						curriculum. I am now actively seeking a job as a{' '}
						<span className='underline--magical'>software developer</span> and
						can&apos;t wait to put my newly acquired skills to use.
					</p>
					<br />
					<p>
						Aside from my interest in technology, I am also passionate about
						sports, Asian culture, and exploring new technologies.{' '}
						<span className='underline--magical'>Thank you</span> for taking the
						time to get to know me!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

import React, { Fragment } from 'react';
import ProjectItem from './ProjectItem';
import disconetwork from '../public/images/disconetwork.png';
import beautyplants from '../public/images/beautyplants.png';
import portfolio from '../public/images/portfolio.png';

const projects = [
	{
		image: disconetwork,
		title: 'DiscoNetwork',
		techs: [
			'Next.js',
			'Next-Auth',
			'React-Query',
			'MongoDB',
			'TypeScript',
			'Cloudinary',
			'Tailwind CSS',
		],
		description: `DiscoNetwork is a high-performance social networking platform developed using Next.js, React-Query, and TypeScript, with an intuitive front-end design using TailwindCSS.
		The project also features secure user authentication with Next-Auth and a flexible NoSQL database with MongoDB. Media file management is handled by the powerful Cloudinary platform, ensuring fast and efficient processing. 
		DiscoNetwork showcases my skills in developing responsive and scalable web applications using modern technologies.`,
		codeLink: '/asda',
		liveLink: '/asda',
		isPublished: true,
	},
	{
		image: portfolio,
		title: 'Portfolio',
		techs: ['React', 'Vite', 'Plain CSS'],
		description: `	Portfolio is a modern React single-page application showcasing my web development expertise. It features a range of projects built during my self-study journey, ranging from simple landing pages to complex web applications.
		Designed with plain CSS, the application is minimalist, fast, and responsive, providing an optimal viewing experience across different devices.
		This portfolio offers recruiters the chance to browse my projects and gain insight into my web development skills, including attention to detail and high-quality work, building user-friendly applications with modern technologies.`,
		codeLink: '/asda',
		liveLink: '/asda',
		isPublished: true,
	},
	{
		image: beautyplants,
		title: 'BeautyPlants',
		techs: ['React', 'React-Router', 'Prop-Types', 'Plain CSS'],
		description: `BeautyPlants is an e-commerce website template developed using modern web development technologies and showcases my skills in building responsive and user-friendly e-commerce websites. The front-end is built using React Hooks, and Context, with PropTypes and Custom Hooks used to simplify the development process. 
		The application also uses React Router to provide a seamless browsing experience for users and Custom Helper Functions to optimize performance. I also implemented a Reducer for async checkout mocking. 
		Overall, BeautyPlants highlights my expertise in developing high-quality e-commerce websites using React and modern web development technologies .`,
		codeLink: '/asda',
		liveLink: '/asda',
		isPublished: true,
	},
];

type Props = {
	projectsRef: React.MutableRefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: Props) => {
	return (
		<section className='pb-10  px-4 sm:px-8 md:px-12' ref={projectsRef}>
			<div className='container mx-auto  max-sm:max-w-full max-w-screen-xl p-2 sm:px-6 font-WorkSans'>
				<h1 className='font-semibold text-3xl md:text-4xl mb-6'>Projects</h1>
				<div className='flex flex-col gap-10'>
					{projects.map((project, index) => (
						<Fragment key={index}>
							<ProjectItem
								image={project.image}
								title={project.title}
								techs={project.techs}
								description={project.description}
								codeLink={project.codeLink}
								liveLink={project.liveLink}
								isPublished={project.isPublished}
							/>
							{index !== projects.length - 1 && (
								<hr className='w-1/2 self-center' />
							)}
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

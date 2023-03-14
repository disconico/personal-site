import React from 'react';

type Props = {
	homeRef: React.MutableRefObject<HTMLElement | null>;
	aboutRef: React.MutableRefObject<HTMLElement | null>;
	projectsRef: React.MutableRefObject<HTMLElement | null>;
	skillsRef: React.MutableRefObject<HTMLElement | null>;
	contactRef: React.MutableRefObject<HTMLElement | null>;
};

const Navbar = ({
	homeRef,
	aboutRef,
	projectsRef,
	skillsRef,
	contactRef,
}: Props) => {
	const handleNavClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
		if (ref.current)
			ref.current.scrollIntoView({
				behavior: 'smooth',
			});
	};

	return (
		<header className='shadow-sm fixed top-0 z-50 bg-white w-full'>
			<nav className='max-w-screen-xl mx-auto flex justify-between max-sm:justify-evenly items-center  p-2 sm:px-6  h-14 font-WorkSans  '>
				<div className='hidden sm:block'>
					<button
						className='text-2xl font-medium  hover:text-black '
						onClick={() => handleNavClick(homeRef)}
					>
						NG.
					</button>
				</div>
				<div className='flex gap-6 font-light max-sm:justify-evenly max-sm:w-full pr-4 '>
					<button
						className='text-lg hover:border-b hover:border-b-slate-700  hover:text-black hover:font-normal w-20'
						onClick={() => handleNavClick(homeRef)}
					>
						Home
					</button>
					<button
						onClick={() => handleNavClick(aboutRef)}
						className='text-lg hover:border-b hover:border-b-slate-700  hover:text-black hover:font-normal w-20'
					>
						About
					</button>
					<button
						className='text-lg hover:border-b hover:border-b-slate-700  hover:text-black hover:font-normal w-20'
						onClick={() => handleNavClick(projectsRef)}
					>
						Projects
					</button>
					<button
						className='text-lg hover:border-b hover:border-b-slate-700  hover:text-black hover:font-normal w-20'
						onClick={() => handleNavClick(skillsRef)}
					>
						Skills
					</button>
					<button
						className='text-lg hover:border-b hover:border-b-slate-700  hover:text-black hover:font-normal w-20'
						onClick={() => handleNavClick(contactRef)}
					>
						Contact
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

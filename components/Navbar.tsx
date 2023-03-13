const Navbar = () => {
	return (
		<header className='shadow-sm sticky top-0 z-50 bg-white '>
			<nav className='max-w-screen-xl mx-auto flex justify-between max-sm:justify-evenly items-center  p-2 sm:px-6  h-14 font-WorkSans  '>
				<div className='hidden sm:block'>
					<a href='#' className='text-2xl font-medium'>
						NG.
					</a>
				</div>
				<div className='flex gap-5 font-light max-sm:justify-evenly max-sm:w-full '>
					<a
						href='#'
						className='text-lg hover:border-b hover:border-b-slate-700'
					>
						Home
					</a>
					<a
						href='#'
						className='text-lg hover:border-b hover:border-b-slate-700'
					>
						About
					</a>
					<a
						href='#'
						className='text-lg hover:border-b hover:border-b-slate-700'
					>
						Projects
					</a>
					<a
						href='#'
						className='text-lg hover:border-b hover:border-b-slate-700'
					>
						Skills
					</a>
					<a
						href='#'
						className='text-lg hover:border-b hover:border-b-slate-700'
					>
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

import Image from 'next/image';
import Link from 'next/link';

type Props = {
	image: string;
	title: string;
	techs: string[];
	description: string;
	codeLink: string;
	liveLink: string;
};

const ProjectItem = ({
	image,
	title,
	techs,
	description,
	codeLink,
	liveLink,
}: Props) => {
	return (
		<div className='max-w-lg mx-auto mb-12'>
			<Image
				src={image}
				alt={title}
				width={800}
				height={800}
				className='rounded-lg shadow-lg mb-4'
			/>

			<div className='bg-white rounded-lg shadow-lg p-4'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-gray-600 mb-4'>{techs.join(', ')}</p>
				<p className='text-gray-700 mb-4'>{description}</p>

				<div className='flex justify-between'>
					<Link href={codeLink}>
						<a className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2'>
							View code
						</a>
					</Link>

					<Link href={liveLink}>
						<a className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg'>
							Visit website
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;

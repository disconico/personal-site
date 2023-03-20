import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
	image: StaticImageData;
	title: string;
	techs: string[];
	description: string;
	codeLink: string;
	liveLink: string;
	isPublished: boolean;
};

const ProjectItem = ({
	image,
	title,
	techs,
	description,
	codeLink,
	liveLink,
	isPublished,
}: Props) => {
	return (
		<div className=' mx-auto  font-WorkSans  tracking-tight flex flex-col lg:flex-row py-4  gap-2 md:gap-4 lg:gap-6'>
			<div className='w-full lg:w-3/5'>
				<Image
					src={image}
					alt={title}
					width={800}
					height={800}
					className='rounded-lg shadow-lg '
				/>
			</div>
			<div className='w-full lg:w-2/5'>
				<h3 className='text-2xl font-semibold mb-2'>{title}</h3>
				<p className='text-gray-500 mb-2 italic'>{techs.join(', ')}</p>
				{description.split('\n').map((paragraph, index) => (
					<p key={index} className='text-gray-700 mb-4'>
						{paragraph}
						<br />
					</p>
				))}

				<div className='flex items-end gap-4'>
					<Link
						href={codeLink}
						className='border-b border-slate-500 hover:border-b-0 '
					>
						View code
					</Link>

					{isPublished && (
						<Link
							href={liveLink}
							className='border-b border-slate-500 hover:border-b-0 '
							target='_blank'
						>
							Visit website
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;

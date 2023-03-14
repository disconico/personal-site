import Skill from '../models/Skill';

type Props = {
	name: Skill['name'];
	icon: Skill['icon'];
};

const SkillCard = ({ name, icon }: Props) => {
	return (
		<div className='flex flex-col items-center gap-1 min-w-[68px] tracking-tight '>
			<div className='h-9 w-9 flex justify-center align-middle'>{icon}</div>
			<div className='items-end'>
				<p className='font-normal text-sm align-bottom '>{name}</p>
			</div>
		</div>
	);
};

export default SkillCard;

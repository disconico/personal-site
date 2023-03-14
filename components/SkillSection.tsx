import SkillCard from './SkillCard';
import Skill from '../models/Skill';

type Props = {
	name: string;
	skills: Skill[];
};

const SkillSection = ({ name, skills }: Props) => {
	return (
		<div className='flex flex-col gap-4 mb-6 '>
			<h2 className='font-light text-base border-b '>{name}</h2>
			<div className='flex flex-wrap gap-4'>
				{skills.map((skill, index) => (
					<SkillCard key={index} name={skill.name} icon={skill.icon} />
				))}
			</div>
		</div>
	);
};

export default SkillSection;

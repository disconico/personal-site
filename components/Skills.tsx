import React from 'react';
import SkillSection from './SkillSection';
import frontEndSkills from '../assets/frontEndSkills';
import backEndSkills from '../assets/backEndSkills';
import toolsSkills from '../assets/toolsSkills';

type Props = {
	skillsRef: React.MutableRefObject<HTMLElement | null>;
};

const Skills = ({ skillsRef }: Props) => {
	return (
		<section className='pb-10 px-4 sm:px-8 md:px-12' ref={skillsRef}>
			<div className='container mx-auto  max-w-screen-xl p-2 sm:px-6 font-WorkSans '>
				<div className='mb-4'>
					<h1 className='font-semibold text-3xl md:text-4xl mb-6'>Skills</h1>
					<p>
						My toolkit primarily includes the following technologies, but is
						always expanding:
					</p>
				</div>
				<div className=''>
					<SkillSection name={'FRONTEND'} skills={frontEndSkills} />
					<SkillSection name={'BACKEND'} skills={backEndSkills} />
					<SkillSection name={'TOOLS'} skills={toolsSkills} />
				</div>
			</div>
		</section>
	);
};

export default Skills;

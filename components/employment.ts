type Props = {
	me: {
		name: string;
		isQualified: boolean;
	};
	yourCompany: {
		name: string;
		isHiring: boolean;
	};
};

const techJob = ({ me, yourCompany }: Props) => {
	if (me.isQualified && yourCompany.isHiring) {
		return `I'm ${me.name} and I want to work for ${yourCompany.name}.`;
	} else {
		return `I will keep on learning and looking for a job at ${yourCompany.name}.`;
	}
};

export default techJob;

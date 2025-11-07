export type Mapper<T, V> = {
	[key in keyof T]: V;
};

export type Map<T> = {
	[key in keyof T]: T[key];
};

export interface tailcss {
	// sm
	sm: string;
	effect_sm?: string;

	// md
	md?: string;
	effect_md?: string;

	// lg
	lg?: string;
	effect_lg?: string;

	// xl
	xl?: string;
	effect_xl?: string;

	// nulled
	nulled?: string;
}

export type projectCardType = {
	title: string;
	info: string;
	website: string;
	github: string;
	imageurl: {
		light: string;
		dark: string;
	};
	techstack: string[];
	apidoc?: string;
	maintenance: boolean
};

export type projectType = projectCardType[];

export type Organizer = {
	name: string;
	role: string;
	affiliation: string;
	bio: string;
	initials: string;
	image: string;
	link?: string;
};

export type ScheduleBlock = {
	time: string;
	duration: string;
	title: string;
	detail: string;
};

export type Prerequisite = {
	title: string;
	detail: string;
};

export type Notebook = {
	title: string;
	url: string;
};

export type Tutorial = {
	/** Route slug, e.g. "storywrangler" (matches src/routes/<slug>). */
	slug: string;
	/** Short label shown in the top toggle, e.g. "StoryWrangler". */
	short: string;
	kicker: string;
	title: string;
	room: string;
	sessionDate: string;
	sessionTime: string;
	conferenceDates: string;
	abstract: string[];
	/** Small badges under the abstract (platforms, tools, topics). */
	tags: string[];
	prerequisitesIntro: string;
	prerequisites: Prerequisite[];
	schedule: ScheduleBlock[];
	/** Colab notebooks for the hands-on portion. */
	notebooks?: Notebook[];
	outcomes: string[];
	signupUrl: string;
	organizers: Organizer[];
};

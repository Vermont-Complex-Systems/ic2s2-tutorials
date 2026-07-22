import type { Tutorial } from './types';

// Times are not fixed yet (no preferred slot), so schedule blocks show
// durations rather than absolute clock times. Room/date are still TBA.
export const dataviz: Tutorial = {
	slug: 'dataviz',
	short: 'Dataviz',
	kicker: 'IC²S² 2026 Tutorial',
	title:
		'Where Creativity Meets Data-Driven Stories: Building Interactive Data Visualizations in Computational Social Science',
	room: 'TBA',
	sessionDate: 'Date TBA',
	sessionTime: 'Half-day session · 3 hours',
	conferenceDates: 'July 28–31, 2026',
	abstract: [
		'Visual data essays and dashboards are useful in drawing attention and communicating important ideas from computational social science to the broader public. Yet what begins as a simple dataviz project often becomes increasingly hard to manage and maintain because of complexities well known by web designers but hidden from adventurous researchers.',
		'This tutorial offers a whirlwind tour of the challenges and lessons learned from building all kinds of interactive data-driven visualizations at the Vermont Complex Systems Institute. We distinguish between visual data essays — using web development techniques such as scrollytelling, animations, and custom layouts to weave data visualizations together with content — and dashboards that let users interact with large datasets through filtering, aggregation, and faceting. Through concrete case studies, we discuss data management, the design of interactive stories, performance, hosting on university premises, the pros and cons of alternatives such as BI tools or interactive notebooks, and other considerations when deploying modern websites.',
		'We address the risk of dashboard (and visual-data-essay) rot head-on, discussing the sociotechnical reasons why all the hard work going into interactive dataviz can be nullified by a lack of engagement from users or disinterested stakeholders. Lastly, we briefly touch on how generative AI is changing the landscape of building interactive dataviz, and how we use it in our own work.'
	],
	tags: ['Scrollytelling', 'Dashboards', 'D3.js', 'Svelte', 'APIs', 'Progressive enhancement'],
	prerequisitesIntro:
		'The target audience is computational social science researchers at any career stage who build, or want to build, interactive visualizations to communicate their science to a broader public. We expect familiarity with HTML and CSS; no prior experience with JavaScript, frameworks (React, Svelte), or APIs is assumed.',
	prerequisites: [
		{
			title: 'Familiarity with HTML & CSS',
			detail: 'We expect basic comfort with HTML and CSS to get the most out of the hands-on portions and case studies.'
		},
		{
			title: 'No JavaScript or API experience needed',
			detail: 'No prior experience with JavaScript, frameworks like React or Svelte, or APIs is assumed — we introduce what you need as we go.'
		}
	],
	schedule: [
		{
			time: '',
			duration: '30 min',
			title: 'Theoretical introduction',
			detail: 'An introduction to interactive data visualizations, including a brief look at the science of perception for dataviz, and how custom interactive visualizations differ from BI tools or interactive notebooks like Quarto (Python/R/Julia) or Streamlit (Python).'
		},
		{
			time: '',
			duration: '60 min',
			title: 'Standalone web apps, with case studies',
			detail: 'A brief introduction to data-driven interactive visualization on static websites, showing scrollytelling techniques and dashboards.'
		},
		{
			time: '',
			duration: '15 min',
			title: 'Break',
			detail: 'Stretch and refill before the next session.'
		},
		{
			time: '',
			duration: '60 min',
			title: 'API-first approach, with case studies',
			detail: 'Recognizing the need for an API-first approach, where the interface fetches data from a database.'
		},
		{
			time: '',
			duration: '30 min',
			title: 'Start simple, add complexity progressively',
			detail: 'The progressive-enhancement philosophy for web apps: maximizing the long-term survival of your apps by providing static fallbacks to your dynamic ones.'
		}
	],
	outcomes: [
		'Recognize what kinds of dataviz projects require what level of web-development expertise.',
		'Distinguish visual data essays (scrollytelling, animation, custom layouts) from interactive dashboards (filtering, aggregation, faceting).',
		'Adopt best practices that combine your domain expertise with well-known web-development complexities.',
		'Understand when an API-first approach is needed to bridge visualizations with databases and scientific work.',
		'Avoid common pitfalls — including dashboard rot and performance problems — when deploying and hosting web apps.',
		'Apply progressive enhancement to maximize the long-term survival of interactive visualizations.'
	],
	signupUrl: 'https://forms.gle/927oS78uXQm6Sxv3A',
	organizers: [
		{
			name: 'Ben Dexter Cooley',
			role: 'Creative Technologist & Data Visualization Engineer',
			affiliation: 'Vermont Complex Systems Institute',
			bio: 'Ben Dexter Cooley is a creative technologist and data visualization engineer at the Vermont Complex Systems Institute. His work explores new ways of seeing and experiencing information through data visualization, interaction design, and creative coding. With a background in journalism, Ben sees visualization as fundamentally an exercise in data storytelling and has crafted numerous interactive stories to explain and expound upon complex topics. Previously, Ben has worked with scientists to visualize data at the Broad Institute, taught data visualization courses at Northeastern University, and created interactive data sites as a consultant for Cornell’s Lab of Ornithology, flood relief platforms, and various online publications. In this tutorial, Ben covers the data-visualization principles.',
			initials: 'BC',
			image: '/ben.jpg',
			link: 'https://benjamincooley.com/'
		},
		{
			name: 'Jonathan St-Onge',
			role: 'Research Software Engineer',
			affiliation: 'Vermont Complex Systems Institute',
			bio: 'Jonathan St-Onge holds a Ph.D. in Complex Systems and Data Science from the Vermont Complex Systems Institute, where he is now a research software engineer. He works with groups across the University of Vermont to create interactive and whimsical data visualizations. By working with stakeholders of varying technical expertise, he has developed a toolbox to communicate the needs and requirements to build interactive visualizations. He also works with database engineers to build and maintain the data pipelines that feed those visualizations. In this tutorial, Jonathan discusses practical issues around performance, dashboard rot, and the API-first approach.',
			initials: 'JS',
			image: '/jso.jpg'
		}
	]
};

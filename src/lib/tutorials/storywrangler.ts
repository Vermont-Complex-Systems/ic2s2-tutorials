import type { Tutorial } from './types';

export const storywrangler: Tutorial = {
	slug: 'storywrangler',
	short: 'StoryWrangler',
	kicker: 'IC²S² 2026 Tutorial',
	title: 'Computational Tools for Measuring Collective Attention in Corpora of Text',
	room: 'Chittenden (413)',
	sessionDate: 'July 28, 2026',
	sessionTime: '9:00 AM – 12:00 PM',
	conferenceDates: 'July 28–31, 2026',
	abstract: [
		'This tutorial introduces the "StoryWrangler" project, a platform for analyzing massive large-scale corpora such as Twitter, Wikipedia, Bluesky, Reddit, and Google Books. Each dataset offers a distinct window into collective discourse: Twitter captures real-time conversation, Wikipedia documents collaborative knowledge construction, Reddit preserves threaded community discussions, and Google Books provides historical context. Despite their differences, these platforms exhibit similar heavy-tailed statistical properties, allowing consistent analytical frameworks while respecting platform-specific dynamics. We cast them into a set of interconnected time series that track the changing usage rates of words, phrases, and topics.',
		'We show how the StoryWrangler platform implements principled measurements such as rank-turbulence divergence to detect and quantify changes in text over time. These instruments help identify when language use shifts dramatically, track the rise and fall of narratives, and compare patterns across timescales and platforms. Drawing on the work of research engineers at the Vermont Complex Systems Institute, we offer a window into a suite of scientific tools for measuring collective attention, working toward a unified StoryWrangler for everything.',
		'The platform offers three levels of technical accessibility: front-end portals for visual exploration without coding, Python packages for custom analyses, and API access for large-scale studies. We discuss the technical challenges that come with ensuring accessibility for researchers across all technical backgrounds.'
	],
	tags: ['Twitter', 'Wikipedia', 'Bluesky', 'Reddit', 'Google Books'],
	prerequisitesIntro:
		'No prior knowledge of computational analysis will be necessary. Some familiarity with Python will be beneficial for following along with notebooks, but anyone should be able to use the web interface if they would like to take a no-code route.',
	prerequisites: [
		{
			title: 'No prior experience required',
			detail: 'No prior knowledge of computational analysis is necessary. The web interface lets anyone take a no-code route through the material.'
		},
		{
			title: 'Python is a bonus, not a requirement',
			detail: 'Some familiarity with Python is beneficial for following along with the notebooks, but it is not needed to take part.'
		},
		{
			title: 'Bring a laptop if you can',
			detail: 'The hands-on portion runs in Google Colab notebooks, so bring a laptop if you can to follow along. Everything is browser-based, with no local setup required.'
		}
	],
	schedule: [
		{
			time: '9:00 – 9:45',
			duration: '45 min',
			title: 'Introduction to the StoryWrangler platform',
			detail: 'We present the web interfaces and Python package by which users can conduct their own analysis of Twitter, Wikipedia, Reddit, and Google Books. We go over a few results from ongoing scientific projects using the StoryWrangler platform when measuring collective attention on a set of interconnected ecological time series.'
		},
		{
			time: '9:45 – 10:05',
			duration: '20 min',
			title: 'Demo: exploring the platform',
			detail: 'A live walkthrough of the web interfaces and Python package. We demo how to explore Twitter, Wikipedia, Reddit, and Google Books, and surface a few results from ongoing projects using the platform.'
		},
		{
			time: '10:05 – 10:20',
			duration: '15 min',
			title: 'Break',
			detail: 'Stretch and refill before the next session.'
		},
		{
			time: '10:20 – 10:55',
			duration: '35 min',
			title: 'Introduction to divergence metrics and other instruments',
			detail: 'We offer a brief explainer of the mathematics behind our rank divergence metric of choice: the rank-turbulence divergence (RTD). RTD is a visualization instrument designed for the comparison of any two ranked lists of heavy-tailed distributions which exhibit type turbulence. Following this introduction to RTD, we introduce a number of tools building on divergence metrics to capture collective attention (Allotaxonometry and Ousiometry) and sentiment shifts (Hedonometer).'
		},
		{
			time: '10:55 – 11:15',
			duration: '20 min',
			title: 'Hands-on: getting started with the Jupyter notebooks',
			detail: 'We provide Jupyter notebooks to access the data and platform, and get you set up in Google Colab so you can start running your own queries.'
		},
		{
			time: '11:15 – 11:25',
			duration: '10 min',
			title: 'Break',
			detail: 'Stretch and refill before the final session.'
		},
		{
			time: '11:25 – 12:00',
			duration: '35 min',
			title: 'Infrastructure considerations and conclusion',
			detail: 'How do we make a unified platform integrating diverse large-scale corpora maintainable, interoperable, and performant? How can people participate and collaborate in the future?'
		}
	],
	notebooks: [
		{
			title: 'Getting started',
			url: 'https://colab.research.google.com/drive/1j6nxG0iMFaGXBoK9iaxc-NQwckcQgz9F?usp=sharing'
		},
		{
			title: 'Multiplatform',
			url: 'https://colab.research.google.com/drive/1I-PPb4kLXbVWApx-jn77pZOU0NVfIweV?usp=sharing'
		},
		{
			title: 'Instruments',
			url: 'https://colab.research.google.com/drive/1cZq56-RbilZgaog39Zx-_qShDL_iML_u?usp=sharing'
		},
		{
			title: 'Data registering',
			url: 'https://colab.research.google.com/drive/1nVZbIvMZj6_cQmNOB0YPWFgDSWmzGJ9G?usp=sharing'
		},
		{
			title: 'MCP and skills',
			url: 'https://colab.research.google.com/drive/1rd4keDwl5AARVxNUIatRYKU0zSWW633X?usp=sharing'
		}
	],
	outcomes: [
		'Apply rank-turbulence divergence and related measurements to detect shifts in collective attention across multiple platforms.',
		'Explore visualizations and access data through the web portals, following a no-code route.',
		'Write custom analyses with the Python packages and access raw data via the APIs.',
		'Work with tools designed for different skill levels, from web portals to code and APIs.',
		'Design and execute your own analyses of temporal text data using core natural language processing instruments.'
	],
	signupUrl: 'https://forms.gle/ukdQxF8JA9UsPg1S7',
	organizers: [
		{
			name: 'Jonathan St-Onge',
			role: 'Research Software Engineer',
			affiliation: 'Vermont Complex Systems Institute',
			bio: 'Jonathan St-Onge holds a Ph.D. in Complex Systems and Data Science from the Vermont Complex Systems Institute, where he is now a research software engineer. He works with groups across the University of Vermont to create interactive and whimsical data visualizations. By working with stakeholders of varying technical expertise, he has developed a toolbox to communicate the needs and requirements to build interactive visualizations. He also works with database engineers to build and maintain the data pipelines that feed those visualizations.',
			initials: 'JS',
			image: '/jso.jpg'
		},
		{
			name: 'Ben Dexter Cooley',
			role: 'Creative Technologist & Data Visualization Engineer',
			affiliation: 'Vermont Complex Systems Institute',
			bio: 'Ben Dexter Cooley is a creative technologist and data visualization engineer at the Vermont Complex Systems Institute. His work explores new ways of seeing and experiencing information through data visualization, interaction design, and creative coding. With a background in journalism, Ben sees visualization as fundamentally an exercise in data storytelling. He has previously visualized data with scientists at the Broad Institute, taught data visualization at Northeastern University, and built interactive data sites for Cornell’s Lab of Ornithology, flood relief platforms, and various online publications.',
			initials: 'BC',
			image: '/ben.jpg',
			link: 'https://benjamincooley.com/'
		},
		{
			name: 'Michael Arnold',
			role: 'Research Computing Data Engineer',
			affiliation: 'Vermont Complex Systems Institute',
			bio: 'Michael Arnold is a Research Computing Data Engineer at the Vermont Complex Systems Institute, where he builds scalable data infrastructure to measure and understand social phenomena. His work focuses on developing data pipelines and computational tools that let researchers access and analyze large-scale text datasets. His research interests include collective attention, natural language processing, and machine learning for social measurement. He manages large-scale database systems and high-performance computing workflows supporting research at the University of Vermont.',
			initials: 'MA',
			image: '/michael-arnold.jpg'
		}
	]
};

import React from "react";

/* eslint-disable @next/next/no-img-element */
const Skills: React.FC = () => {
	const skills = [
		{
			name: "JavaScript",
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
		},
		{
			name: "TypeScript",
			logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
		},
		{
			name: "React",
			logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		},
		{
			name: "CSS3",
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
		},

		{
			name: "Vue.js",
			logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
		},
		{
			name: "Nuxt.js",
			logo: "https://nuxt.com/assets/design-kit/icon-green.svg",
		},
		{
			name: "Angular",
			logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
		},
		{
			name: "HTML5",
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
		},

		{
			name: "Next.js",
			logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
		},
		{
			name: "Redux",
			logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
		},
		{
			name: "Svelte",
			logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
		},
		{
			name: "GraphQL",
			logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
		},
		{
			name: "Tailwind CSS",
			logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
		},
		{
			name: "Docker",
			logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
		},
		{
			name: "WordPress",
			logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
		},
		{ name: "NestJS", logo: "https://nestjs.com/img/logo-small.svg" },
		{
			name: "ExpressJS",
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
		},
		{
			name: "Node.js",
			logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
		},
		{
			name: "Firebase",
			logo: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
		},
		{
			name: "AWS",
			logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
		},
	];
	return (
		<div id="skills" className="relative isolate overflow-hidden bg-white border-y py-12 sm:py-24 ">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-red-50),white)] opacity-20" />
			<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-red-600/10 ring-red-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
			<div className="mx-auto max-w-8xl px-6 lg:px-8 flex flex-col gap-8">
				{/* heading */}
				<div className="text-center">
					<h2 className="text-4xl  text-balance text-gray-900 sm:text-5xl">
						Technical Proficiencies
					</h2>
				</div>

				{/* grid */}
				<section className="py-6">
					<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-lg">
						{skills.map((skill) => (
							<li
								key={skill.name}
								className="text-gray-700 cursor-default flex flex-col items-center justify-center py-4 px-4"
							>
								<img
									src={skill.logo}
									alt={`${skill.name} Logo`}
									className="h-24 mb-2"
								/>
								{/* {skill.name} */}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
};

export default Skills;

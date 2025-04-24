import React from "react";

const Experience: React.FC = () => {
	const timeline = [
		{
			year: "2013 - 2015",
			experience: [
				{
					title: "Bachelor of Computer Engineering",
					company: "University of San Carlos",
				},
				{
					title: "Technical Specialist",
					company: "Alliance Software",
				},
				{
					title: "Web Developer",
					company: "Third Team Media",
				},
			],
		},
		{
			year: "2016 - 2020",
			experience: [
				{
					title: "Web Developer",
					company: "QIMA",
				},
				{
					title: "Senior Web Developer",
					company: "Inspirex",
				},
			],
		},
		{
			year: "2020 - PRESENT",
			experience: [
				{
					title: "Senior Web Developer",
					company: "Startechup",
				},
				{
					title: "Web Developer",
					company: "FREELANCE",
				},
				{
					title: "Diploma in Computer Programming",
					company: "Niagara College Toronto",
				},
			],
		},
	];
	return (
		<div id="experience" className="bg-white py-12 sm:py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<h2 className="text-4xl  text-balance text-gray-900 sm:text-5xl">
							Education & Experience
						</h2>
					</div>
					<dl className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
						{timeline.map((item, index) => (
							<div key={index} className="flex flex-col p-4">
								<h3 className="text-sm  text-gray-500 mb-10">{item.year}</h3>
								<ul className="mt-4 space-y-2">
									{item.experience.map((exp, expIndex) => (
										<li key={expIndex} className="text-sm text-black mb-10">
											<div className="text-2xl mb-1">{exp.title}</div>
											<div className="font-extralight text-xs">
												{exp.company.toUpperCase()}
											</div>
										</li>
									))}
								</ul>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Experience;

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Services: React.FC = () => {
	const features = [
		{
			name: "Frontend Development",
		},
		{
			name: "API Development",
		},
		{
			name: "Database Management",
		},
		{
			name: "UI Design",
		},
		{
			name: "App Optimization",
		},
	];

	return (
		<div className="bg-red-600 text-white py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mx-auto flex gap-8">
					<div className="flex-1">
						<h2 className="text-base/7 font-semibold ">Services</h2>
						<p className="mt-2 text-4xl  tracking-tight text-pretty  sm:text-5xl ">
							I Design and Develop End-to-End Web Applications
						</p>
						<p className="mt-6 text-base/7 ">
							With a proven ability to deliver high-performance, scalable web
							solutions. I have a strong understanding of database management
							and API development, and I am adept at collaborating with
							cross-functional teams to achieve project goals. My focus is on
							creating user-friendly and maintainable applications.
						</p>
					</div>
					<div className="flex flex-col gap-7 flex-1">
						{features.map((feature) => (
							<div key={feature.name} className="relative border-b pb-6 px-4 flex gap-4 items-center">
								{/* <ArrowUpRightIcon className="h-6" /> */}
								<div className="text-2xl flex-1">{feature.name}</div>
								<ArrowUpRightIcon className="h-6" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;

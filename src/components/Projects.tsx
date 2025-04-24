import React from "react";

/* eslint-disable @next/next/no-img-element */
const Projects: React.FC = () => {
	return (
		<div className="bg-white py-8 sm:py-20">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8">
				<div className="text-center">
					<h2 className="text-4xl  text-balance text-gray-900 sm:text-5xl">
						Latest Works
					</h2>
				</div>
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					<div className="relative lg:col-span-3">
						<div className="absolute inset-px  bg-white  " />
						<div className="relative flex h-full flex-col overflow-hidden ">
							<img
								alt=""
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
								className="h-80 object-cover object-left"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4  text-red-600">
									HR Management Software
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Happy HR
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									gravida justo et nulla efficitur, maximus egestas sem
									pellentesque.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px  shadow-sm   " />
					</div>
					<div className="relative lg:col-span-3">
						<div className="absolute inset-px  bg-white " />
						<div className="relative flex h-full flex-col overflow-hidden ">
							<img
								alt=""
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
								className="h-80 object-cover object-left lg:object-right"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4  text-red-600">
									Mobile Job Platform
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									AI Made In Africa App
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
									massa, laoreet dapibus ex elit vitae odio.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px  shadow-sm  " />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px  bg-white " />
						<div className="relative flex h-full flex-col overflow-hidden r">
							<img
								alt=""
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
								className="h-80 object-cover object-left"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4  text-red-600">
									Grocery Shopping Companion
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Longos Cart App
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Sed congue eros non finibus molestie. Vestibulum euismod
									augue.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px shadow-sm  " />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px  bg-white" />
						<div className="relative flex h-full flex-col overflow-hidden ">
							<img
								alt=""
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
								className="h-80 object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4  text-red-600">
									Integrations
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Connect your favorite tools
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Maecenas at augue sed elit dictum vulputate, in nisi aliquam
									maximus arcu.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px shadow-sm " />
					</div>
					<div className="relative lg:col-span-2">
						<div className="absolute inset-px  bg-white " />
						<div className="relative flex h-full flex-col overflow-hidden ">
							<img
								alt=""
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
								className="h-80 object-cover"
							/>
							<div className="p-10 pt-4">
								<h3 className="text-sm/4  text-red-600">
									Pottery Studio E-Commerce Site
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
									Zei Pottery Studio
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600">
									Aenean vulputate justo commodo auctor vehicula in malesuada
									semper.
								</p>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px shadow-sm  " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

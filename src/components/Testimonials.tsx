import React from "react";

/* eslint-disable @next/next/no-img-element */
const Testimonials: React.FC = () => {
	const testimonials = [
		{
			body: "Clint brings great value to any team/project and it was great to work with him to deliver multiple projects during his time at Inspirex.",
			author: {
				name: "Ben Flux",
				handle: "benflux",
				imageUrl: "/ben.jpeg",
			},
		},
		{
			body: "Clint has a keen eye for detail and a strong commitment to following coding standards, which results in high-quality software applications.",
			author: {
				name: "Renee Stanforth",
				handle: "renstanforth",
				imageUrl: "/renee.jpeg",
			},
		},
		{
			body: "Clint doesn't hesitate in helping out others at work and is very approachable. He is also a good communicator.",
			author: {
				name: "Faith Bentazal",
				handle: "fb185032",
				imageUrl: "/febie.jpeg",
			},
		},
		{
			body: "Clint was instrumental in providing individualized support to students during lab sessions. He was always willing to help students with their questions and concerns.",
			author: {
				name: "Subagini Manivannan",
				handle: "subaginimanivannan",
				imageUrl: "/subagini.jpeg",
			},
		},
		{
			body: "Great Co-worker! Clint is a great team player and always willing to help out. He is very knowledgeable and has a great attitude.",
			author: {
				name: "Wenzel Jay",
				handle: "wenzel-jay",
				imageUrl: "/wenzel.jpeg",
			},
		},
		{
			body: "Clint's diligence and proactiveness make him an invaluable asset. He always anticipates needs and delivers.",
			author: {
				name: "Rocio Di Vincenzo",
				handle: "rocio-divincenzo",
				imageUrl: "/rocio.jpeg",
			},
		},
		{
			body: "Clint helped me build real projects. His guidance was invaluable in developing my portfolio. I'm grateful for his expertise and support throughout the entire process.",
			author: {
				name: "Omurcan Gulec",
				handle: "omurcan",
				imageUrl: "/omurcan.jpeg",
			},
		},
		{
			body: "Clint was one of the team members who helped develop our e-commerce project. He is a detail and goal oriented colleague; he gets things done. ",
			author: {
				name: "Jerome Locson",
				handle: "jeromelocson",
				imageUrl: "/jerome.jpeg",
			},
		},
		{
			body: "Clint has always been one of the most serious but ironically funny people I know. He is very dedicated and passionate about anything he decides on doing.",
			author: {
				name: "Meldy Rose",
				handle: "meeborda",
				imageUrl: "/meldy.jpeg",
			},
		},
	];

	return (
		<div className="bg-white py-12 sm:py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mt-2 text-4xl text-balance text-gray-900 sm:text-5xl">
						What Others Are Saying
					</p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.author.handle}
								className="pt-8 sm:inline-block sm:w-full sm:px-4"
							>
								<figure className="relative bg-white p-4 text-sm/6">
									<div className="absolute left-0 top-3/4 h-1/4 w-1 bg-red-600"></div>
									<div className="absolute right-0 top-0 h-1/5 w-1 bg-red-600"></div>
									<div className="absolute left-0 bottom-0 h-1 w-1/5 bg-red-600"></div>
									<div className="absolute right-0 top-0 h-1 w-1/6 bg-red-600"></div>

									{/* <div className="absolute left-0 top-1/2 h-1/2 w-1 bg-white"></div> */}
									<blockquote className="text-black">
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											alt=""
											src={testimonial.author.imageUrl}
											className="size-10 rounded-full bg-gray-50"
										/>
										<div>
											<div className="text-lg text-black">
												{testimonial.author.name}
											</div>
											<div className="text-black">{`in/${testimonial.author.handle}`}</div>
										</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;

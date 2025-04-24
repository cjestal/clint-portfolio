/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const CTA: React.FC = () => {
	return (
		<div id="contact" className="bg-black text-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto flex flex-col max-w-6xl ">
				<h2 className="w-full text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl ">
					Interested in Working Together?
				</h2>
				<p className="mt-6 w-full text-lg leading-8 text-white">
					Curious about how my skills and experience can contribute to your team
					or project's success? My resume offers a comprehensive look at my
					background and specific accomplishments.
				</p>
				<p className="mt-6 w-full text-lg leading-8 text-white">
					If you're interested in exploring potential synergies or simply want
					to connect professionally, feel free to reach out to me on LinkedIn.
				</p>

				<div className="flex gap-5 mt-10 font-semibold">
					<a
						className="flex py-2 px-4 flex-1 bg-gray-900 text-gray-400 hover:text-white hover:bg-red-700 items-center gap-4 cursor-pointer"
						href="https://www.canva.com/design/DAGeoDRWfQc/lVbfAUr6Akp5aLKRoUA9dw/edit"
						target="_blank"
					>
						<img src="/canva.png" alt="" />
						<span className="flex-1">View My Resume</span>
						<ChevronRightIcon className="h-6" />
					</a>
					<a
						className="flex py-2 px-4 flex-1 bg-gray-900 text-gray-400 hover:text-white hover:bg-red-700 items-center gap-4 cursor-pointer"
						href="https://www.linkedin.com/in/clintjamesestal/"
						target="_blank"
					>
						<img src="/linkedin.png" alt="" />
						<span className="flex-1">Visit My LinkedIn Profile</span>
						<ChevronRightIcon className="h-6" />
					</a>
				</div>
				<div className="flex gap-5 mt-4 font-semibold">
					<a
						className="flex py-2 px-4 flex-1 bg-gray-900 text-gray-400 hover:text-white hover:bg-red-700 items-center gap-4 cursor-pointer"
						href="https://github.com/cjestal"
						target="_blank"
					>
						<img src="/github.png" alt="" />
						<span className="flex-1">Checkout My Contributions</span>
						<ChevronRightIcon className="h-6" />
					</a>
					<a
						className="flex py-2 px-4 flex-1 bg-gray-900 text-gray-400 hover:text-white hover:bg-red-700 items-center gap-4 cursor-pointer"
						href="mailto:cjestal@gmail.com"
						target="_blank"
					>
						<img src="/gmail.png" alt="" />
						<span className="flex-1">Send Me A Message</span>
						<ChevronRightIcon className="h-6" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CTA;

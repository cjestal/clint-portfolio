"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "#home" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Contact", href: "#contact" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8 border-b border-gray-900/10"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<img alt="" src="/clint.png" className="h-auto max-h-12 w-auto" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm/6 tracking-wider text-black"
						>
							{item.name.toUpperCase()}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="https://www.canva.com/design/DAGeoDRWfQc/lVbfAUr6Akp5aLKRoUA9dw/edit"
						target="_blank"
						className="text-sm/6 font-semibold text-white px-3 py-2  bg-black hover:bg-red-600"
					>
						Hire Me! <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<img alt="clint logo" src="/clint.png" className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-black hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}

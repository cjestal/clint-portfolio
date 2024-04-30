<template>
	<div class="flex flex-col gap-16">
		<!-- about me section -->
		<div class="flex gap-3">
			<!-- left -->
			<div class="flex flex-col justify-start gap-3">
				<h1
					class="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
				>
					Hi there, I'm <span class="text-red-800">Clint James </span>👋
				</h1>

				<p class="text-lg leading-8 text-gray-600">
					I'm a full-stack web developer currently based in North America. I
					work with various frontend technologies and frameworks. All the skills
					and tools I use were self-taught and I'm always learning new things.
					Coding is not just a profession for me, it's also a source of fun and
					continuous discovery.
				</p>
				<p class="text-lg leading-8 text-gray-600">
					If you have a project you'd like to work on, I'd be happy to help.
					Let's connect!
				</p>
				<!-- socials -->
				<div class="flex flex-wrap justify-start gap-2">
					<a
						target="_blank"
						tooltip="Linkedin"
						href="https://www.linkedin.com/in/clintjamesestal/"
						class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
					>
						<svg
							class="w-5 h-5 fill-current"
							role="img"
							viewBox="0 0 256 256"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g>
								<path
									d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
								></path>
							</g>
						</svg>
					</a>

					<a
						target="_blank"
						href="https://github.com/cjestal"
						tooltip="GitHub"
						class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="w-5"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
						>
							<g fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
									fill="currentColor"
								/>
							</g>
						</svg>
					</a>

					<a
						target="_blank"
						href="https://steamcommunity.com/profiles/76561198292619055/"
						tooltip="Steam"
						class="bg-indigo-900 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
					>
						<img
							src="https://cdn.worldvectorlogo.com/logos/steam-1.svg"
							style="filter: invert(100%) brightness(200%) contrast(111%)"
							alt=""
							class="w-5 h-5 fill-current"
							srcset=""
						/>
					</a>
				</div>
			</div>
			<!-- right -->
			<div>
				<img
					src="https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9?size=750"
					class="aspect-[4/5] flex-none rounded-2xl object-cover"
					alt="placeholder"
				/>
			</div>
		</div>
		<!-- skills -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
			>
				My <span class="text-red-800">Skill Set</span>
			</h2>
			<section class="py-6 bg-orange-50">
				<ul
					class="pl-5 space-y-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-lg"
				>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
							alt="JavaScript Logo"
							class="inline-block w-8 h-8 mr-2"
						/>JavaScript
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
							alt="React Logo"
							class="inline-block w-8 h-8 mr-2"
						/>React
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
							alt="Vue.js Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Vue.js
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
							alt="Angular Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Angular
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
							alt="TypeScript Logo"
							class="inline-block w-8 h-8 mr-2"
						/>TypeScript
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
							alt="HTML5 Logo"
							class="inline-block w-8 h-8 mr-2"
						/>HTML5
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
							alt="CSS3 Logo"
							class="inline-block w-8 h-8 mr-2"
						/>CSS3
					</li>

					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://nuxt.com/assets/design-kit/icon-green.svg"
							alt="Nuxt.js Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Nuxt.js
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
							alt="Redux Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Redux
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
							alt="Next.js Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Next.js
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
							alt="Svelte Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Svelte
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
							alt="GraphQL Logo"
							class="inline-block w-8 h-8 mr-2"
						/>GraphQL
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
							alt="Tailwind CSS Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Tailwind CSS
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
							alt="Docker Logo"
							class="inline-block w-8 h-8 mr-2"
						/>Docker
					</li>
					<li class="text-gray-700 flex items-center py-2">
						<img
							src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
							alt="WordPress Logo"
							class="inline-block w-8 h-8 mr-2"
						/>WordPress
					</li>
				</ul>
			</section>
		</div>

		<!-- projects -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
			>
				Featured <span class="text-red-800">Projects</span>
			</h2>

			<div class="flex flex-col gap-6">
				<div class="relative overflow-hidden rounded-lg lg:h-60">
					<div class="absolute inset-0">
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
							alt=""
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
					<div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
					<div
						class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
					>
						<div>
							<h2 class="text-xl font-bold text-white">Project ABC</h2>
							<p class="mt-1 text-sm text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate, quis. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptate, quis.
							</p>
						</div>
						<a
							href="#"
							class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
							>View Project</a
						>
					</div>
				</div>

				<div class="relative overflow-hidden rounded-lg lg:h-60">
					<div class="absolute inset-0">
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
							alt=""
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
					<div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
					<div
						class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
					>
						<div>
							<h2 class="text-xl font-bold text-white">Project ABC</h2>
							<p class="mt-1 text-sm text-gray-300">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate, quis. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptate, quis.
							</p>
						</div>
						<a
							href="#"
							class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
							>View Project</a
						>
					</div>
				</div>
			</div>
		</div>

		<!-- interests -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
			>
				Project <span class="text-red-800">Interests</span>
			</h2>
			<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				<a
					v-for="category in categories"
					:key="category.name"
					:href="category.href"
					class="group block"
				>
					<div
						aria-hidden="true"
						class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
					>
						<img
							:src="category.imageSrc"
							:alt="category.imageAlt"
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<h3 class="mt-4 text-base font-semibold text-gray-900">
						{{ category.name }}
					</h3>
					<p class="mt-2 text-sm text-gray-500">
						{{ category.description }}
					</p>
				</a>
			</div>
		</div>

		<!-- hire me -->
		<div>
			<!-- <h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
			>
				Work With<span class="text-red-800"> Me</span>
			</h2> -->
			<div class="bg-red-100">
				<div
					class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
				>
					<h2
						class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
					>
						Wanna work with me?<br />Let's talk.
					</h2>
					<div class="mt-10 flex items-center gap-x-3 lg:mt-0 lg:flex-shrink-0">
						<a
							href="#"
							class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Download CV</a
						>
						<a
							target="_blank"
							href="https://calendly.com/cjestal-czhy/quick-chat-with-clint-james"
							class="text-sm font-semibold leading-6 text-gray-900"
							>Set a Meeting <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
			</div>
		</div>

		<!-- testimonials -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
			>
				Received <span class="text-red-800">Feedback</span>
			</h2>

			<section class="bg-white py-6">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div
						class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2"
					>
						<div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
							<img
								class="h-12 self-start"
								src="https://assets-global.website-files.com/62d8aea05e23fd589c2846eb/64827e4f64ad36db11a438e7_1-%20Header.svg"
								alt=""
							/>
							<figure class="mt-10 flex flex-auto flex-col justify-between">
								<blockquote class="text-lg leading-8 text-gray-900">
									<p>
										“We were able to rely on Clint to deliver excellent work but
										also to proactively question ideas/technologies where he was
										able to advise on more efficient approaches from his
										experience. Thank you, Clint.”
									</p>
								</blockquote>
								<figcaption class="mt-10 flex items-center gap-x-6">
									<img
										class="h-14 w-14 rounded-full bg-gray-50"
										src="https://scontent.fyzd1-3.fna.fbcdn.net/v/t31.18172-8/1978436_10152309133422835_942945323_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OpOhoF5zqMMQ7kNvgFvWRlc&_nc_ht=scontent.fyzd1-3.fna&oh=00_AfCqzyfefL_bChE_fRNAUGtM87faoZ_QsS1u4mmQEpISTg&oe=6657BF1C"
										alt=""
									/>
									<div class="text-base">
										<div class="font-semibold text-gray-900">Ben Flux</div>
										<div class="mt-1 text-gray-500">
											Co-Founder & CEO @ InspireX
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
						<div
							class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
						>
							<img
								class="h-12 self-start"
								src="https://www.rentdevelopers.ph/assets/images/content/logo-dark.png"
								alt=""
							/>
							<figure class="mt-10 flex flex-auto flex-col justify-between">
								<blockquote class="text-lg leading-8 text-gray-900">
									<p>
										“Clint has a keen eye for detail and a strong commitment to
										following coding standards, which results in high-quality
										software applications. He is well-versed in using modern
										tools and technologies”
									</p>
								</blockquote>
								<figcaption class="mt-10 flex items-center gap-x-6">
									<img
										class="h-14 w-14 rounded-full bg-gray-50"
										src="https://i0.wp.com/www.renstanforth.com/wp-content/uploads/2023/01/DSC09988_for_the_web.jpg?resize=560%2C560&ssl=1"
										alt=""
									/>
									<div class="text-base">
										<div class="font-semibold text-gray-900">
											Renee Louise Stanforth
										</div>
										<div class="mt-1 text-gray-500">
											Manager @ Link365 Global Solutions
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>

		
	</div>
</template>

<script setup>

const categories = [
	{
		name: "Handcrafted Collection",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
		imageAlt:
			"Brown leather key ring with brass metal loops and rivets on wood table.",
		description:
			"Keep your phone, keys, and wallet together, so you can lose everything at once.",
	},
	{
		name: "Organized Desk Collection",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
		imageAlt:
			"Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
		description:
			"The rest of the house will still be a mess, but your desk will look great.",
	},
	{
		name: "Focus Collection",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
		imageAlt:
			"Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
		description:
			"Be more productive than enterprise project managers with a single piece of paper.",
	},
];
const perks = [
	{
		name: "Free delivery",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
		description:
			"Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
	},
	{
		name: "10-year warranty",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
		description:
			"We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
	},
	{
		name: "Exchanges",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
		description:
			"We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
	},
	{
		name: "For the planet",
		imageSrc:
			"https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
		description:
			"Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
	},
];
</script>

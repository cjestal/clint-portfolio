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
				<!-- socials -->
				<div class="flex flex-wrap justify-start gap-2">
					<button
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
					</button>

					<button
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
					</button>
				</div>
			</div>
			<!-- right -->
			<div>
				<img src="https://via.placeholder.com/750" alt="placeholder" />
			</div>
		</div>
		<!-- skills -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
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
							src="https://cdn.jsdelivr.net/npm/nuxt-logo@0.1.0/nuxt-logo.png"
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
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
			>
				Recent <span class="text-red-800">Projects</span>
			</h2>
		</div>

		<!-- interests -->
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
			>
				Project <span class="text-red-800">Interests</span>
			</h2>
			<div class="mx-auto max-w-7xl py-6 sm:px-2 lg:px-4">
				<div
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					<div v-for="perk in perks" :key="perk.name" class="sm:flex">
						<div class="sm:flex-shrink-0">
							<div class="flow-root">
								<img class="h-24 w-28" :src="perk.imageSrc" alt="" />
							</div>
						</div>
						<div class="mt-3 sm:ml-3 sm:mt-0">
							<h3 class="text-sm font-medium text-gray-900">
								{{ perk.name }}
							</h3>
							<p class="mt-2 text-sm text-gray-500">{{ perk.description }}</p>
						</div>
					</div>
				</div>
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
						Interested in working with me?<br />Book a meeting or download my CV.
					</h2>
					<div class="mt-10 flex items-center gap-x-3 lg:mt-0 lg:flex-shrink-0">
						<a
							href="#"
							class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Download CV</a
						>
						<a
                            target="_blank"
							href="https://calendly.com/cjestal-czhy/quick-chat-with-clint-james"
							class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Book a call</a
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
								src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
								alt=""
							/>
							<figure class="mt-10 flex flex-auto flex-col justify-between">
								<blockquote class="text-lg leading-8 text-gray-900">
									<p>
										“Amet amet eget scelerisque tellus sit neque faucibus non
										eleifend. Integer eu praesent at a. Ornare arcu gravida
										natoque erat et cursus tortor consequat at. Vulputate
										gravida sociis enim nullam ultricies habitant malesuada
										lorem ac. Tincidunt urna dui pellentesque sagittis.”
									</p>
								</blockquote>
								<figcaption class="mt-10 flex items-center gap-x-6">
									<img
										class="h-14 w-14 rounded-full bg-gray-50"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
									<div class="text-base">
										<div class="font-semibold text-gray-900">Judith Black</div>
										<div class="mt-1 text-gray-500">CEO of Tuple</div>
									</div>
								</figcaption>
							</figure>
						</div>
						<div
							class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
						>
							<img
								class="h-12 self-start"
								src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
								alt=""
							/>
							<figure class="mt-10 flex flex-auto flex-col justify-between">
								<blockquote class="text-lg leading-8 text-gray-900">
									<p>
										“Excepteur veniam labore ullamco eiusmod. Pariatur consequat
										proident duis dolore nulla veniam reprehenderit nisi officia
										voluptate incididunt exercitation exercitation elit. Nostrud
										veniam sint dolor nisi ullamco.”
									</p>
								</blockquote>
								<figcaption class="mt-10 flex items-center gap-x-6">
									<img
										class="h-14 w-14 rounded-full bg-gray-50"
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
									<div class="text-base">
										<div class="font-semibold text-gray-900">
											Joseph Rodriguez
										</div>
										<div class="mt-1 text-gray-500">CEO of Reform</div>
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

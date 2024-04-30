<template>
	<div>
		<SectionHeader main="Featured" highlight="Projects" />

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
						href="/projects"
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
</template>

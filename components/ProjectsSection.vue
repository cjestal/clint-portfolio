<template>
	<div>
		<div class="flex justify-between align-middle">
			<SectionHeader main="Featured Projects" />
			<a
				href="/projects"
				class="text-sm font-semibold leading-6 text-red-900 pt-1"
				>View all <span aria-hidden="true">→</span></a
			>
		</div>

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
						<h2 class="text-xl font-bold text-white">Merry HR</h2>
						<p class="mt-1 text-sm text-gray-300">
							An HR suite that allows you to manage your employees, departments,
							and roles. It's built to cover all the bases a company might need.
						</p>
					</div>
					<a
						href="/projects#merry-hr"
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
						<h2 class="text-xl font-bold text-white">Quality Check Mate</h2>
						<p class="mt-1 text-sm text-gray-300">
							A quality control platform that allows you to manage your quality
							checks, inspections, and certifications. It's designed to simplify
							the process of managing quality checks and inspections.
						</p>
					</div>
					<a
						href="/projects#quality-check-mate"
						class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
						>View Project</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<template>
	<div class="flex flex-col">
		<h1
			class="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
		>
			Personal <span class="text-red-800">Projects</span>
		</h1>
		<p class="text-lg leading-8 text-gray-600 max-w-screen-3xl">
			Welcome to my projects page. Each project listed here has been
			crafted with great care and a lot of fun. I hope you enjoy exploring them
			as much as I enjoyed creating them. Each project includes a demo link and
			a link to the GitHub repository where you can explore the code and see how
			the project was built.
		</p>
	</div>
	<section class="flex flex-col gap-6">
		<ProjectBlock
			id="merry-hr"
			projectName="😺 Merry HR"
			:backgroundClass="'bg-yellow-50'"
			description="An HR suite that allows you to manage your employees, departments, and roles. It's built to cover all the bases a company might need."
		/>
		<ProjectBlock
			id="quality-check-mate"
			projectName="♟️ Quality Check Mate"
			:backgroundClass="'bg-red-50'"
			description="A quality control platform that allows you to manage your quality checks, inspections, and certifications. It's designed to simplify the process of managing quality checks and inspections."
		/>
		<ProjectBlock
			id="boat-bound"
			projectName="🛥️ Boat Bound"
			:backgroundClass="'bg-blue-50'"
			description="A boat booking application the allows users to rent boats, yachts, and other watercraft from boat owners."
		/>
		<ProjectBlock
			id="noble-niche"
			projectName="🛍️ Noble Niche"
			:backgroundClass="'bg-purple-50'"
			description="An e-commerce site that focuses on luxury items. It's built to be a platform for users to browse, search, and purchase luxury items."
		/>
	</section>
</template>

<script setup></script>

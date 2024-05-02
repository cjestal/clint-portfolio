<template>
	<div class="flex flex-col">
		<h1
			class="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
		>
			Personal <span class="text-red-800">Projects</span>
		</h1>
		<p class="text-lg leading-8 text-gray-600 max-w-screen-3xl">
			Welcome to my projects page. Each project listed here has been crafted
			with great care and a lot of fun. I hope you enjoy exploring them as much
			as I enjoyed creating them. Each project includes a demo link and a link
			to the GitHub repository where you can explore the code and see how the
			project was built.
		</p>
	</div>
	<section class="flex flex-col gap-6">
		<template v-for="(project, index) in projects">
			<ProjectBlock
				:id="project.id"
				:projectName="project.name"
				:backgroundClass="project.backgroundClass"
				:designHeader="project.designHeader"
				:description="project.description"
				:designImgSrc="project.designImgSrc"
				:techImgSrc="project.techImgSrc"
				:techHeader="project.techHeader"
				:inspirationImgSrc="project.inspirationImgSrc"
				:inspirationHeader="project.inspirationHeader"
				:demoImgSrc="project.demoImgSrc"
				:demoHeader="project.demoHeader"
			/>
			<!-- This shows up every 3 projects -->
			<CtaSection v-if="(index + 1) % 3 === 0" />
		</template>
	</section>
</template>

<script setup>
const projects = [
	{
		id: "merry-hr",
		name: "😺 Merry HR",
		backgroundClass: "bg-yellow-50",
		designHeader: "Sleek Design",
		description:
			"An HR suite that allows you to manage your employees, departments, and roles. It's built to cover all the bases a company might need.",
		designImgSrc: "https://source.unsplash.com/random/800x400?office",
		techImgSrc: "https://source.unsplash.com/random/800x400?technology",
		techHeader: "Advanced Tech",
		inspirationImgSrc: "https://source.unsplash.com/random/800x400?inspiration",
		inspirationHeader: "Creative Inspiration",
		demoImgSrc: "https://source.unsplash.com/random/800x400?demo",
		demoHeader: "Live Demo"
	},
	{
		id: "quality-check-mate",
		name: "♟️ Quality Check Mate",
		backgroundClass: "bg-red-50",
		designHeader: "Quality Design",
		description:
			"A quality control platform that allows you to manage your quality checks, inspections, and certifications. It's designed to simplify the process of managing quality checks and inspections.",
		designImgSrc: "https://source.unsplash.com/random/800x400?quality",
		techImgSrc: "https://source.unsplash.com/random/800x400?tech",
		techHeader: "Tech Excellence",
		inspirationImgSrc: "https://source.unsplash.com/random/800x400?inspire",
		inspirationHeader: "Inspirational Quality",
		demoImgSrc: "https://source.unsplash.com/random/800x400?demo",
		demoHeader: "Demo Available"
	},
	{
		id: "boat-bound",
		name: "🛥️ Boat Bound",
		backgroundClass: "bg-blue-50",
		designHeader: "Nautical Design",
		description:
			"A boat sharing application that allows users to rent boats, yachts, and other watercraft from boat owners.",
		designImgSrc: "https://source.unsplash.com/random/800x400?boat",
		techImgSrc: "https://source.unsplash.com/random/800x400?tech",
		techHeader: "Seaworthy Tech",
		inspirationImgSrc: "https://source.unsplash.com/random/800x400?sea",
		inspirationHeader: "Oceanic Inspiration",
		demoImgSrc: "https://source.unsplash.com/random/800x400?demo",
		demoHeader: "Try the Demo"
	},
	{
		id: "noble-niche",
		name: "🛍️ Noble Niche",
		backgroundClass: "bg-purple-50",
		designHeader: "Luxury Design",
		description:
			"An e-commerce site that focuses on luxury items. It's built to be a platform for users to browse, search, and purchase luxury items.",
		designImgSrc: "https://source.unsplash.com/random/800x400?luxury",
		techImgSrc: "https://source.unsplash.com/random/800x400?tech",
		techHeader: "High-End Tech",
		inspirationImgSrc: "https://source.unsplash.com/random/800x400?luxury",
		inspirationHeader: "Luxurious Inspiration",
		demoImgSrc: "https://source.unsplash.com/random/800x400?demo",
		demoHeader: "Exclusive Demo"
	},
	{
		id: "talk-tango",
		name: "🎤 Talk Tango",
		backgroundClass: "bg-orange-50",
		designHeader: "Intimate Design",
		description:
			"My personal take on a dating app. Users can find their perfect match through the power of voice! Dive into meaningful conversations, spark chemistry, and find your match in a symphony of shared interests and vibrant personalities.",
		designImgSrc: "https://source.unsplash.com/random/800x400?dating",
		techImgSrc: "https://source.unsplash.com/random/800x400?tech",
		techHeader: "Innovative Tech",
		inspirationImgSrc: "https://source.unsplash.com/random/800x400?romance",
		inspirationHeader: "Romantic Inspiration",
		demoImgSrc: "https://source.unsplash.com/random/800x400?demo",
		demoHeader: "Demo Love"
	},
];

</script>

<template>
	<div>
		<SectionHeader main="Project Interests" />
		<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
			<div
				v-for="category in categories"
				:key="category.name"
				class="group block"
			>
				<div
					aria-hidden="true"
					class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
				>
					<img
						:src="category.imageSrc"
						class="h-96 w-full object-cover object-center"
					/>
				</div>
				<h3 class="mt-4 text-base font-semibold text-gray-900">
					{{ category.name }}
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					{{ category.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const categories = [
	{
		name: "Dashboard Applications",
		href: "#",
		imageSrc:
			"https://images.unsplash.com/photo-1640340435016-1964cf4e723b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"I specialize in creating intuitive dashboard applications for data visualization and management.",
	},
	{
		name: "Portfolio Sites",
		href: "#",
		imageSrc:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"I craft visually appealing and highly functional portfolio sites that fit the client's style.",
	},
	{
		name: "E-commerce Platforms",
		href: "#",
		imageSrc:
			"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"I love building e-commerce sites that make shopping a breeze.",
	},
];
</script>

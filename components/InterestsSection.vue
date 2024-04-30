<template>
	<div>
		<SectionHeader main="Project" highlight="Interests" />
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
						class="h-full w-full object-cover object-center"
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
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
		description:
			"I specialize in creating intuitive dashboard applications for data visualization and management.",
	},
	{
		name: "Portfolio Sites",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
		description:
			"I craft visually appealing and highly functional portfolio sites for clients.",
	},
	{
		name: "E-commerce Sites",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
		description:
			"I love building e-commerce sites that make shopping a breeze.",
	},
];
</script>

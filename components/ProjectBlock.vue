<template>
	<div :class="backgroundClass">
		<section
			aria-labelledby="features-heading"
			class="mx-auto max-w-7xl py-10 sm:px-2 lg:px-8"
		>
			<div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
				<div class="max-w-3xl">
					<SectionHeader :main="projectName" />
					<p class="mt-4 text-gray-500 text-md">
						{{ description }}
					</p>
				</div>

				<TabGroup as="div" class="mt-4">
					<div class="-mx-4 flex overflow-x-auto sm:mx-0">
						<div class="flex-auto border-b border-gray-200 px-4 sm:px-0">
							<TabList class="-mb-px flex space-x-10">
								<Tab
									as="template"
									v-for="tab in tabs"
									:key="tab.name"
									v-slot="{ selected }"
								>
									<button
										class="outline-none"
										:class="[
											selected
												? 'border-red-700 text-red-700'
												: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
											'whitespace-nowrap border-b-2 py-4 text-sm font-medium',
										]"
									>
										{{ tab.name }}
									</button>
								</Tab>
							</TabList>
						</div>
					</div>

					<TabPanels as="template">
						<TabPanel
							v-for="tab in tabs"
							:key="tab.name"
							class="space-y-16 pt-10 lg:pt-16"
						>
							<div
								v-for="feature in tab.features"
								:key="feature.name"
								class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
							>
								<ProjectTabContent
									v-if="tab.name === 'Design'"
									:header="designHeader"
									description="Lorem ipsum dolor sit amet"
									:imgSrc="designImgSrc"
								/>
								<ProjectTabContent
									v-if="tab.name === 'Tech Stack'"
									:header="techHeader"
									description="Lorem ipsum dolor sit amet"
									:imgSrc="techImgSrc"
								/>
								<ProjectTabContent
									v-if="tab.name === 'Inspiration'"
									:header="inspirationHeader"
									description="Lorem ipsum dolor sit amet"
									:imgSrc="inspirationImgSrc"
								/>
								<ProjectTabContent
									v-if="tab.name === 'Demo & Source'"
									:header="demoHeader"
									description="Lorem ipsum dolor sit amet"
									:imgSrc="demoImgSrc"
								/>
							</div>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</div>
		</section>
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

const props = defineProps({
	projectName: {
		type: String,
		default: "Project Name",
	},
	description: {
		type: String,
		default: "Project Description",
	},
	backgroundClass: {
		type: String,
		default: "bg-yellow-200",
	},
	designHeader: {
		type: String,
		default: "Project Name",
	},
	designImgSrc: {
		type: String,
		default:
			"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
	},
	techImgSrc: {
		type: String,
		default:
			"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
	},
	techHeader: {
		type: String,
		default: "Project Name",
	},
	inspirationImgSrc: {
		type: String,
		default:
			"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
	},
	inspirationHeader: {
		type: String,
		default: "Project Name",
	},
	demoImgSrc: {
		type: String,
		default:
			"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
	},
	demoHeader: {
		type: String,
		default: "Project Name",
	},
});

const tabs = [
	{
		name: "Design",
		features: [
			{
				name: "Streamlined HR Approach",
				description:
					"I am currently working on this project. Stay tuned for updates!",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
			},
		],
	},
	{
		name: "Tech Stack",
		features: [
			{
				name: "Natural wood options",
				description:
					"Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg",
			},
		],
	},
	{
		name: "Inspiration",
		features: [
			{
				name: "Helpful around the home",
				description:
					"Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg",
			},
		],
	},
	{
		name: "Demo & Source",
		features: [
			{
				name: "Work in Progress",
				description:
					"I am currently working on this project. Stay tuned for updates! Demo and source code coming soon.",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg",
			},
		],
	},
];
</script>

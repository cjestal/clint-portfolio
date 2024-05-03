<template>
	<div class="mt-6 lg:col-span-5 lg:mt-0">
		<h3 class="text-lg font-medium text-gray-900">
			{{ content.header }}
		</h3>
		<p class="mt-2 text-md text-gray-500">
			{{ content.description }}
		</p>
	</div>
	<div class="lg:col-span-7">
		<div
			class="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5"
		>
			<img :src="content.imgSrc" class="object-cover object-center" />
		</div>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	content: {
		type: Object,
		default: () => ({
			header: '',
			description: '',
			imgSrc: ''
		})
	}
});
</script>

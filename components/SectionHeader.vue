<template>
	<h2
		class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
	>
		{{ main }} <span class="text-red-800">{{ highlight }}</span>
	</h2>
</template>

<script>
export default {
	props: {
		main: {
			type: String,
			default: "Main Title",
		},
		highlight: {
			type: String,
			default: "Interests",
		},
	},
};
</script>

<template>
	<h2
		class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
	>
		{{ others }} <span class="text-red-800">{{ lastWord }}</span>
	</h2>
</template>

<script>
export default {
	props: {
		main: {
			type: String,
			default: "Main Title",
		},
		// highlight: {
		// 	type: String,
		// 	default: "Interests",
		// },
	},
	computed: {
		lastWord() {
			const words = this.main.split(' ');
			return words.pop();
		},
		others() {
			const words = this.main.split(' ');
			words.pop();
			return words.join(' ');
		},
	},
};
</script>

<template>
	<div class="">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<a
					href="/blog"
					class="text-base font-semibold leading-6 text-red-900 pt-1"
					><span aria-hidden="true">←</span> Go back</a
				>
				<h2
					class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
				>
					{{ others }} <span class="text-red-800">{{ lastWord }}</span>
				</h2>

                <h3 class="my-4 text-gray-600 text-base italic">Posted on {{ datePosted }} by {{ author }}</h3>

				<div class="mt-6 text-lg leading-8 text-gray-600">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		author: String,
		datePosted: String,
		content: String,
	},
	computed: {
		lastWord() {
			const words = this.title.split(" ");
			return words.pop();
		},
		others() {
			const words = this.title.split(" ");
			words.pop();
			return words.join(" ");
		},
	},
};
</script>

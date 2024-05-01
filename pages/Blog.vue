<template>
	<div class="flex flex-col">
		<h1
			class="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
		>
			Tech <span class="text-red-800">Thoughts</span>
		</h1>
		<p class="text-lg leading-8 text-gray-600 max-w-screen-3xl">
			Here, I share insights and stories from my journey as a developer,
			covering topics from coding challenges to tech trends. I hope you find the
			posts enlightening and engaging.
		</p>
	</div>
	<section class="flex flex-col gap-6">
		<div
			class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<article
				v-for="post in blogPosts"
				:key="post.id"
				class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
			>
				<img
					:src="post.imageUrl"
					alt=""
					class="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
				<div
					class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
				/>
				<div
					class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
				/>

				<div
					class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
				>
					<time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
					<div class="-ml-4 flex items-center gap-x-4">
						<svg
							viewBox="0 0 2 2"
							class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
						>
							<circle cx="1" cy="1" r="1" />
						</svg>
						<div class="flex gap-x-2.5">
							<img
								:src="post.author.imageUrl"
								alt=""
								class="h-6 w-6 flex-none rounded-full bg-white/10"
							/>
							{{ post.author.name }}
						</div>
					</div>
				</div>
				<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
					<a :href="post.href">
						<span class="absolute inset-0" />
						{{ post.title }}
					</a>
				</h3>
			</article>
		</div>
	</section>
</template>

<script setup>
const blogPosts = [
	{
		id: 1,
		title: "How gaming at a young age led me to a career in web development",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	{
		id: 2,
		title: "My challenges when I was learning React and Redux",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Jun 25, 2021",
		datetime: "2021-06-25",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	{
		id: 3,
		title: "How I use artificial intelligence to skip code bottlenecks (and other roadblocks)",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Sep 10, 2022",
		datetime: "2022-09-10",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	{
		id: 4,
		title: "10 features that makes TailwindCSS awesome!",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
		date: "Jan 15, 2024",
		datetime: "2024-01-15",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	{
		id: 5,
		title: "Exploring the New Features of Vue 3",
		href: "#",
		description:
			"Discover the exciting new features of Vue 3 that enhance your development experience. We'll dive into the Composition API, improved TypeScript support, and more.",
		imageUrl:
			"https://images.unsplash.com/photo-1581276879432-15e50529f34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
		date: "Feb 20, 2024",
		datetime: "2024-02-20",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	{
		id: 6,
		title: "Why JavaScript is Still the King of Web Development",
		href: "#",
		description:
			"JavaScript continues to dominate the web development landscape. Learn why it remains the top choice for developers and the innovations that keep it at the forefront.",
		imageUrl:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaGootby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
		date: "Mar 05, 2024",
		datetime: "2024-03-05",
		author: {
			name: "Clint James",
			imageUrl:
				"https://2.gravatar.com/avatar/ebf4e2c20ad64b82c61db8642b4ef580dc7c96809a9606f37e1186d1f2ffd9a9",
		},
	},
	// More posts...
];
</script>

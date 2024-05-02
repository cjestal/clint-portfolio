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
				class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:opacity-75"
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
		href: "/blog/how-gaming-at-a-young-age",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1652197881268-d625ad54402b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		title: "My challenges while learning React and Redux",
		href: "/blog/my-challenges-learning-react-redux",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1579389083175-247ef703006f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		title: "How I use artificial intelligence to skip code bottlenecks (and have more breaks!)",
		href: "/blog/artificial-intelligence-skip-bottlenecks",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1533929702053-9986939ea193?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		href: "/blog/10-features-that-makes-tailwindcss-awesome",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		imageUrl:
			"https://images.unsplash.com/photo-1608093829255-31b11b093a06?q=80&w=2312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		href: "/blog/exploring-new-vue-3-features",
		description:
			"Discover the exciting new features of Vue 3 that enhance your development experience. We'll dive into the Composition API, improved TypeScript support, and more.",
		imageUrl:
			"https://wallpapercave.com/wp/wp7134545.jpg",
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
		href: "/blog/why-javascript-is-king",
		description:
			"JavaScript continues to dominate the web development landscape. Learn why it remains the top choice for developers and the innovations that keep it at the forefront.",
		imageUrl:
			"https://images.unsplash.com/photo-1557853197-aefb550b6fdc?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

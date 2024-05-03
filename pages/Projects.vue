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
				:description="project.description"
				:designContent="project.design"
				:techContent="project.tech"
				:demoContent="project.demo"
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
		description:
			"An HR suite that allows you to manage your employees, departments, and roles. It's built to cover all the bases a company might need.",
		design: {
			header: "Sleek Design",
			description:
				"A modern and intuitive user interface designed for optimal user experience. The layout is clean and accessible, ensuring that HR tasks are handled with efficiency and ease. Visual aesthetics are harmonized with functionality to provide a superior user interaction.",
			imgSrc: "https://source.unsplash.com/random/800x400?office",
		},
		tech: {
			header: "Advanced Tech",
			description:
				"Utilizes cutting-edge technology to streamline HR processes and enhance user experience.",
			imgSrc: "https://source.unsplash.com/random/800x400?technology",
		},
		demo: {
			header: "Work in progress...",
			description:
				"This project is currently under development. Stay tuned for updates!",
			imgSrc: "https://source.unsplash.com/random/800x400?demo",
		},
	},
	{
		id: "quality-check-mate",
		name: "♟️ Quality Check Mate",
		backgroundClass: "bg-red-50",
		description:
			"A quality control platform that allows you to manage your quality checks, inspections, and certifications. It's designed to simplify the process of managing quality checks and inspections.",
		design: {
			header: "Quality Design",
			description:
				"Designed with attention to detail to ensure high standards are met efficiently. The interface provides clear, concise information, making it easy to track and manage quality metrics. It combines aesthetic appeal with practical functionality, enhancing the user's experience.",
			imgSrc: "https://source.unsplash.com/random/800x400?quality",
		},
		tech: {
			header: "Tech Excellence",
			description:
				"Features robust and reliable technology to ensure accurate and efficient quality control.",
			imgSrc: "https://source.unsplash.com/random/800x400?tech",
		},
		demo: {
			header: "Work in progress...",
			description:
				"This project is currently under development. Stay tuned for updates!",
			imgSrc: "https://source.unsplash.com/random/800x400?demo",
		},
	},
	{
		id: "boat-bound",
		name: "🛥️ Boat Bound",
		description:
			"A boat sharing application that allows users to rent boats, yachts, and other watercraft from boat owners.",
		backgroundClass: "bg-blue-50",
		design: {
			header: "Nautical Design",
			description:
				"Crafted with a maritime theme to enhance the boat rental experience. The design evokes the freedom and serenity of the sea, making it appealing to nautical enthusiasts. User interfaces are streamlined for easy navigation and booking.",
			imgSrc: "https://source.unsplash.com/random/800x400?boat",
		},
		tech: {
			header: "Seaworthy Tech",
			description:
				"Incorporates maritime technology to ensure safety and ease of use for all users.",
			imgSrc: "https://source.unsplash.com/random/800x400?tech",
		},
		demo: {
			header: "Work in progress...",
			description:
				"This project is currently under development. Stay tuned for updates!",
			imgSrc: "https://source.unsplash.com/random/800x400?demo",
		},
	},
	{
		id: "noble-niche",
		name: "🛍️ Noble Niche",
		backgroundClass: "bg-purple-50",
		description:
			"An e-commerce site that focuses on luxury items. It's built to be a platform for users to browse, search, and purchase luxury items.",
		design: {
			header: "Luxury Design",
			description:
				"Elegantly designed to showcase and highlight luxury products. The design emphasizes sophistication and exclusivity, appealing to a discerning clientele. It provides a seamless and luxurious shopping experience from browsing to checkout.",
			imgSrc: "https://source.unsplash.com/random/800x400?luxury",
		},
		tech: {
			header: "High-End Tech",
			description:
				"Utilizes the latest e-commerce technology to provide a seamless shopping experience.",
			imgSrc: "https://source.unsplash.com/random/800x400?tech",
		},
		demo: {
			header: "Work in progress...",
			description:
				"This project is currently under development. Stay tuned for updates!",
			imgSrc: "https://source.unsplash.com/random/800x400?demo",
		},
	},
	{
		id: "talk-tango",
		name: "🎤 Talk Tango",
		backgroundClass: "bg-orange-50",
		description:
			"My personal take on a dating app. Users can find their perfect match through the power of voice! Dive into meaningful conversations, spark chemistry, and find your match in a symphony of shared interests and vibrant personalities.",
		design: {
			header: "Intimate Design",
			description:
				"Designed to create a warm and inviting atmosphere for meaningful connections. The interface encourages interaction through voice, fostering a deeper connection between users. It combines aesthetic beauty with functional simplicity to enhance user engagement.",
			imgSrc: "https://source.unsplash.com/random/800x400?dating",
		},
		tech: {
			header: "Innovative Tech",
			description:
				"Features state-of-the-art voice recognition and matching algorithms.",
			imgSrc: "https://source.unsplash.com/random/800x400?tech",
		},
		demo: {
			header: "Work in progress...",
			description:
				"This project is currently under development. Stay tuned for updates!",
			imgSrc: "https://source.unsplash.com/random/800x400?demo",
		},
	},
];
</script>

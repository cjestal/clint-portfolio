<template>
	<div>
		
		<SectionHeader main="Skill Set" />
		<section class="py-6 bg-orange-50">
			<ul
				class="pl-5 space-y-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-lg"
			>
				<li v-for="skill in skills" :key="skill.name" class="text-gray-700 cursor-default flex items-center py-2 hover:font-bold hover:text-red-700">
					<img
						:src="skill.logo"
						:alt="`${skill.name} Logo`"
						class="inline-block w-8 h-8 mr-2"
					/>{{ skill.name }}
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: [
				{ name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
				{ name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
				{ name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
				{ name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
				{ name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
				{ name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
				{ name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
				{ name: 'Nuxt.js', logo: 'https://nuxt.com/assets/design-kit/icon-green.svg' },
				{ name: 'Redux', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' },
				{ name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
				{ name: 'Svelte', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg' },
				{ name: 'GraphQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
				{ name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
				{ name: 'Docker', logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
				{ name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png' },
				{ name: 'NestJS', logo: 'https://nestjs.com/img/logo-small.svg' },
				{ name: 'ExpressJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
				{ name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
				{ name: 'Firebase', logo: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png' },
				{ name: 'AWS', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
				{ name: 'Shopify', logo: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' }
			]
		};
	}
}
</script>


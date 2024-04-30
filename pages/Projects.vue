<template>
	<div class="flex flex-col">
		<h1
			class="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3"
		>
			Personal <span class="text-red-800">Projects</span>
		</h1>
		<p class="text-lg leading-8 text-gray-600 max-w-screen-3xl">
			Welcome to my projects page. Each project listed here has been
			crafted with great care and a lot of fun. I hope you enjoy exploring them
			as much as I enjoyed creating them. Each project includes a demo link and
			a link to the GitHub repository where you can explore the code and see how
			the project was built.
		</p>
	</div>
	<section class="flex flex-col gap-6">
		<ProjectBlock
			projectName="😺 MerryHR"
			:backgroundClass="'bg-yellow-100'"
			description="Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id."
		/>
		<ProjectBlock
			projectName="♟️ QualityCheckMate"
			:backgroundClass="'bg-red-200'"
			description="Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id."
		/>
		<ProjectBlock
			projectName="🛥️ BoatBound"
			:backgroundClass="'bg-blue-100'"
			description="Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id."
		/>
		<ProjectBlock
			projectName="🛍️ NobleNiche"
			:backgroundClass="'bg-purple-100'"
			description="Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id."
		/>
	</section>
</template>

<script setup></script>

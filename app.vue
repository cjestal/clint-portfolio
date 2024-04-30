<template>
	<div class="min-h-full">
		<div class="bg-gray-800 pb-32">
			<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
				<div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
					<div class="border-b border-gray-700">
						<div class="flex h-16 items-center justify-center px-4 sm:px-0">
							<div class="flex items-center">
								<div class="hidden md:block">
									<div class="flex items-center space-x-4">
										<a
											v-for="item in navigation"
											:key="item.name"
											:href="item.href"
											:class="[
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'rounded-md px-3 py-2 text-sm font-medium',
											]"
											:aria-current="item.current ? 'page' : undefined"
											>{{ item.name }}</a
										>
									</div>
								</div>
							</div>

							<div class="-mr-2 flex md:hidden">
								<!-- Mobile menu button -->
								<DisclosureButton
									class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span class="absolute -inset-0.5" />
									<span class="sr-only">Open main menu</span>
									<Bars3Icon
										v-if="!open"
										class="block h-6 w-6"
										aria-hidden="true"
									/>
									<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
								</DisclosureButton>
							</div>
						</div>
					</div>
				</div>

				<DisclosurePanel class="border-b border-gray-700 md:hidden">
					<div class="space-y-1 px-2 py-3 sm:px-3">
						<DisclosureButton
							v-for="item in navigation"
							:key="item.name"
							as="a"
							:href="item.href"
							:class="[
								item.current
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'block rounded-md px-3 py-2 text-base font-medium',
							]"
							:aria-current="item.current ? 'page' : undefined"
							>{{ item.name }}</DisclosureButton
						>
					</div>
				</DisclosurePanel>
			</Disclosure>
		</div>

		<main class="-mt-32 pt-10">
			<div class="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
				<div class="rounded-xl bg-white px-5 pt-12 pb-6 shadow-2xl sm:px-6 flex flex-col gap-16">
					<NuxtPage />
					<!-- footer -->
					<div class="bg-gray-100">
						<div class="mx-auto max-w-7xl overflow-hidden px-6 py-10">
							<nav
								class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
								aria-label="Footer"
							>
								<div
									v-for="item in navigation2.main"
									:key="item.name"
									class="pb-6"
								>
									<a
										:href="item.href"
										class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{{ item.name }}</a
									>
								</div>
							</nav>
							<div class="mt-10 flex justify-center space-x-10">
								<a
									v-for="item in navigation2.social"
									:key="item.name"
									:href="item.href"
									class="text-gray-400 hover:text-gray-500"
								>
									<span class="sr-only">{{ item.name }}</span>
									<component
										:is="item.icon"
										class="h-6 w-6"
										aria-hidden="true"
									/>
								</a>
							</div>
							<p class="mt-10 text-center text-xs leading-5 text-gray-500">
								&copy; 2024 Clint James Estal. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const navigation2 = {
	main: [
		{ name: "Home", href: "#" },
		{ name: "Projects", href: "#" },
		{ name: "Blog", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							"fill-rule": "evenodd",
							d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
							"clip-rule": "evenodd",
						}),
					]),
			}),
		},
		{
			name: "GitHub",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							"fill-rule": "evenodd",
							d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
							"clip-rule": "evenodd",
						}),
					]),
			}),
		},
		{
			name: "YouTube",
			href: "#",
			icon: defineComponent({
				render: () =>
					h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
						h("path", {
							"fill-rule": "evenodd",
							d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
							"clip-rule": "evenodd",
						}),
					]),
			}),
		},
	],
};
const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Projects", href: "/projects", current: false },
	{ name: "Blog", href: "/blog", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];
</script>

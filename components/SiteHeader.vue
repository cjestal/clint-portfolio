<template>
	<div class="bg-red-950 pb-32">
		<Disclosure as="nav" class="bg-red-950" v-slot="{ open }">
			<div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
				<div class="border-b border-gray-300">
					<div
						class="flex h-16 items-center justify-between px-4 sm:px-0 md:justify-start"
					>
						<!-- menu items -->
						<div class="flex items-center">
							<div class="flex flex-shrink-0 items-center">
								<img
									class="h-8 w-auto bg-white rounded-full p-1 mr-4"
									src="https://www.svgrepo.com/show/444345/gui-code.svg"
									alt="Clint logo"
								/>
							</div>
							<div class="hidden md:block">
								<div class="flex items-center space-x-4">
									
									<a
										v-for="item in navigation"
										:key="item.name"
										:href="item.href"
										:class="[
											$route.path === item.href
												? 'bg-red-900 text-white'
												: 'text-gray-300 hover:bg-red-800 hover:text-white',
											'rounded-md px-3 py-2 text-sm font-medium',
										]"
										:aria-current="item.current ? 'page' : undefined"
										>{{ item.name }}</a
									>
								</div>
							</div>
						</div>
						<!-- mobile menu -->
						<div class="flex md:hidden">
							<!-- Mobile menu button -->
							<DisclosureButton
								class="relative inline-flex items-center justify-center rounded-md bg-red-800 p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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

			<DisclosurePanel class="border-b border-white md:hidden">
				<div class="space-y-1 px-2 py-3 sm:px-3">
					<DisclosureButton
						v-for="item in navigation"
						:key="item.name"
						as="a"
						:href="item.href"
						:class="[
							$route.path === item.href
								? 'bg-red-900 text-white'
								: 'text-gray-300 hover:bg-red-700 hover:text-white',
							'block rounded-md px-3 py-2 text-base font-medium',
						]"
						:aria-current="item.current ? 'page' : undefined"
						>{{ item.name }}</DisclosureButton
					>
				</div>
			</DisclosurePanel>
		</Disclosure>
	</div>
</template>

<script setup>
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Projects", href: "/projects", current: false },
	{ name: "Blog", href: "/blog", current: false },
];
</script>

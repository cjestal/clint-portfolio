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
					<div class="border-t border-gray-700 pb-3 pt-4">
						<div class="flex items-center px-5">
							<div class="flex-shrink-0">
								<img
									class="h-10 w-10 rounded-full"
									:src="user.imageUrl"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<div class="text-base font-medium leading-none text-white">
									{{ user.name }}
								</div>
								<div class="text-sm font-medium leading-none text-gray-400">
									{{ user.email }}
								</div>
							</div>
							<button
								type="button"
								class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">View notifications</span>
								<BellIcon class="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div class="mt-3 space-y-1 px-2">
							<DisclosureButton
								v-for="item in userNavigation"
								:key="item.name"
								as="a"
								:href="item.href"
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
								>{{ item.name }}</DisclosureButton
							>
						</div>
					</div>
				</DisclosurePanel>
			</Disclosure>
		</div>

		<main class="-mt-32 pt-10">
			<div class="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
				<div class="rounded-lg bg-white px-5 py-12 shadow sm:px-6">
					<NuxtPage />
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

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Projects", href: "/projects", current: false },
	{ name: "Calendar", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];
</script>

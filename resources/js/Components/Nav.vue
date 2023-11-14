<script setup>
import Dropdown from "./Dropdown.vue";
import DropdownLink from "./DropdownLink.vue";
import { canLogin, canRegister } from "./../Pages/Home/module/index.js";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav
        v-if="canLogin"
        class="w-full md:max-w-7xl mx-auto flex justify-end bg-dark-blue-2"
    >
        <div class="flex items-center" v-if="$page.props.auth.user">
            <div>
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <span class="inline-flex rounded">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-3 border border-transparent text-base leading-5 font-medium rounded text-gray-900 dark:text-gray-300 bg-white dark:bg-dark-blue-2 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                            >
                                {{ $page.props.auth.user.name }}

                                <svg
                                    class="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </template>

                    <template #content>
                        <DropdownLink :href="route('profile.edit')">
                            Mis datos
                        </DropdownLink>
                        <DropdownLink
                            :href="route('logout')"
                            method="post"
                            as="button"
                        >
                            Salir
                        </DropdownLink>
                    </template>
                </Dropdown>
            </div>
        </div>

        <div v-else>
            <div class="flex gap-3 md:justify-end justify-center pt-4 pr-4 md:pr-8 xl:pr-0">
                <Link
                    :href="route('login')"
                    class="text-sm font-light text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Login
                </Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="text-sm  ms-4 font-light text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Regístrate ahora
                </Link>
            </div>
        </div>
    </nav>
</template>

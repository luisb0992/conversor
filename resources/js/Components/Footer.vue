<script setup>
const year = new Date().getFullYear();
</script>
<template>
    <footer class="text-gray-900 dark:text-gray-200 bg-dark-blue-1 pt-20">
        <div class="bg-dark-blue-1 text-gray-900 dark:text-gray-400">
            <div
                class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"
            >
                <a
                    class="flex title-font font-medium items-center md:justify-start justify-center"
                >
                    <span class="ml-3 text-xl">Hecho con <span class="text-red-600">❤</span></span>
                </a>
                <p class="text-sm sm:ml-6 sm:mt-0 mt-4">
                    © {{ year }} Conversor de monedas —
                    <a
                        href="https://twitter.com/luisandev"
                        rel="noopener noreferrer"
                        class="ml-1"
                        target="_blank"
                    >
                        @luisandev
                    </a>
                </p>
                <span
                    class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
                >
                    <a
                        class="ml-3"
                        href="https://twitter.com/luisandev"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                            ></path>
                        </svg>
                    </a>
                    <a
                        class="ml-3"
                        href="https://instagram.com/luisandev"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            ></rect>
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                            ></path>
                        </svg>
                    </a>
                    <a
                        class="ml-3"
                        href="https://www.linkedin.com/in/luisandev/"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
    </footer>
</template>

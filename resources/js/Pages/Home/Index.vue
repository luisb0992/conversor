<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { canLogin, canRegister } from "./module/index.js";

import { toRefs } from "vue";
import InputNumber from "primevue/inputnumber";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Flags from "@/Components/Flags.vue";
// import { getAllExchangeRates } from "./../../Services/Api/config.js";

import { useExchange } from "./composables/useIndex.js";

const {
    amount,
    calculateRate,
    popularCountries,
    rate,
    searchCountry,
    selectionOne,
    selectionTwo,
} = toRefs(useExchange());
</script>

<template>
    <Head title="Inicio" />

    <section
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gradient-to-t dark:from-dark-blue-1 dark:to-dark-blue-2 selection:bg-blue-400 selection:text-white"
    >
        <nav v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Dashboard
            </Link>

            <template v-else>
                <div class="flex gap-3 md:justify-end justify-center">
                    <Link
                        :href="route('login')"
                        class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>

                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Regístrate ahora
                    </Link>
                </div>
            </template>
        </nav>

        <article class="max-w-7xl mx-auto p-6">
            <header class="w-full">
                <h1
                    class="text-2xl md:text-6xl font-semibold text-gray-900 dark:text-gray-200 text-center"
                >
                    ¡Convierta de una moneda a otra en cuestión de
                    <span class="text-sky-700 dark:text-[#4f46e5]"
                        >segundos!</span
                    >
                </h1>
                <p class="text-gray-200 text-justify py-4">
                    {{ currencies }}
                </p>
            </header>

            <section class="flex gap-5 justify-between items-center">
                <div class="flex flex-col gap-2">
                    <label
                        for="amount"
                        class="dark:text-gray-200 text-gray-900 text-lg"
                    >
                        Importe
                    </label>
                    <InputNumber
                        v-model="amount"
                        inputId="amount"
                        class="w-full text-center md:text-2xl font-medium text-dark-blue-1 bg-gray-200"
                        :min="0"
                        :max="1000000000"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label
                        for="from"
                        class="dark:text-gray-200 text-gray-900 text-lg"
                    >
                        De
                    </label>
                    <AutoComplete
                        v-model="selectionOne"
                        dropdown
                        :suggestions="popularCountries"
                        @complete="searchCountry"
                        placeholder="Seleccione una moneda"
                        optionLabel="name"
                    >
                        <template #option="slotProps">
                            <div class="flex justify-start gap-3">
                                <div class="w-7">
                                    <Flags :code="slotProps.option.code" />
                                </div>
                                <div>
                                    {{ slotProps.option.name }}
                                </div>
                            </div>
                        </template>
                    </AutoComplete>
                </div>
                <div class="flex flex-col gap-2">
                    <label
                        for="to"
                        class="dark:text-gray-200 text-gray-900 text-lg"
                    >
                        A
                    </label>
                    <AutoComplete
                        v-model="selectionTwo"
                        dropdown
                        :suggestions="popularCountries"
                        @complete="searchCountry"
                        placeholder="Seleccione una moneda"
                        optionLabel="name"
                    >
                        <template #option="slotProps">
                            <div class="flex justify-start gap-3">
                                <div class="w-7">
                                    <Flags :code="slotProps.option.code" />
                                </div>
                                <div>
                                    {{ slotProps.option.name }}
                                </div>
                            </div>
                        </template>
                    </AutoComplete>
                </div>
                <div class="mt-10">
                    <Button
                        label="Convertir"
                        severity="Primary"
                        @click.stop="calculateRate"
                    />
                </div>
            </section>
        </article>
    </section>
</template>

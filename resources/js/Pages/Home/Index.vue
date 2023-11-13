<script setup>
import { Head, Link } from "@inertiajs/vue3";
// import { canLogin, canRegister } from "./module/index.js";
import { useExchange } from "./composables/useIndex.js";
import InputNumber from "primevue/inputnumber";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Flags from "@/Components/Flags.vue";
import Loading from "@/Components/Loading.vue";
import Nav from "@/Components/Nav.vue";

const {
    amount,
    calculateRate,
    isTypeDataValidate,
    loading,
    loaderSelectOne,
    loaderSelectTwo,
    noRateVisible,
    popularCountries,
    rate,
    rateNow,
    ratesOne,
    ratesTwo,
    searchCountry,
    selectionOne,
    selectionTwo,
} = useExchange();
</script>

<template>
    <Head title="Inicio" />

    <Nav />

    <main
        class="sm:flex sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gradient-to-t dark:from-dark-blue-1 dark:to-dark-blue-2 selection:bg-blue-400 selection:text-white py-10"
    >
        <section class="max-w-7xl mx-auto p-10 shadow-2xl">
            <header class="w-full">
                <h1
                    class="text-2xl md:text-6xl font-semibold text-gray-900 dark:text-gray-200 text-center"
                >
                    ¡Convierta de una moneda a otra en cuestión de
                    <span class="text-sky-700 dark:text-[#4f46e5]"
                        >segundos!</span
                    >
                </h1>
            </header>

            <!-- formulario de calculo -->
            <section
                class="flex flex-col md:flex-row gap-5 justify-between items-center mt-10"
            >
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
                        class="w-72 h-[50px] rounded-md lg:w-full text-center md:text-2xl font-medium text-dark-blue-1 bg-gray-200"
                        :minFractionDigits="2"
                        :maxFractionDigits="3"
                        @input="noRateVisible"
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
                        @click="calculateRate"
                        :disabled="
                            loading || loaderSelectOne || loaderSelectTwo
                        "
                        :class="{
                            'opacity-25':
                                loading || loaderSelectOne || loaderSelectTwo,
                        }"
                    />
                </div>
            </section>

            <!-- loading -->
            <section class="flex flex-col justify-center items-center mt-6">
                <Loading :show="loading" />
            </section>

            <!-- resultado -->
            <section
                v-if="isTypeDataValidate && !loading"
                class="mt-6 animate-fade-in-down"
            >
                <article class="flex flex-col gap-5 justify-center items-start">
                    <div>
                        <p
                            class="dark:text-gray-200 text-gray-900 text-lg font-normal"
                        >
                            {{ amount }} {{ selectionOne.code }} -
                            {{ selectionOne.name }}
                        </p>
                    </div>
                    <div>
                        <p
                            class="dark:text-sky-400 text-sky-900 text-3xl font-semibold"
                        >
                            {{ rate }} {{ selectionTwo.code }} -
                            {{ selectionTwo.name }}
                        </p>
                    </div>
                    <div>
                        <p
                            class="dark:text-gray-200 text-sky-900 text-sm font-light"
                        >
                            Tasa de cambio actual:
                            <span class="dark:text-sky-400 text-sky-900">
                                {{ rateNow }} {{ selectionTwo.code }}
                            </span>
                        </p>
                    </div>
                </article>
            </section>

            <!-- columnas de calculo aleatorio -->
            <section
                class="grid md:grid-cols-2 grid-cols-1 mt-20 md:gap-10"
                v-if="selectionOne && selectionTwo"
            >
                <div class="rounded-md shadow-md">
                    <article>
                        <div class="p-5 bg-dark-purple-1">
                            <h3
                                class="text-xl font-bold leading-6 dark:text-gray-300 text-gray-900 text-center"
                            >
                                Convertir {{ selectionOne.name }} a
                                {{ selectionTwo.name }}
                            </h3>
                            <div class="flex justify-evenly items-center pt-3">
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionOne.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-900 text-3xl font-semibold"
                                    >
                                        {{ selectionOne.code }}
                                    </span>
                                </p>
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionTwo.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-900 text-3xl font-semibold"
                                    >
                                        {{ selectionTwo.code }}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="h-[640px] bg-gray-100 dark:bg-gray-800">
                            <div
                                class="flex justify-center items-center h-full"
                                v-if="loaderSelectOne"
                            >
                                <Loading :show="loaderSelectOne" />
                            </div>
                            <div
                                v-for="(r, index) in ratesOne"
                                :key="index"
                                class="flex justify-evenly items-center p-5 animate-swing-in-top-fwd"
                                v-else
                            >
                                <p
                                    class="dark:text-gray-300 text-gray-900 text-center"
                                >
                                    {{ r.amount }} {{ selectionOne.code }}
                                </p>
                                <p
                                    class="dark:text-gray-300 text-gray-900 text-center"
                                >
                                    {{ r.total }} {{ selectionTwo.code }}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="rounded-md shadow-md">
                    <article>
                        <div class="p-5 bg-dark-purple-1">
                            <h3
                                class="text-xl font-bold leading-6 dark:text-gray-300 text-gray-900 text-center"
                            >
                                Convertir {{ selectionTwo.name }} a
                                {{ selectionOne.name }}
                            </h3>
                            <div class="flex justify-evenly items-center pt-3">
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionTwo.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-900 text-3xl font-semibold"
                                    >
                                        {{ selectionTwo.code }}
                                    </span>
                                </p>
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionOne.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-900 text-3xl font-semibold"
                                    >
                                        {{ selectionOne.code }}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="h-[640px] bg-gray-100 dark:bg-gray-800">
                            <div
                                class="flex justify-center items-center h-full"
                                v-if="loaderSelectTwo"
                            >
                                <Loading :show="loaderSelectTwo" />
                            </div>
                            <div
                                v-for="(r, index) in ratesTwo"
                                :key="index"
                                class="flex justify-evenly items-center p-5 animate-swing-in-top-fwd"
                                v-else
                            >
                                <p
                                    class="dark:text-gray-300 text-gray-900 text-center"
                                >
                                    {{ r.amount }} {{ selectionTwo.code }}
                                </p>
                                <p
                                    class="dark:text-gray-300 text-gray-900 text-center"
                                >
                                    {{ r.total }} {{ selectionOne.code }}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    </main>
</template>

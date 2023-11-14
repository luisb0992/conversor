<script setup>
import { Head } from "@inertiajs/vue3";
import { useExchange } from "./composables/useIndex.js";
import InputNumber from "primevue/inputnumber";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Flags from "@/Components/Flags.vue";
import Loading from "@/Components/Loading.vue";
import Nav from "@/Components/Nav.vue";
import Transform from "@/Components/icons/Transform.vue";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import AppLogo from "@/Components/AppLogo.vue";

const {
    amount,
    allLoaders,
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

    <main
        class="flex flex-col bg-gray-100 dark:bg-gradient-to-t dark:from-dark-blue-1 dark:to-dark-blue-2 selection:bg-blue-400 selection:text-white"
    >
        <Nav />
        <section class="w-full md:max-w-7xl mx-auto p-4 md:p-10 shadow-2xl mt-5 mb-16">
            <AppLogo />
            <Header />

            <!-- formulario de calculo -->
            <section
                class="flex flex-col md:flex-row gap-5 justify-between items-center mt-10"
            >
                <div class="flex flex-col gap-2 w-full">
                    <label
                        for="amount"
                        class="dark:text-gray-200 text-gray-900 text-lg"
                    >
                        Importe
                    </label>
                    <InputNumber
                        v-model="amount"
                        inputId="amount"
                        class="h-[50px] rounded-md w-full text-center md:text-2xl font-medium text-dark-blue-1 bg-gray-200"
                        :minFractionDigits="2"
                        :maxFractionDigits="3"
                        @input="noRateVisible"
                    />
                </div>
                <div class="flex flex-col gap-2 w-full">
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
                <div class="flex flex-col gap-2 w-full">
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
                        :disabled="allLoaders"
                        :class="{ 'opacity-25': allLoaders }"
                        class="flex gap-2"
                    >
                        <Transform />
                        Convertir
                    </Button>
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
                <article
                    class="flex flex-col gap-5 justify-center items-center md:items-start"
                >
                    <div>
                        <p
                            class="dark:text-gray-200 text-gray-900 text-lg font-normal text-center md:text-left"
                        >
                            {{ amount }} {{ selectionOne.code }} -
                            {{ selectionOne.name }}
                        </p>
                    </div>
                    <div>
                        <p
                            class="dark:text-sky-400 text-sky-900 text-3xl font-semibold text-center md:text-left"
                        >
                            {{ rate }} {{ selectionTwo.code }} -
                            {{ selectionTwo.name }}
                        </p>
                    </div>
                    <div>
                        <p
                            class="dark:text-gray-200 text-sky-900 text-sm font-light text-center md:text-left"
                        >
                            Tasa de cambio actual:
                            <span class="dark:text-sky-400 text-sky-900">
                                {{ rateNow }} {{ selectionTwo.code }}
                            </span>
                        </p>
                    </div>
                </article>
            </section>

            <div
                class="border-t border-gray-500 dark:border-sky-400 w-full mt-10 pb-12"
            ></div>

            <!-- columnas de calculo aleatorio -->
            <section
                class="grid md:grid-cols-2 grid-cols-1 gap-10"
                v-if="selectionOne && selectionTwo"
            >
                <div class="rounded-xl shadow-md">
                    <article>
                        <div class="p-5 bg-dark-purple-1">
                            <h3
                                class="text-xl font-bold leading-6 text-gray-200 text-center"
                            >
                                Convertir {{ selectionOne.name }} a
                                {{ selectionTwo.name }}
                            </h3>
                            <div class="flex justify-evenly items-center pt-3">
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionOne.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-400 text-3xl font-semibold"
                                    >
                                        {{ selectionOne.code }}
                                    </span>
                                </p>
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionTwo.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-400 text-3xl font-semibold"
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
                <div class="rounded-xl shadow-md">
                    <article>
                        <div class="p-5 bg-dark-purple-1">
                            <h3
                                class="text-xl font-bold leading-6 text-gray-300 text-center"
                            >
                                Convertir {{ selectionTwo.name }} a
                                {{ selectionOne.name }}
                            </h3>
                            <div class="flex justify-evenly items-center pt-3">
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionTwo.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-400 text-3xl font-semibold"
                                    >
                                        {{ selectionTwo.code }}
                                    </span>
                                </p>
                                <p class="flex flex-col gap-3">
                                    <Flags :code="selectionOne.code" />
                                    <span
                                        class="dark:text-sky-400 text-sky-400 text-3xl font-semibold"
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

    <Footer />
</template>

<script setup>
import InputNumber from "primevue/inputnumber";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Flags from "@/Components/Flags.vue";

import { toRefs } from "vue";
import { useExchange } from "./../Home/composables/useIndex.js";

const {
    amount,
    calculateRate,
    noRateVisible,
    popularCountries,
    searchCountry,
    selectionOne,
    selectionTwo,
} = useExchange();
defineEm

</script>

<template>
    <div class="flex flex-col gap-2">
        <label for="amount" class="dark:text-gray-200 text-gray-900 text-lg">
            Importe
        </label>
        <InputNumber
            v-model="amount"
            inputId="amount"
            class="w-full text-center md:text-2xl font-medium text-dark-blue-1 bg-gray-200"
            :minFractionDigits="2"
            :maxFractionDigits="3"
            @input="noRateVisible"
        />
    </div>
    <div class="flex flex-col gap-2">
        <label for="from" class="dark:text-gray-200 text-gray-900 text-lg">
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
        <label for="to" class="dark:text-gray-200 text-gray-900 text-lg">
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
        />
    </div>
</template>

/**
 * Numero de intento por parte del usuario invitado
 *
 * máximo: maxAttempts
 */

import { maxAttempts } from "@/Util/const";
import { isUserLogged } from "@/Util/auth";
import { computed, ref, toRefs } from "vue";

export const useAttemp = () => {
    const numberAttempts = ref(0);

    /**
     * Cargar o crear los intentos permitidos para conversion del usuario
     */
    const loadNumberAttempts = () => {
        // verificar si existe un numero de intentos
        // en el localstorage
        const attempts = localStorage.getItem("numberAttempts");

        if (attempts) {
            numberAttempts.value = parseInt(attempts);
            return;
        }

        // caso contrario se crea uno
        localStorage.setItem("numberAttempts", 0);
    };

    /**
     * Incrementar el numero de intentos
     */
    const incrementNumberAttempts = () => {
        numberAttempts.value++;
        localStorage.setItem("numberAttempts", numberAttempts.value);
    };

    /**
     * Decrementa el numero de intentos
     */
    const decrementNumberAttempts = () => {
        numberAttempts.value--;
        localStorage.setItem("numberAttempts", numberAttempts.value);
    };

    /**
     * Resetear el numero de intentos
     */
    const resetNumberAttempts = () => {
        numberAttempts.value = 0;
        localStorage.setItem("numberAttempts", 0);
    };

    /**
     * Verificar si el usuario puede seguir intentando
     * o a sobrepasado el numero de intentos
     */
    const canContinueConverting = computed(() => {
        return numberAttempts.value < maxAttempts.value;
    });

    /**
     * Verifica si el usuario esta logueado y resetea el numero de intentos
     */
    const checkUser = () => {
        if (isUserLogged.value) {
            resetNumberAttempts();
        }
    };

    return {
        ...toRefs(numberAttempts),
        loadNumberAttempts,
        incrementNumberAttempts,
        decrementNumberAttempts,
        resetNumberAttempts,
        canContinueConverting,
        checkUser,
    };
};

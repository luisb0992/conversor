/**
 * Gestion de autenticación del usuario
 */

import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";

/**
 * Verificar si el usuario esta logueado
 */
export const isUserLogged = computed(() => {
    const { props } = usePage();
    return props.auth.user;
});

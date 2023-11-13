/**
 * Gestionar las props recibidas para el componente index
 * @returns {boolean}
 */

import { usePage } from "@inertiajs/vue3";

export const canLogin = () => {
    const { props } = usePage();
    return props.canLogin;
};

export const canRegister = () => {
    const { props } = usePage();
    return props.canRegister;
}

import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            colors: {
                "dark-blue-1": "#0f172a",
                "dark-blue-2": "#1c2850",
            },

            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "slide-in-blurred-top": {
                    "0%": {
                        "-webkit-transform":
                            "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
                        transform:
                            "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
                        "-webkit-transform-origin": "50% 0%",
                        "transform-origin": "50% 0%",
                        "-webkit-filter": "blur(40px)",
                        filter: "blur(40px)",
                        opacity: "0",
                    },
                    "100%": {
                        "-webkit-transform":
                            "translateY(0) scaleY(1) scaleX(1)",
                        transform: "translateY(0) scaleY(1) scaleX(1)",
                        "-webkit-transform-origin": "50% 50%",
                        "transform-origin": "50% 50%",
                        "-webkit-filter": "blur(0)",
                        filter: "blur(0)",
                        opacity: "1",
                    },
                },
                "swing-in-top-fwd": {
                    "0%": {
                        "-webkit-transform": "rotateX(-100deg)",
                        transform: "rotateX(-100deg)",
                        "-webkit-transform-origin": "top",
                        "transform-origin": "top",
                        opacity: 0,
                    },

                    "100%": {
                        "-webkit-transform": "rotateX(0deg)",
                        transform: "rotateX(0deg)",
                        "-webkit-transform-origin": "top",
                        "transform-origin": "top",
                        opacity: 1,
                    },
                },

                "slide-right": {
                    "0%": {
                        "-webkit-transform": "translateX(0)",
                        transform: "translateX(0)",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(100px)",
                        transform: "translateX(100px)",
                    },
                },

                "rotate-scale-up": {
                    "0%": {
                        "-webkit-transform": "scale(1) rotate3d(1, 1, 0, 0deg)",
                        transform: "scale(1) rotate3d(1, 1, 0, 0deg)",
                    },
                    "50%": {
                        "-webkit-transform":
                            "scale(2) rotate3d(1, 1, 0, -180deg)",
                        transform: "scale(2) rotate3d(1, 1, 0, -180deg)",
                    },
                    "100%": {
                        "-webkit-transform":
                            "scale(1) rotate3d(1, 1, 0, -360deg)",
                        transform: "scale(1) rotate3d(1, 1, 0, -360deg)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.6s ease-in",
                "fade-in-down-large": "fade-in-down 1.5s ease-in",
                "slide-in-blurred-top":
                    "slide-in-blurred-top 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
                "swing-in-top-fwd":
                    "swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
                "slide-right":
                    "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "rotate-scale-up": "rotate-scale-up 0.7s linear both",
            },
        },
    },

    plugins: [forms],
};

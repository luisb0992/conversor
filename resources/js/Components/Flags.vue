<script setup>
const props = defineProps({
    code: {
        type: String,
        required: true,
        description: "The ISO 3166-1 alpha-2 country code.",
    },
});
</script>

<template>
    <!-- USD -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'USD'"
    >
        <path fill="#fff" d="M0 0h28v20H0V0z" />
        <path
            fill="#D02F44"
            fill-rule="evenodd"
            d="M28 0H12v1.333h16V0zm0 2.667H12V4h16V2.667zM12 5.333h16v1.334H12V5.333zM28 8H12v1.333h16V8zM0 10.667h28V12H0v-1.333zm28 2.666H0v1.334h28v-1.334zM0 16h28v1.333H0V16zm28 2.667H0V20h28v-1.333z"
            clip-rule="evenodd"
        />
        <path
            fill="#46467F"
            fill-rule="evenodd"
            d="M12 0H0v9.333h12V0zM2 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zm2.667 0a.667.667 0 100-1.334.667.667 0 000 1.334zm2.666 0a.667.667 0 100-1.334.667.667 0 000 1.334zm2.667 0a.667.667 0 100-1.333.667.667 0 000 1.333zM3.333 4a.667.667 0 10.052-1.333A.667.667 0 003.333 4zM6 4a.667.667 0 10.052-1.333A.667.667 0 006 4zm2.667 0a.667.667 0 10.052-1.333A.667.667 0 008.667 4zM10 5.333A.667.667 0 1010.052 4 .667.667 0 0010 5.333zm-2.667 0A.667.667 0 107.385 4a.667.667 0 00-.052 1.333zm-2.666 0A.667.667 0 104.719 4a.667.667 0 00-.052 1.333zM2 5.333A.667.667 0 102.052 4 .667.667 0 002 5.333zm1.333 1.334a.667.667 0 100-1.334.667.667 0 000 1.334zm2.667 0a.667.667 0 100-1.334.667.667 0 000 1.334zm2.667 0a.667.667 0 100-1.334.667.667 0 000 1.334zM10 8a.667.667 0 10.052-1.333A.667.667 0 0010 8zM7.333 8a.667.667 0 10.052-1.333A.667.667 0 007.333 8zM4.667 8a.667.667 0 10.052-1.333A.667.667 0 004.667 8zM2 8a.667.667 0 10.052-1.333A.667.667 0 002 8z"
            clip-rule="evenodd"
        />
    </svg>

    <!-- EUR -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'EUR'"
    >
        <path fill="#043CAE" d="M0 0h28v20H0V0z" />
        <path
            fill="#FFD429"
            d="M13.057 4.276L14 4l.943.276-.276-.943.276-.943-.943.277-.943-.276.276.942-.276.943zm0 13.334l.943-.277.943.277-.276-.943.276-.943L14 16l-.943-.276.276.943-.276.942v.001zm7.61-6.943l-.943.276L20 10l-.276-.943.943.276.942-.276-.276.943.277.943-.943-.276zm-14.277.276l.943-.276.943.276L8 10l.276-.943-.943.276-.942-.276.276.943-.276.943H6.39zm13.383-3.61l-.942.276.276-.942-.276-.943.942.276.943-.276-.276.943.276.942-.943-.276zM7.284 14.276L8.227 14l.942.276-.276-.943.276-.943-.942.277-.943-.277.276.943-.276.943zm10.049-9.383l-.942.276.276-.943-.277-.942.943.276.943-.276-.276.942.276.943-.943-.276zM9.724 16.716l.943-.276.943.276-.277-.943.277-.942-.943.276-.943-.276.276.943-.276.942zM19.773 14l-.942.276.276-.943-.276-.943.942.277.943-.277-.276.943.276.943-.943-.276zM7.284 7.61l.943-.277.942.276-.276-.942.276-.943L8.227 6l-.943-.276.276.943-.276.942v.001zm10.049 8.83l-.942.276.276-.943-.277-.942.943.276.943-.276-.276.943.276.942-.943-.276zM9.724 5.17l.943-.277.943.276-.277-.943.277-.942-.943.276-.943-.276.276.942-.276.943v.001z"
        />
    </svg>

    <!-- GBP -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'GBP'"
    >
        <g clip-path="url(#clip0)">
            <path fill="#fff" d="M0 0h28v20H0V0z" />
            <path fill="#0A17A7" d="M0 0h28v20H0V0z" />
            <path
                fill="#fff"
                fill-rule="evenodd"
                d="M-1.282-1.916l11.949 8.06v-7.477h6.666v7.476l11.95-8.06 1.49 2.211-9.447 6.373H28v6.666h-6.674l9.448 6.373-1.492 2.21-11.949-8.06v7.477h-6.666v-7.476l-11.95 8.06-1.49-2.211 9.447-6.373H0V6.667h6.674L-2.774.294l1.492-2.21z"
                clip-rule="evenodd"
            />
            <path
                stroke="#DB1F35"
                stroke-linecap="round"
                stroke-width=".667"
                d="M9.29 13.605L-3.837 22.31M18.668 6.332L31.333-2 18.668 6.332zm1.345 7.365l11.354 7.653-11.354-7.653zM8.006 6.31L-3.837-1.67 8.006 6.31z"
            />
            <path
                fill="#E6273E"
                fill-rule="evenodd"
                d="M0 12h12v8h4v-8h12V8H16V0h-4v8H0v4z"
                clip-rule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <path fill="#fff" d="M0 0h28v20H0z" />
            </clipPath>
        </defs>
    </svg>

    <!-- JPY -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'JPY'"
    >
        <path fill="#fff" d="M0 0h28v20H0V0z" />
        <path
            fill="url(#paint0_linear)"
            fill-rule="evenodd"
            d="M14 16a6 6 0 100-12 6 6 0 000 12z"
            clip-rule="evenodd"
        />
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="8"
                x2="8"
                y1="4"
                y2="16"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#D81441" />
                <stop offset="1" stop-color="#BB0831" />
            </linearGradient>
        </defs>
    </svg>

    <!-- CAD -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'CAD'"
    >
        <path fill="#fff" d="M0 0h28v20H0V0z" />
        <path fill="#FF3131" d="M20 0h8v20h-8V0z" />
        <path
            fill="#FF3131"
            fill-rule="evenodd"
            d="M0 20h8V0H0v20zM16.112 9.222a.333.333 0 01-.563-.302L16 6.667l-1.333.666-.667-2-.667 2L12 6.667l.45 2.253a.333.333 0 01-.562.302l-.319-.32a.333.333 0 00-.471 0l-.431.431-1.334-.666L10 10l-.43.431a.333.333 0 000 .471l1.763 1.765h2l.334 2h.666l.334-2h2l1.764-1.765a.332.332 0 000-.471L18 10l.667-1.333-1.334.666-.43-.43a.333.333 0 00-.472 0l-.32.319h.001z"
            clip-rule="evenodd"
        />
    </svg>

    <!-- AUD -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'AUD'"
    >
        <g clip-path="url(#clip0)">
            <path fill="#fff" d="M0 0h28v20H0V0z" />
            <path fill="#0A17A7" d="M0 0h28v20H0V0z" />
            <path
                fill="#FF2E3B"
                stroke="#fff"
                stroke-width=".667"
                d="M0-.333h-.901l.684.586 4.55 3.9v1.009L-.194 8.395l-.14.1v1.44l.51-.319L5.43 6.333h1.13l4.523 3.23a.554.554 0 00.682-.87L7.667 5.18V4.172l4.387-3.134a.666.666 0 00.28-.543V-.6l-.51.318L6.57 3H5.44L.86-.271.772-.333H0z"
            />
            <path
                fill="url(#paint0_linear)"
                fill-rule="evenodd"
                d="M0 3.333V6h4.667v3.333c0 .369.298.667.666.667h1.334a.667.667 0 00.666-.667V6H12a.667.667 0 00.667-.667V4A.667.667 0 0012 3.333H7.333V0H4.667v3.333H0z"
                clip-rule="evenodd"
            />
            <path
                fill="url(#paint1_linear)"
                fill-rule="evenodd"
                d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0V4z"
                clip-rule="evenodd"
            />
            <path
                fill="#fff"
                fill-rule="evenodd"
                d="M6 16.333l-1.176.618.225-1.309-.951-.927 1.314-.19L6 13.332l.588 1.191 1.314.191-.95.927.224 1.31L6 16.332v.001zm14 1l-.943.277.276-.943-.276-.943L20 16l.943-.276-.276.943.276.942-.943-.276zm0-12.666l-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943L20 4.667zm4 4l-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943L24 8.667zM16 10l-.943.276.276-.943-.276-.942.943.276.943-.276-.276.942.276.943L16 10zm6 1.667l-.471.138.138-.472-.138-.471L22 11l.471-.138-.138.471.138.472-.471-.138z"
                clip-rule="evenodd"
            />
        </g>
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="0"
                x2="0"
                y1="0"
                y2="10"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#F0F0F0" />
            </linearGradient>
            <linearGradient
                id="paint1_linear"
                x1="0"
                x2="0"
                y1="0"
                y2="9.333"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FF2E3B" />
                <stop offset="1" stop-color="#FC0D1B" />
            </linearGradient>
            <clipPath id="clip0">
                <path fill="#fff" d="M0 0h28v20H0z" />
            </clipPath>
        </defs>
    </svg>

    <!-- CHF -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'CHF'"
    >
        <path fill="#fff" d="M0 0h28v20H0V0z" />
        <path fill="#EA3B2E" d="M0 0h28v20H0V0z" />
        <path
            fill="#fff"
            fill-rule="evenodd"
            d="M12 12H8.333A.334.334 0 018 11.667V8.333C8 8.15 8.15 8 8.333 8H12V4.333c0-.184.15-.333.333-.333h3.334c.184 0 .333.15.333.333V8h3.667c.184 0 .333.15.333.333v3.334c0 .184-.15.333-.333.333H16v3.667c0 .184-.15.333-.333.333h-3.334a.333.333 0 01-.333-.333V12z"
            clip-rule="evenodd"
        />
    </svg>

    <!-- CNY -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'CNY'"
    >
        <path fill="#fff" d="M0 0h28v20H0V0z" />
        <path fill="#F1361D" d="M0 0h28v20H0V0z" />
        <path
            fill="#FFDC42"
            fill-rule="evenodd"
            d="M10.073 3.1l.968.166.726.661.165-.968.662-.726-.968-.166-.727-.661-.165.968-.661.727V3.1zm2.594 3.388l.839-.51.982.022-.51-.84.022-.98-.84.51-.981-.022.51.839-.022.982v-.001zm-1.139 5.483l-.82.54-.012-.983-.54-.82.982-.012.821-.54.012.982.54.821-.983.012zm.713-2.54l.977-.108.88.436-.108-.977.435-.88-.976.108-.88-.436.108.977-.436.88zM6.667 8.227L4.316 9.903l.867-2.754-2.32-1.718 2.887-.026.917-2.738.917 2.738 2.887.026-2.32 1.718.867 2.754-2.351-1.676z"
            clip-rule="evenodd"
        />
    </svg>

    <!-- ZAR -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 28 20"
        v-if="code === 'ZAR'"
    >
        <g clip-path="url(#clip0)">
            <path fill="#06A86E" d="M0 0h28v20H0V0z" />
            <path
                fill="#FFBF2E"
                fill-rule="evenodd"
                d="M0 2.667L9.333 10 0 17.333V2.667z"
                clip-rule="evenodd"
            />
            <path
                fill="#262626"
                fill-rule="evenodd"
                d="M-1.333 3l9 7-9 7V3z"
                clip-rule="evenodd"
            />
            <path
                fill="#fff"
                fill-rule="evenodd"
                d="M12 8L2.667 0H28v8H12z"
                clip-rule="evenodd"
            />
            <path
                fill="#F44E46"
                fill-rule="evenodd"
                d="M12.333 6.667L4.333 0H28v6.667H12.333z"
                clip-rule="evenodd"
            />
            <path
                fill="#fff"
                fill-rule="evenodd"
                d="M2.667 20H28v-8H12l-9.333 8z"
                clip-rule="evenodd"
            />
            <path
                fill="#072CB4"
                fill-rule="evenodd"
                d="M4.333 20H28v-6.667H12.333l-8 6.667z"
                clip-rule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <path fill="#fff" d="M0 0h28v20H0z" />
            </clipPath>
        </defs>
    </svg>
</template>

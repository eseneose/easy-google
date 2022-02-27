module.exports = {

    mode: 'jit',
    purge: [
        './pages/**/*.{js,jsx,ts,tsx,vue}',
        './components/**/*.{js,jsx,ts,tsx,vue}',
    ],

    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
module.exports = {
	content: [
		'./pages/*.{js,ts,jsx,tsx}',
		'./components/header/*.{js,ts,jsx,tsx}',
		'./pages/cart/payment/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
            colors: {
                'buyk-green': {
					light: '#128969',
					DEFAULT: '#064635',
				},
				'buyk-red': {
					DEFAULT: '#F04749 ',
				},
				'buyk-brown': {
					DEFAULT: '#342B2B',
				},
            },
        },
	},
	plugins: [require('@themesberg/flowbite/plugin')],
};

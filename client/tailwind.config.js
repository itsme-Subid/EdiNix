/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"login-image":
					"url(https://aliabdaal.com/wp-content/uploads/2023/01/DATABASE-01.png)",
				"signup-image":
					"url(https://cdnp3.stackassets.com/c88d10bd2ea99376acfdd1d9212fb5b91882a59f/store/opt/720/541/8ac7173b8dbacac921d1bf3c9e999e7f8558ee2b80968ac525502533238a/product_332340_product_shots1.jpg)",
			}),
		},
	},
	plugins: [],
};

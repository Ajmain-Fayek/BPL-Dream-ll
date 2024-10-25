/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                sora: "'Sora', sans-serif",
            },
            colors: {
                "btn-primary": "#E7FE29",
                "text-primary-black": "#131313",
                "text-secondary-black": "rgba(19, 19, 19, 0.7) ",
                "text-primary-white": "rgb(255, 255, 255)",
                "text-secondary-white": "rgba(255, 255, 255, 0.7)",
                "title-bg": "rgba(19, 19, 19, 0.05)",
                "footer-bg": "rgb(6, 9, 26)",
            },
            backgroundImage: {
                'hero-pattern': "url(./src/assets/bg-shadow.png)"
            }
        },
    },
    plugins: [require("daisyui")],
};

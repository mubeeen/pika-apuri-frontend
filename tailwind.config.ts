import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        error: "#dc3545",
        success: "#198754",
      },
      borderRadius: {
        sm: "8px",
        lg: "20px",
      },
      boxShadow: {
        card: "0px 4px 30px 0px rgba(159, 159, 159, 0.1)",
        cardDark: "0px 4px 30px 0px rgba(159, 159, 159, 0.3)",
        focus: "0 0 0 2px #D9D9D97c",
      },
    },
  },
  plugins: [],
} satisfies Config;

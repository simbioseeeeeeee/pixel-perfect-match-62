import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', '-apple-system', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Simbiose Custom Colors
        neon: {
          DEFAULT: "hsl(var(--neon))",
          dim: "hsl(var(--neon-dim))",
        },
        dark: {
          1: "hsl(var(--dark-1))",
          2: "hsl(var(--dark-2))",
          3: "hsl(var(--dark-3))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
          light: "hsl(var(--gray-light))",
        },
        purple: "hsl(var(--purple))",
        whatsapp: {
          DEFAULT: "hsl(var(--whatsapp))",
          dark: "hsl(var(--whatsapp-dark))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        "neon": "0 0 20px hsl(152 100% 50% / 0.3)",
        "neon-lg": "0 0 40px hsl(152 100% 50% / 0.5)",
        "whatsapp": "0 15px 40px hsl(142 70% 49% / 0.4)",
        "whatsapp-lg": "0 6px 24px hsl(142 70% 49% / 0.5)",
        "card": "0 40px 80px hsl(0 0% 0% / 0.5)",
        "float": "0 20px 40px hsl(0 0% 0% / 0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

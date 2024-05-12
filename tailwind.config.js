/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        light: {
          // Dark mode colors
          "fg-white": "#ffffff",
          "text-quarterary": "#667085",
          "text-primary": "#101828",
          "bg-secondary-solid": "#475467",
          "border-tertiary": "#F2F4F7",
          "text-tertiary": "#475467",
          "fg-error-primary": "#D92D20",
          "text-error-primary": "#D92D20",
          "bg-quarterary": "#EAECF0",
          "fg-quarterary": "#667085",
          "bg-secondary-alt": "#F9FAFB",
          "border-primary": "#D0D5DD",
          "utility-blue": "#1570EF",
          "fg-error-secondary": "#F04438",
          "bg-primary": "#FFFFFF",
          "fg-success-secondary": "#17B26A",
          "fg-brand-primary": "#444CE7",
          "text-brand-tertiary": "#444CE7",
          "fg-quinary": "#98A2B3",
          "fg-warning-secondary": "#F79009",
          "bg-success-secondary": "#DCFAE6",
          "bg-secondary-hover": "#F2F4F7",
        },
        dark: {
          // Dark mode colors
          "fg-white": "#ffffff",
          "text-quarterary": "#94969C",
          "text-primary": "#F5F5F6",
          "bg-secondary-solid": "#61646C",
          "border-tertiary": "#1F242F",
          "text-tertiary": "#94969C",
          "fg-error-primary": "#F04438",
          "text-error-primary": "#F97066",
          "bg-quarterary": "#333741",
          "fg-quarterary": "#94969C",
          "bg-secondary-alt": "#0C111D",
          "border-primary": "#333741",
          "utility-blue": "#53B1FD",
          "fg-error-secondary": "#F97066",
          "bg-primary": "#0C111D",
          "fg-success-secondary": "#47CD89",
          "fg-brand-primary": "#6172F3",
          "text-brand-tertiary": "#8098F9",
          "fg-quinary": "#85888E",
          "fg-warning-secondary": "#FDB022",
          "bg-success-secondary": "#079455",
          "bg-secondary-hover": "#1F242F",
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

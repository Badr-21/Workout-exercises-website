/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            Platinum: "#E5E4E2",
            Almond: "#E8DDD1",
            SafetyOrange: "#ff851b",
            Jet: "#343434",
            EerieBlack: "#1A1A1A",
         },
      },
   },
   plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
        },
        aquamarine: {
          DEFAULT: "#64ffda",
        },
      },
      keyframes: {
        wave: {
          "0%, 100%": {
            "clip-path":
              "polygon(100% 100%, 0% 100% , 0.00% 60.40%, 4.00% 60.15%, 8.00% 59.39%, 12.00% 58.18%, 16.00% 56.58%, 20.00% 54.66%, 24.00% 52.52%, 28.00% 50.27%, 32.00% 48.04%, 36.00% 45.92%, 40.00% 44.03%, 44.00% 42.46%, 48.00% 41.30%, 52.00% 40.60%, 56.00% 40.40%, 60.00% 40.71%, 64.00% 41.52%, 68.00% 42.78%, 72.00% 44.42%, 76.00% 46.37%, 80.00% 48.53%, 84.00% 50.78%, 88.00% 53.01%, 92.00% 55.11%, 96.00% 56.97%, 100.00% 58.49%)",
          },
          "33%": {
            "clip-path":
              "polygon(100% 100%, 0% 100% , 0.00% 48.66%, 4.00% 46.50%, 8.00% 44.53%, 12.00% 42.87%, 16.00% 41.58%, 20.00% 40.75%, 24.00% 40.41%, 28.00% 40.57%, 32.00% 41.24%, 36.00% 42.38%, 40.00% 43.92%, 44.00% 45.79%, 48.00% 47.90%, 52.00% 50.13%, 56.00% 52.38%, 60.00% 54.53%, 64.00% 56.47%, 68.00% 58.10%, 72.00% 59.33%, 76.00% 60.11%, 80.00% 60.40%, 84.00% 60.18%, 88.00% 59.45%, 92.00% 58.27%, 96.00% 56.69%, 100.00% 54.78%)",
          },
          "66%": {
            "clip-path":
              "polygon(100% 100%, 0% 100% , 0.00% 46.98%, 4.00% 49.17%, 8.00% 51.43%, 12.00% 53.64%, 16.00% 55.68%, 20.00% 57.45%, 24.00% 58.86%, 28.00% 59.84%, 32.00% 60.34%, 36.00% 60.33%, 40.00% 59.82%, 44.00% 58.83%, 48.00% 57.41%, 52.00% 55.63%, 56.00% 53.58%, 60.00% 51.38%, 64.00% 49.12%, 68.00% 46.93%, 72.00% 44.91%, 76.00% 43.18%, 80.00% 41.81%, 84.00% 40.88%, 88.00% 40.44%, 92.00% 40.50%, 96.00% 41.07%, 100.00% 42.11%)",
          },
        },
      },
      animation: {
        wave: "wave 4s linear infinite",
      },
    },
  },
  plugins: [],
};

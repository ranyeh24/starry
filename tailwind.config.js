/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: ["selector", "[data-theme-mode=dark]"],
  prefix: "inzm-",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#f8004f",
          light: {
            1: "#fffcfc",
            2: "#fff7f7",
            3: "#ffe9e9",
            4: "#ffd9da",
            5: "#ffcacc",
            6: "#ffbabd",
            7: "#fca5aa",
            8: "#f58990",
            9: "#f8004f",
            10: "#e90043",
            11: "#da003d",
            12: "#6f001d",
            a1: "#ff000003",
            a2: "#ff000008",
            a3: "#ff000016",
            a4: "#ff000726",
            a5: "#ff000a35",
            a6: "#ff000c45",
            a7: "#f7010f5a",
            a8: "#ea001076",
            a9: "#f8004f",
            a10: "#e90043",
            a11: "#da003d",
            a12: "#6f001d",
          },
          dark: {
            1: "#2a1f1f",
            2: "#2f2121",
            3: "#4f1b21",
            4: "#661322",
            5: "#751628",
            6: "#862131",
            7: "#9f2d3e",
            8: "#cc364f",
            9: "#f8004f",
            10: "#e80043",
            11: "#ff929a",
            12: "#ffced0",
            a1: "#ef00000a",
            a2: "#ff11110f",
            a3: "#ff001e34",
            a4: "#fe00234f",
            a5: "#ff033260",
            a6: "#fd204374",
            a7: "#fe355391",
            a8: "#fe3c5cc5",
            a9: "#ff0051f7",
            a10: "#ff0047e5",
            a11: "#ff929a",
            a12: "#ffced0",
          },
        },
        body: {
          light: {
            1: "#fcfcfd",
            2: "#f9f9fb",
            3: "#eff0f3",
            4: "#e7e8ec",
            5: "#e0e1e6",
            6: "#d8d9e0",
            7: "#cdced7",
            8: "#b9bbc6",
            9: "#8b8d98",
            10: "#80828d",
            11: "#62636c",
            12: "#1e1f24",
            a1: "#00005503",
            a2: "#00005506",
            a3: "#00104010",
            a4: "#000b3618",
            a5: "#0009321f",
            a6: "#00073527",
            a7: "#00063332",
            a8: "#00083046",
            a9: "#00051d74",
            a10: "#00051b7f",
            a11: "#0002119d",
            a12: "#000107e1",
          },
          dark: {
            1: "#212224",
            2: "#28292b",
            3: "#303134",
            4: "#36373b",
            5: "#3c3d42",
            6: "#43444a",
            7: "#4f5058",
            8: "#666872",
            9: "#72747f",
            10: "#7d7f8a",
            11: "#b4b6bf",
            12: "#eeeef0",
            a1: "#0022cc03",
            a2: "#adc5f30b",
            a3: "#ccd9fd15",
            a4: "#d2dbfe1d",
            a5: "#d6ddff25",
            a6: "#d6dbfc2f",
            a7: "#d8dcfc3f",
            a8: "#dce2fd5d",
            a9: "#dfe3fd6c",
            a10: "#e4e8ff78",
            a11: "#eef1feb6",
            a12: "#fdfdffee",
          },
        },
      },
      boxShadow: {
        1: "0px 0px 1px rgba(0, 0, 0, 0.08), 0px 0.5px 2px rgba(0, 0, 0, 0.16)",
        2: "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.16)",
        3: "0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.16)",
        4: "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.16)",
        5: "0px 2px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.16)",
        6: "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 20px 32px rgba(0, 0, 0, 0.24)",
      },
      backgroundImage: {
        hero: "linear-gradient(315deg, rgba(247, 0, 121, 0.85) 0%, rgba(247, 0, 36, 0.85) 100%), url(../img/hero.jpg)",
        "gradient-0": "linear-gradient(0deg, #f70079 0%, #f70024 100%)",
        "gradient-45": "linear-gradient(45deg, #f70079 0%, #f70024 100%)",
        "gradient-180": "linear-gradient(180deg, #f70079 0%, #f70024 100%)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nav: 'Armata',
      body: 'Lato',
      description: 'Saira',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1120px',
      xlg: '1220px',
    },
    extend: {
      colors: {
        background: "#f5f8fa",
        brandblue: "#115d8c",
        accent: {
          DEFAULT: '#7ebc43',
          hover: '#3e5e21',
        },
        removebtn: {
          DEFAULT: '#db1818',
          hover: '#6d0c0c'
        },
        brandorange: "#f25d27",
        textostitulos: "#123952",
        textostextos: "#617480",
        textoscomplemento: "#a0acb2",
        shapes01: "#ffffff",
        shapes02: "#dce2e5",
        othersexcluir: "#de3838",
        othersgreen: "#51b853",
        othersgreenlow: "#dcf5dd",
        othersbluelow: "#dde9f0",
        othersorangelow: "#ffa585",
        othersyellow: "#efb866",

        },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      //me traigo las imágenes que voy a usar en el proyecto
      backgroundImage: {
        logo_blue: "url('../img/logo-blue.svg')",
        microscope: "url('../img/microscope.jpg')",
        needle: "url('../img/needle.jpg')",
        spa: "url('../img/spa.jpg')",
        trafalgar_footer: "url('../img/trafalgar-footer.png')",
        trafalgar_header: "url('../img/trafalgar-header.png')",
        dots_3x5: "url('../img/dots-3x5.png')",
        dots_5x5: "url('../img/dots-5x5.svg')",
      },
      //defino los colores que voy a usar en el proyecto, importando los disponibles en tailwind (...theme('colors')) y agregando otros:
      backgroundColor: {
        primary: "#458FF6",
      },
      //no hace falta aclarar por background color, text color etc... sólo con colors se aplica a todas las clases
      textColor: {
        primary: "#458FF6",
        secondary: "#7D7987",
        tertiary: "#FFFFFF",
        highlight: "#4089ED",
        menu: "#1F1534",
      },
      colors: {
        gradientStart: "#67c3f3",
        gradientEnd: "#5a98f2",
        primary: "#458FF6",
      },
      fontFamily: {
        //se agregan como arreglos []
        //csmbiar los nombres del fontFamily según el uso que se haga de cada tipografia (primary, secondary, etc)
        ubuntu: ["Ubuntu", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};

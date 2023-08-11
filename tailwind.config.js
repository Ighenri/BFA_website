/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./BFA_LANDINGPAGE/index.html", "./BFA_LANDINGPAGE/registration-form.htm", "./BFA_LANDINGPAGE/script.js"],
  theme: {
    extend: {},
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '2.5/5': '50%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '30vh': '30vh',
      '35vh': '35vh',
      '40vh': '40vh',
      '45vh': '45vh',
      '50vh': '50vh',
      '55vh': '55vh',
      '60vh': '60vh',
      '70vh': '70vh',
      "80vh": "80vh",
      "90vh": "90vh",
      '100vh': '100vh',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      "90": "22rem",
      "1.5screen":"150vw",
      "2screen": "200vw",
      "2.5screen": "250vw",
      "3screen": "300vw",
      "4screen": "400vw",
      "5screen": "500vw",
       "6screen": "600vw",
      "7screen": "700vw",
      "8screen": "800vw",
      '35vw': '35vw',
      '40vw': '40vw',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '1.5/5': '30%',
      '2/5': '40%',
      '2.5/5': '50%',
      '3/5': '60%',
      '3.5/5': '70%',
      '4/5': '80%',
      '4.5/5': '90%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config}*/

export default{
  content:[
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",

  ],
       theme:{
          extend:{},

       },
       plugins :[],
       
}
// tailwind.config.js
module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     darkMode: 'class', // Enable dark mode with class
   };
   
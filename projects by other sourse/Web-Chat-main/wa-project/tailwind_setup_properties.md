## steps

1. In your react app go to terminal and type two command
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p

2. A new file Tailwind.config,js will be created.Repkace this content 

```js
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
```
3. go to `index.css` and on top add these three lines

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

function t(){return{getImage:o=>{try{const r=`/RoBobo/${o}`;return new URL(`${r}`,import.meta.url).href}catch(r){return console.error("Error loading image:",r),""}}}}export{t as c};

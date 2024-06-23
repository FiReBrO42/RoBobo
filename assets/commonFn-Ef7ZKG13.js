function n(){const r=new URL("./",import.meta.url).href;return{getImage:e=>{try{return new URL(e,r).href}catch(o){return console.error("Error loading image:",o),""}}}}export{n as c};

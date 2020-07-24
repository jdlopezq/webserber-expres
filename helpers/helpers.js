const hbs = require('hbs');

hbs.registerHelper('getYear',()=>{
    return new Date().getFullYear
})
hbs.registerHelper('capitalice',(text)=>{

   console.log(text);
      return text.toUpperCase()
    
})
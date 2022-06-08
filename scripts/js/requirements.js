fetch('https://sky.shiiyu.moe/api/v2/dungeons/bodiggles/pear').then(function(response) {
  return response.text();
}).then(function (text) {
 if (text.includes("floor_7")) {
 
 // add stuff here
 
 }
 return text.split(',');
 
})
               

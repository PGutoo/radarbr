
  var myVar = {"id" : 1};
  console.log("tuleb siia", document.getElementById('js').value);
  fetch("http://localhost:3000/artigos", {
      method: "GET",
      // headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "text/plain"
      // },//"mode" : "no-cors",
      
      //body: {"id" : document.getElementById('saada').value}
  }).then(async function(response){
    var result = await response.json() 
    console.log(result)

      document.getElementById('js').value = result.join("\n\n")
  });

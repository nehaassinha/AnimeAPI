function searchAnime(){
  const textSearch = document.querySelector(".search-anime").value;
  console.log(textSearch);
//https://cors-anywhere.herokuapp.com/
  fetch(`https://api.jikan.moe/v3/search/anime/?q=${textSearch}` ,{
      //mode: 'no-cors',
      method: "GET",
      //dataType: "jsonp",
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      
  }).then((response) => {
      let data  ;       
      if(response.status === 200) {
           data = response.json()
          
      }
      console.info(data)
    return data;
  })
  .catch(()=> console.log("Error"));
}
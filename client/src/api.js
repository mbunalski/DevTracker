  export async function Create (id, description,startDate, closed)  {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        description: description,
        startDate: startDate,
        closed: closed
    })
  };
    const allpokemon = await fetch(`http://localhost:5050/record`,requestOptions);
   

    const result = await allpokemon.json();

    console.log(result)
    console.log("Here")
    return result
    
    // document.querySelector('ul#pokelist').innerHTML = "";
    // for (const pokemon in allpokemonjson){
    //     const li = document.createElement('li');
    //     li.innerText = pokemon
    //     document.querySelector('ul#pokelist').appendChild(li);
    // }


  } 

  export async function GetAll ()  {
    
    const allpokemon = await fetch(`http://localhost:5050/record`);
   

    const result = await allpokemon.json();

    console.log(result)
    console.log("Here in API")
    return result
    
    // document.querySelector('ul#pokelist').innerHTML = "";
    // for (const pokemon in allpokemonjson){
    //     const li = document.createElement('li');
    //     li.innerText = pokemon
    //     document.querySelector('ul#pokelist').appendChild(li);
    // }


  } 
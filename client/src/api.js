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
    
    return result
    
  } 

  export async function GetAll ()  {
    
    const allpokemon = await fetch(`http://localhost:5050/record`);
   

    const result = await allpokemon.json();

    return result
    
  } 

  export async function Delete (id)  {

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
    })}
    
    const allpokemon = await fetch(`http://localhost:5050/record/delete`,requestOptions);
   

    const result = await allpokemon.json();
    
    return result
    
  } 
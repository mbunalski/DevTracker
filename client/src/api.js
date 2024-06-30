  export async function Create (id, project, description, notes, startDate, closed)  {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        project: project,
        description: description,
        notes: notes,
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

  export async function Update (id, project, description, notes, startDate, endDate, closed)  {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        project: project,
        description: description,
        notes: notes,
        startDate: startDate,
        endDate: endDate,
        closed: closed
    })
  };
    const allpokemon = await fetch(`http://localhost:5050/record/update`,requestOptions);
   

    // const result = await allpokemon.json();
    
    return allpokemon
    
  } 
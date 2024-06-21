

// import {useState} from 'react';

// function MyButton() {
//     const [count, setCount] = useState(0);
  
//     function handleClick() {
//       setCount(count + 1);
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Clicked {typeof pokelist} times
//       </button>
//     );
//   }

export function Display({pokelist}){

    return(
        <div>
            <ul>
                {pokelist[0].map(pokemon => (
                    <CreateUpdatePopup key={pokemon} pokemon={pokemon} />
                ))}
            </ul>
        </div>
    );
}
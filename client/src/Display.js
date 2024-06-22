import { DisplayFilter } from "./DisplayItem";

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

export function Display({tasklist}){

    return(
        <div>
            <ul>
                {tasklist.map(task => (
                    <DisplayFilter key={task._id} data={task}/>
                    // <li>{task._id}</li>
                ))}
                {console.log("wamp")}
            </ul>
        </div>
    );
}
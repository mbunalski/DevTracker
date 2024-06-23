import { DisplayFilter } from "./DisplayItem";


export function Display({tasklist}){

    return(
        <div>
            <ul>
                {tasklist.map(task => (
                    <DisplayFilter key={task._id} data={task}/>
                ))}
            </ul>
        </div>
    );
}
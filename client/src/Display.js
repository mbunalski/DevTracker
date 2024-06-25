import { DevItem } from "./DisplayItem";


export function Display({tasklist}){

    return(

        <table >
            <thead>
                <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Notes</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Closed?</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasklist.map(task => (
                    <DevItem key={task._id} data={task}/>
                ))}

            </tbody>
        </table>
    );
}
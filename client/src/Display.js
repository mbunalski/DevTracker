import { DevItem } from "./DisplayItem";


export function Display({tasklist}){

    return(

        <table class="table-auto">
            <thead>
                <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Notes</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Closed?</th>
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
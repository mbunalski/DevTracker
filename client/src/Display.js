import { DevItem } from "./DisplayItem";


export function Display({tasklist, open, project}){
    if(open && project == "all"){
        return(
            <table >
                <thead>
                    <tr >
                    <th>ID</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Closed?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {tasklist.map(task => {
                        if (!task.closed){
                            return <DevItem key={task._id} data={task}/>
                        }})}
                </tbody>
            </table>
        );
    }else if(open && project != "all"){
        return(
            <table >
                <thead>
                    <tr >
                    <th>ID</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Closed?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {tasklist.map(task => {
                        if (!task.closed && task.project == project){
                            return <DevItem key={task._id} data={task}/>
                        }})}
                </tbody>
            </table>
        );
    }else if(!open && project != "all"){
        return(
            <table >
                <thead>
                    <tr >
                    <th>ID</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Closed?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {tasklist.map(task => {
                        if (task.project == project){
                            return <DevItem key={task._id} data={task}/>
                        }})}
                </tbody>
            </table>
        );
    }
    else {
        return(
            <table >
                <thead>
                    <tr >
                    <th>ID</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Notes</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Closed?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {tasklist.map(task => {
                            return <DevItem key={task._id} data={task}/>
                        })}
                </tbody>
            </table>
        );
    }
}
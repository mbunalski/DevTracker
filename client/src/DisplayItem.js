import {Delete} from './api'

export function DisplayFilter({data}){
    return(
        <div id={data._id}>
            {data._id} {data.description} {String(data.closed)} {<button onClick={() => {Delete(data._id)}}>Delete</button>}
        </div>
    );
}
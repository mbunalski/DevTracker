import {Delete} from './api'
import {CreateUpdatePopup} from './CreateUpdatePopup';

export function DisplayFilter({data}){
    return(
        <div id={data._id}>
            {data._id} {data.description} {String(data.closed)} {<CreateUpdatePopup key="Update" action="Update" />}{<button onClick={() => {Delete(data._id)}}>Delete</button>}
        </div>
    );
}
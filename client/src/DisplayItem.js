import {Delete} from './api'
import {CreateUpdatePopup} from './CreateUpdatePopup';

export function DisplayFilter({data}){
    return(
        <div id={data._id}>
            {data._id} {data.description} {data.notes} {data.startDate} {data.endDate} {String(data.closed)} {<CreateUpdatePopup key="Update" action="Update" data={data} />}{<button onClick={() => {Delete(data._id)}}>Delete</button>}
        </div>
    );
}
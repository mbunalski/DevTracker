import {Delete} from './api'
import {CreateUpdatePopup} from './CreateUpdatePopup';

export function DevItem({data}){
    return(
        <tr>
            <td>{data._id}</td>
            <td>{data.description}</td>
            <td>{data.notes}</td>
            <td>{data.startDate}</td>
            <td>{data.endDate}</td>
            <td>{String(data.closed)}</td>
            <td>{<CreateUpdatePopup key="Update" action="Update" data={data} />}</td>
            <td>{<button onClick={() => {Delete(data._id)}}>Delete</button>}
        </td>    
        </tr>
    );
}
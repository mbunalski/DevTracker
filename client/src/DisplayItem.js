export function DisplayFilter({data}){
    return(
        <div>
            {data._id} {data.description} {String(data.closed)}
        </div>
    );
}
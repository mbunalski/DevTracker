import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Create, Update, GetLast} from './api';
import {useRef, useState} from 'react';
import {GetAll} from './api'



 
export function CreateUpdatePopup({action, data}) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    
    const idInput = useRef(null);
    const descriptionInput = useRef(null);
    const notesInput = useRef(null);
    const startDateInput = useRef(null);
    const endDateInput = useRef(null);

    function lastid(data){
        let id;
        data.map(task => {
            id = task._id
        })
        return id +1
    }

    if(action == "Create"){
        return (
            <div className="flex w-3/6">

                <Popup trigger=
                    {<button className="px-2 bg-gray-700 rounded-lg inline-flex items-center"> New Task </button>} 
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    <label>
                                        ID: <input 
                                        name="id"
                                        value={lastid(data)}
                                        ref={idInput}/>
                                    </label>
                                    <label>
                                        Description: <input 
                                        name="description"
                                        ref={descriptionInput}/>
                                    </label>
                                    <label>
                                        Notes: <input 
                                        name="description"
                                        ref={notesInput}/>
                                    </label>
                                    <label>
                                        Start Date: <input 
                                        name="startDate"
                                        type="date"
                                        ref={startDateInput}/>
                                    </label>
                                    <label>
                                        End Date: <input
                                        type="date" 
                                        name="endDate"
                                        ref={endDateInput}/>
                                    </label>
                                    <label>
                                        Closed?: <input
                                        type="checkbox" 
                                        name="closed"
                                        checked={checked}
                                        onChange={handleChange}/>
                                    </label>
                                </div>
                                <div>
                                    <button onClick=
                                        {() => close()}>
                                            Cancel
                                    </button>
                                    <button onClick=
                                        {() => {
                                            const id = idInput.current.value;
                                            const description = descriptionInput.current.value;
                                            const notes = notesInput.current.value;
                                            const startDate = startDateInput.current.value;
                                            Create(id, description, notes, startDate, checked)
                                            close()
                                            }}>
                                            Save
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </div>
        )
                }else{
                    return (
                        <>
            
                            <Popup trigger=
                                {<button> Update </button>} 
                                modal nested>
                                {
                                    close => (
                                        <div className='modal'>
                                            <div className='content'>
                                                <label>
                                                    ID: <input 
                                                    name="id"
                                                    value={data._id}
                                                    ref={idInput}/>
                                                </label>
                                                <label>
                                                    Description: <input 
                                                    name="description"
                                                    defaultValue={data.description}
                                                    ref={descriptionInput}/>
                                                </label>
                                                <label>
                                                    Notes: <input 
                                                    name="description"
                                                    defaultValue={data.notes}
                                                    ref={notesInput}/>
                                                </label>
                                                <label>
                                                    Start Date: <input 
                                                    name="startDate"
                                                    defaultValue={data.startDate}
                                                    type="date"
                                                    ref={startDateInput}/>
                                                </label>
                                                <label>
                                                    End Date: <input
                                                    type="date" 
                                                    name="endDate"
                                                    defaultValue={data.endDate}
                                                    ref={endDateInput}/>
                                                </label>
                                                <label>
                                                    Closed?: <input
                                                    type="checkbox" 
                                                    name="closed"
                                                    checked={checked}
                                                    onChange={handleChange}/>
                                                </label>
                                            </div>
                                            <div>
                                                <button onClick=
                                                    {() => close()}>
                                                        Cancel
                                                </button>
                                                <button onClick=
                                                    {() => {
                                                        const id = idInput.current.value;
                                                        const description = descriptionInput.current.value;
                                                        const notes = notesInput.current.value;
                                                        const startDate = startDateInput.current.value;
                                                        const endDate = endDateInput.current.value;
                                                        Update(id, description, notes, startDate, endDate, checked)
                                                        close()
                                                        }}>
                                                        Update
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </>
                    )
                            

                }
};

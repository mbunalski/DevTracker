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
    const projectInput = useRef(null);
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
            <>
                 
                <Popup  contentStyle={{width: "fit-content", height: "fit-content"}} trigger=
                    {<button className="text-gray-200 px-2 bg-gray-700 rounded-lg inline-flex items-center"> New Task </button>} 
                    modal nested >
                    {
                        close => (
                            <div className='flex flex-col text-gray-200'>
                                <div className=' m-2'>
                                    <div className='flex flex-row justify-between mb-2'>
                                        <div className='mr-2'>
                                        <label>
                                            ID: <input 
                                            name="id"
                                            value={lastid(data)}
                                            ref={idInput}
                                            className='text-black p-2'/>
                                        </label>
                                        </div>
                                        <div className=''>
                                        <label>
                                            Project: <select name="project" className='text-black p-2' ref={projectInput}>
                                            <option value="DevTracker">DevTracker</option>
                                            <option value="DokuDex">DokuDex</option>
                                            <option value="StravaUpdate">StravaUpdate</option>
                                        </select>
                                        </label>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <label>
                                            Description: <input 
                                            name="description"
                                            ref={descriptionInput}
                                            className='biginput text-black p-2'/>
                                        </label>
                                    </div>
                                    <div className='mb-2 justify-between flex'>
                                        <label>
                                            Notes:</label> <input 
                                            name="notes"
                                            ref={notesInput}
                                            className='biginput text-black p-2'/>
                                        
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='mr-2'>
                                            <label>
                                                Start Date: <input 
                                                name="startDate"
                                                type="date"
                                                ref={startDateInput}
                                                className='text-black p-2'
                                                />
                                            </label>
                                        </div>
                                        <div className=''>
                                            <label>
                                                End Date: <input
                                                type="date" 
                                                name="endDate"
                                                ref={endDateInput}
                                                className='text-black p-2'/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='bg-inherit'>
                                        <label>
                                            Closed?: <input
                                            type="checkbox" 
                                            name="closed"
                                            checked={checked}
                                            onChange={handleChange}/>
                                        </label>
                                    </div>
                                </div>
                                <div className='flex m-2 justify-center px-4'>
                                    <div className='py-2 px-4 border border-1 border-white mx-2 w-20 rounded-md'>
                                    <button onClick=
                                        {() => close()}>
                                            Cancel
                                    </button>
                                    </div>
                                    <div className='py-2 px-4 border border-1 border-white mx-2 w-20 flex justify-center rounded-md'>
                                    <button onClick=
                                        {() => {
                                            const id = idInput.current.value;
                                            const project = projectInput.current.value;
                                            const description = descriptionInput.current.value;
                                            const notes = notesInput.current.value;
                                            const startDate = startDateInput.current.value;
                                            Create(id, project, description, notes, startDate, checked)
                                            close()
                                            }}>
                                            Save
                                    </button>
                                    </div>
                                </div>
                                
                            </div>

                        )
                    }
                </Popup>
            </>
        )
                }else{
                    return (
                        <>
            
                            <Popup contentStyle={{width: "fit-content", height: "fit-content"}} trigger=
                                {<button> Update </button>} 
                                modal nested>
                                {
                                    close => (

                                            <div className='flex flex-col text-gray-200'>
                                            <div className=' m-2'>
                                                <div className='flex flex-row justify-between mb-2'>
                                                    <div className='mr-2'>
                                                    <label>
                                                        ID: <input 
                                                        name="id"
                                                        value={data._id}
                                                        ref={idInput}
                                                        className='text-black p-2'/>
                                                    </label>
                                                    </div>
                                                    <div className=''>
                                                    
                                                        <label>
                                                        Project: <input 
                                                        name="project"
                                                        value={data.project}
                                                        ref={projectInput}
                                                        className='text-black p-2'/>
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                <div className='mb-2'>
                                                    <label>
                                                        Description: <input 
                                                        name="description"
                                                        defaultValue={data.description}
                                                        ref={descriptionInput}
                                                        className='biginput text-black p-2'/>
                                                    </label>
                                                </div>
                                                <div className='mb-2 justify-between flex'>
                                                    <label>
                                                        Notes:</label> <input 
                                                        name="notes"
                                                        defaultValue={data.notes}
                                                        ref={notesInput}
                                                        className='biginput text-black p-2'/>
                                                    
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='mr-2'>
                                                        <label>
                                                            Start Date: <input 
                                                            name="startDate"
                                                            defaultValue={data.startDate}
                                                            type="date"
                                                            ref={startDateInput}
                                                            className='text-black p-2'
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className=''>
                                                        <label>
                                                            End Date: <input
                                                            type="date" 
                                                            name="endDate"
                                                            defaultValue={data.endDate}
                                                            ref={endDateInput}
                                                            className='text-black p-2'/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='bg-inherit'>
                                                    <label>
                                                        Closed?: <input
                                                        type="checkbox" 
                                                        name="closed"
                                                        checked={checked}
                                                        onChange={handleChange}/>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='flex m-2 justify-center px-4'>
                                                <div className='py-2 px-4 border border-1 border-white mx-2 w-20 rounded-md'>
                                                <button onClick=
                                                    {() => close()}>
                                                        Cancel
                                                </button>
                                                </div>
                                                <div className='py-2 px-4 border border-1 border-white mx-2 w-20 flex justify-center rounded-md'>
                                                <button onClick=
                                                    {() => {
                                                        const id = idInput.current.value;
                                                        const project = projectInput.current.value;
                                                        const description = descriptionInput.current.value;
                                                        const notes = notesInput.current.value;
                                                        const startDate = startDateInput.current.value;
                                                        const endDate = endDateInput.current.value;
                                                        Update(id, project, description, notes, startDate, endDate, checked)
                                                        close()
                                                        }}>
                                                        Save
                                                </button>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    )
                                }
                            </Popup>
                        </>
                    )
                            

                }
};

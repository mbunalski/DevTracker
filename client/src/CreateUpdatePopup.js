import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Create} from './api';
import {useRef, useState} from 'react';
import {GetAll} from './api'



 
export function CreateUpdatePopup({action}) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    
    const idInput = useRef(null);
    const descriptionInput = useRef(null);
    const startDateInput = useRef(null);
    const endDateInput = useRef(null);
    return (
        <div>
            <Popup trigger=
                {<button> Create </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <label>
                                    ID: <input 
                                    name="id"
                                    ref={idInput}/>
                                </label>
                                <label>
                                    Description: <input 
                                    name="description"
                                    ref={descriptionInput}/>
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
                                        const startDate = startDateInput.current.value;
                                        Create(id, description, startDate, checked)
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
};

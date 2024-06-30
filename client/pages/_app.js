import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {GetAll, Delete} from '../src/api'
import {CreateUpdatePopup} from '../src//CreateUpdatePopup';
import {Display} from '../src//Display';
import {useState, useEffect} from 'react';
import '../styles/global.css';


export default function landingpage() {
    const [tasklist, setTasklist] = useState([[]]);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    useEffect(() =>{
        UpdateList()
    }, []);

    function UpdateList() {

        Promise.all([GetAll()]).then(x => {
            setTasklist(x[0])
        });
        
        setTimeout(UpdateList, 5000);

    }

    



  return <div>
            <div className="grid container place-items-center mx-auto content-center justify-center">
                <Head>
                    <title>Keep the tasks in line</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                

                <h1>
                    DevTracker
                </h1>

                <div className="flex mx-auto size-full justify">


                    <form className="w-1/6">
                        <select id="countries" class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="ALL" selected>All</option>
                            <option value="devtracker">DevTracker</option>
                            <option value="dokudex">DokuDex</option>
                        </select>
                    </form>
                    <div className="w-2/6"></div>
                    <CreateUpdatePopup  key="Create" action="Create" data={tasklist}/>
                    
                    
                    <label className="w-1/6 inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked={checked} onChange={handleChange}></input>
                        <div class="relative w-11 h-6  peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-300">Hide Closed</span>
                    </label>


                    {/* <div className="w-1/6"></div> */}



                </div>
                <div>
                    <Display key="set" tasklist={tasklist} open={checked}  />
                </div>

            </div>
    </div>  
}
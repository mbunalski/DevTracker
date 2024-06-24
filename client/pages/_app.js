import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {GetAll, Delete} from '../src/api'
import {CreateUpdatePopup} from '../src//CreateUpdatePopup';
import {Display} from '../src//Display';
import {useState, useEffect} from 'react';
import '../styles/global.css';


export default function landingpage() {
    const [pokelist, setPokelist] = useState([[]]);

    useEffect(() =>{
        UpdateList()
    }, []);

    function UpdateList() {

        Promise.all([GetAll()]).then(x => {
            setPokelist(x[0])
        });

        setTimeout(UpdateList, 5000);

    }

  return <div className={styles.container}>
        <Head>
            <title>Keep the tasks in line</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <h1 className="text-3xl font-bold underline">
            DevTracker
        </h1>

        {/* <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1> */}

        {/* <PokeFilter /> */}
        <CreateUpdatePopup key="Create" action="Create" />
        <Display key="set" tasklist={pokelist} />
        {/* <button onClick={() => {Delete(1234)}}>Test</button> */}

    </div>  
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {GetAll} from './api'
import {CreateUpdatePopup} from './CreateUpdatePopup';
import {Display} from './Display';
import {useState, useEffect} from 'react';


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
        

        <h1 className={styles.title}>
            DevTracker
        </h1>

        {/* <PokeFilter /> */}
        <CreateUpdatePopup key="Create" action="Create" />
        <Display key="set" tasklist={pokelist} />

    </div>  
}
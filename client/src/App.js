import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {GetAll, byType, filtered} from './api'
import {CreateUpdatePopup} from './CreateUpdatePopup';
import {Display} from './Display';
import {useState, useEffect} from 'react';


export default function landingpage() {
    const [pokelist, setPokelist] = useState([[]]);
    // const [metricone, setMetricone] = useState("Fire");
    // const [metrictwo, setMetrictwo] = useState("Fire");

    useEffect(() =>{
        UpdateList()
    }, []);

    function UpdateList() {
        console.log("UpdateList - Start")

        // console.log(typeof populateall())
        // populateall().then(x => {
        //     return x
        // })
        Promise.all([GetAll()]).then(x => {
            console.log("promise")
            console.log(x[0])
            setPokelist(x[0])
        });



    }

    // function UpdateMetricTwo(str) {
    //     console.log("Update Metric2")
    //     setMetrictwo(str)
    // }

    // function UpdateMetricOne(str) {
    //     console.log("Update Metric1")
    //     setMetricone(str)

    // }
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
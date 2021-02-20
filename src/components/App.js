import React from 'react';
import { useState, useCallback } from 'react';

import getComments from '../helper/api.js';
import throttle from '../helper/throttle.js';
import Comments from './Comments';

import styles from '../css/App.module.css';

const readME = ['Rest API call will trigger on every click',
    'Rest API call will trigger after 1.5 sec of ideal time after clicks',
    'Rest API call will trigger only once every 1.5 sec for all clicks'];

const HEADER = 'Do Check the Network Tab for Rest Calls';

const App = () => {

    const [normalCount, setNormalCount] = useState(0);
    const [debounceCount, setDebounceCount] = useState(0);
    const [throttlingCount, setThrottlingCount] = useState(0);

    const [normalComments, setNormalComments] = useState([]);
    const [debounceComments, setDebounceComments] = useState([]);
    const [throttlingComments, setThrottlingComments] = useState([]);

    let timeCheck;

    const fetchNormalComments = async () => {
        const data = await getComments();
        setNormalComments(data);
    };

    const fetchDebounceComments = async () => {
        const data = await getComments();
        setDebounceComments(data);
    };


    const fetchThrottlingComments = async () => {
        console.log('fetchThrottlingComments  CALLED');
        const data = await getComments();
        setThrottlingComments(data);
    };

    const normalClicks = (e) => {
        setNormalCount((prevState) => (prevState + 1));
        fetchNormalComments();
    }

    const debounceMe = (e) => {

        clearTimeout(timeCheck);

        timeCheck = setTimeout(() => {
            setDebounceCount((prevState) => (prevState + 1));
            fetchDebounceComments();
        }, 1500);
    };

    const throttleMe = () => {
        setThrottlingCount((prevState) => (prevState + 1));
        fetchThrottlingComments();

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttleMeTimeOut = useCallback(throttle(throttleMe, 1500),
        [setThrottlingCount, setThrottlingComments]);

    return (

        <div className={`container ${styles.mainPage}`}>
            <h3 class={`ui block header ${styles.header} `}>{HEADER}</h3>
            <div className="ui stackable grid">
                <div class="row">
                    <div className="sixteen wide column">
                        <Comments name={`Normal Counter`} callbackFunc={normalClicks} count={normalCount} comments={normalComments} readMe={readME[0]} />
                    </div>
                </div>
                <div class="row">
                    <div className="sixteen wide column">
                        <Comments name={`Debounce Counter`} callbackFunc={debounceMe} count={debounceCount} comments={debounceComments} readMe={readME[1]} />
                    </div>
                </div>
                <div class="row">
                    <div className="sixteen wide column">
                        <Comments name={`Throttling Counter`} callbackFunc={throttleMeTimeOut} count={throttlingCount} comments={throttlingComments} readMe={readME[2]} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default App;
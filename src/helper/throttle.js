const throttle = (callback, limit) => {

    let flag = true;
    return () => {

        if (flag) {
            callback();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
};


export default throttle;
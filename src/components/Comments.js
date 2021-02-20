import React from 'react';

import styles from '../css/Comments.module.css';

const BUTTON_NAME = "Get Comments";

const Comments = (props) => {

    const renderList = (input) => {
        return input.map((obj) => {
            return (
                <div className="ui card" key={obj.id}>
                    <div className="content">
                        <div className="header">{obj.name}</div>
                        <div className="meta">{obj.email}</div>
                        <div className="description">
                            <p>{obj.body}</p>
                        </div>
                    </div>
                </div>
            )

        });
    };

    return (
        <>
            <div>
                <label htmlFor={props.name}>{props.name} : </label>
                <span className={styles.count} name={props.name}>{props.count}</span>
                <input className={styles.comments} type="button" onClick={props.callbackFunc} value={BUTTON_NAME} />
                <div className="ui left pointing label">
                   {props.readMe}
                </div>
                <div className="ui five cards">
                    {renderList(props.comments)}
                </div>

            </div>
        </>
    );
};

export default Comments;
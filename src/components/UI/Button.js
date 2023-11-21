import React from "react";
import styles from "./Button.module.css"

function Button(props) {
    
    // function clickHandler(event) {
    //     props.onClick(event)
    // }
    
    return (
        <button 
            type={props.type || "button"}
            className={styles.button}
            onClick={props.onClick}>
            {props.text}
        </button>

    );
}

export default Button;

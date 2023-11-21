import React from "react";
import styles from "./ErrorModal.module.css"
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
    
    function clickHandler() {
        props.dismissError()
    }

    return (
        <div className={styles.backdrop} onClick={clickHandler}>
        <Card className={styles.modal} >
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.text}</p>
                </div>
                <footer className={styles.actions}>
                    <Button 
                        text="Okay"
                        onClick={props.dismissError}
                    />
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;
import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function UserInput(props) {
    const [newUser, setNewUser] = useState({
        username: "",
        age: 0
    })
    const [errorMessage, setErrorMessage] = useState("")

    function changeHandler(event) {
        const changedValue = event.target.value;
        const key = event.target.id;
        setNewUser((prevValue) => ({...prevValue, [key]: changedValue}));
    }
    
    function submitHandler(event) {
        event.preventDefault();
        if (newUser.username.trim().length < 3) {
            setErrorMessage("Username must be longet than 3 characters.");
            return;
        } else if (+newUser.age <= 13) {
            setErrorMessage("Age has to be greater than 13.");
            return;
        } else {
            props.addUser(newUser);
            setNewUser( {username: "", age: 0});
        }          
    }
    
    function dismissErrorHandler() {
        setErrorMessage("");
    }
    
    let displayError = null
    if (errorMessage.length > 0) {
        displayError = (
            <ErrorModal
                title={"Invalid Input"}
                text={errorMessage}
                dismissError={dismissErrorHandler} 
            />
        )
    }

    return (
        <div>
        {displayError}
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    onChange={changeHandler}
                    value={newUser.username}    
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    type="number"
                    id="age" 
                    onChange={changeHandler}
                    value={newUser.age}
                />
                <Button 
                    type="submit"
                    text="Add User"/>
            </form>
        </Card>
        </div>
    )
}

export default UserInput;
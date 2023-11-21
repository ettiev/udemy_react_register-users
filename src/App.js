import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  
  function addUserHandler(newUser) {
    const newUserId = Math.random().toString();
    const updatedUser = {
      username: newUser.username,
      age: newUser.age,
      id: newUserId
    }
    setUserList((prevValue) => [...prevValue, updatedUser]);
  }

  let displayUsers = null
  if (userList.length > 0) {
    displayUsers = (
      <UserList 
        userList={userList}
      />
    )
  } 

  return (
    <div>
        <UserInput 
          addUser={addUserHandler} 
        />
          {displayUsers}
          
    </div>
  );
}

export default App;

import React, { useReducer, useRef, useState } from 'react'
import { userData } from '../constants/userDate'
import { userReducer } from '../reducers/userReducer'
// import { userData } from '../constants/userData'

function UserList() {
//   const [users, setUsers] = useState(userData);

//   //id 값은 원래 백엔드에서 자동으로 부여해줌(사실은 프론트엔드가 할 영역이 아님)
//   const userId = useRef(11)
//   const addUser = () => {
//     setUsers([...users, {id : userId.current++, name:'김준태', email:'.com'}])
//     userId.current = userId.current + 1
//   }

//   //명시된 id 와 일치하는 유저만 뺀다.
//   //명시된 id와 일치하지 않는 유저만 남긴다.
//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id))
//   }
  const [users, dispatch] = useReducer(userReducer, userData)
  const [userInput, setUserInput] = useState({id:'', name:'', email:''})
  const onUserInputChange = (e) => {
    const {name, value} = e.target
    setUserInput({...userInput, [name]:value})
  }


  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
            <p >{user.name}</p>
            <button onClick={() => dispatch({type:'DELETE', data: {id: user.id}})}>삭제</button>
            {/* <button onClick={() => deleteUser(user.id)}>유저추가하기</button> */}
        </div>
      ))}
      <input name="id" onChange={onUserInputChange}></input>
      <input name="name" onChange={onUserInputChange}></input>
      <input name="email" onChange={onUserInputChange}></input>
      <button onClick={() => dispatch({type: 'ADD', data: userInput})}>유저추가하기</button>
    </div>
  )
}

export default UserList
import React, { useState } from 'react';

const Login = () => {
    // const [number, setNumber] = useState(0)

    // const chahgeHandler = (e) => {
    //     setNumber(e.target.value)
    // }
    // return (
    //     <div>
    //         <input onChange={chahgeHandler} />
    //         <p>{number}</p>
    //     </div>
    // );

    const [userInput, setUserInput] = useState({id: '', pw:''})
    const onUserIdChange = (e) => {
        const {name, value} = e.target
        //...연산자를 쓰면 객체를 펼칠 수 있다.
        //{id: '', pw:''} -> id: '', pw:''
        //userInput = {id: '', pw:''} 
        //...userInput = id: '1', pw:'2'
        //id:'10'
        //id: '1', pw:'2', id: '10'
        setUserInput({...userInput, [name] :value})
    }
    const doLogin = () => {
        alert('로그인완료')
        //axios / fetch로 로그인 요청보내는 함수필요함
    }
    console.log(userInput)

    return (
        <div>
            <input name="id" placeholder="아이디를 입력하세요." onChange={onUserIdChange}></input>
            <input name="pw" placeholder="비밀번호를 입력하세요." onChange={onUserIdChange}></input>
            <button onClick={doLogin}>로그인</button>
        </div>
    );
};

export default Login;
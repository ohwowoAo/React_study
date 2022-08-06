import React, { useRef, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';

const Main = () => {
  const [ idvalue, setIdvalue ] = useState('');
  const [ psvalue, setPsvalue ] = useState('');
  // const [ joinfalse, setJoinfalse ] = useState(true);
  const inputFocus = useRef(null);
  const passFocus = useRef(null);
  const handleClick = () => {
    alert('회원가입 성공!');
  };
  const joinfalse = () => {
    alert('회원가입 실패!');
    // setIdvalue('');
    if(psvalue.length >= 12 && psvalue.length){
      setIdvalue('');
      inputFocus.current.focus();
    }
    if(idvalue.length >= 6 && idvalue.length <= 20){
      setPsvalue('');
      passFocus.current.focus();
    }
  };
  return(
    
       <div>
      <div>
        <input
          type="text"
          name='id'
          ref={inputFocus}
          value={idvalue}
          onChange={(e) => setIdvalue(e.target.value)}
          placeholder='6글자 이상 20글자 이하'
        />
        {
          idvalue.length >= 6 && idvalue.length <= 20 ? null : '유효하지않는 아이디입니다'
        }
      </div>
      <div>
        <input
          type="text"
          name='password'
          ref={passFocus}
          value={psvalue}
          onChange={(e) => setPsvalue(e.target.value)}
          placeholder='12글자 이상 20글자 이하'
        />
        {
          psvalue.length >= 12 && psvalue.length <= 20 ? null : '유효하지않는 비밀번호입니다'
        }
      </div>
      {
        idvalue.length >= 6 && idvalue.length <= 20 && psvalue.length >= 12 && psvalue.length?
        <Link to = {`/join/${idvalue}`}><button disabled={idvalue.length === 0 || psvalue.length === 0 ? true : false}>회원가입</button></Link> : <button type="button" onClick = {joinfalse} disabled={idvalue.length === 0 || psvalue.length === 0 }>회원가입</button>
      }

      
    </div>

    
  )
}
const Join = () => {
  const [ content, setContent ] = useState('');
  const params = useParams();

  function add(){
    <div>{content}</div>
  }
  return(
    <>
      <Link to = '/'>로그인페이지로 돌아가기</Link>
      <div>{params.id}님 안녕하세요!</div>   
      <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}></input>
      <button onClick={
        <div></div>
      }>게시글 생성</button>
      add()
    </>
  )
}
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/join/:id" element={<Join />} />
                <Route path="*" element={"페이지를 찾을수 없습니다"} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
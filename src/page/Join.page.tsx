import * as React from 'react';
import {useState} from 'react';
import {getCustLoginIdCheck} from "../api/cust/GetCustLoginIdCheck";

export const JoinPage = () => {

    const [loginId, setLoginId] = useState('')

    const handleValidateLoginId = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()

        const custLoginIdCheck = getCustLoginIdCheck(loginId);

        if(custLoginIdCheck) {
            alert("사용할 수 있는 아이디입니다!")
        } else {
            alert(loginId+"는 이미 사용중인 아이디 입니다!")
        }
    }

    return <>
        <h3>회원가입 페이지</h3>
        <form>
            <input placeholder='아이디' value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
            <input type='submit' onClick={handleValidateLoginId} value="중복체크"/>
        </form>

    </>
}

export default JoinPage
import * as React from 'react';
import {useState} from 'react';
import KotlinClient from '../api/KotlinClient';

export const CustPage = () => {

    const [loginId, setLoginId] = useState('')

    const handleValidateLoginId = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()

        KotlinClient.get('/api/noch/cust/${loginId}')
            .then()
            .catch()
    }

    return <>
        <h1>Welcome, CustPage</h1>
        <form>
            <input placeholder='아이디' value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
            <input type='submit' onClick={handleValidateLoginId} value="중복체크"/>
        </form>

    </>
}

export default CustPage
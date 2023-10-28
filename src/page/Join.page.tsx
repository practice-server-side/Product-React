import * as React from 'react';
import {useState} from 'react';
import {getCustLoginIdCheck} from "../api/cust/GetCustLoginIdCheck";
import {postCustJoin} from "../api/cust/PostCustJoin";

export type JoinFormRequest = {
    loginId: string,
    loginPassword: string,
    userName: string,
    userPhone: string,
}

export const JoinPage = () => {

    const [joinForm, setJoinForm] = useState({
        loginId: '',
        password: '',
        passwordConfirm: ''
    });

    const [loginIdValid, setLoginIdValid] = useState(false);

    const handleLoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJoinForm(prev => ({ ...prev, loginId: e.target.value }));
    };

    const handleValidateLoginId = async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();

        const res = await getCustLoginIdCheck(joinForm.loginId);
        setLoginIdValid(!res.data.exists)

        if(!res.data.exists) {
            alert("사용할 수 있는 아이디입니다!");
        } else {
            alert(joinForm.loginId + "는 이미 사용중인 아이디 입니다!");
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJoinForm(prev => ({ ...prev, password: e.target.value }));
    };

    const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJoinForm(prev => ({ ...prev, passwordConfirm: e.target.value }));
    };

    const handleJoin = () => {
        if (joinForm.password !== joinForm.passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.')
        } else {
            const res = postCustJoin({
                loginId: joinForm.loginId,
                loginPassword: joinForm.password,
                userName: "성현",
                userPhone: "01045839103",
            });

            console.log('res : ', res)
        }

    };

    return (
        <>
            <h3>회원가입 페이지</h3>
            <form>
                <input
                    placeholder='아이디'
                    value={joinForm.loginId}
                    onChange={handleLoginIdChange}
                    disabled={loginIdValid}
                />
                <input
                    type='button'
                    onClick={handleValidateLoginId}
                    value="중복체크"
                    disabled={loginIdValid}
                />
                <br/>
                <input
                    placeholder='비밀번호'
                    value={joinForm.password}
                    onChange={handlePasswordChange}
                />
                <br/>
                <input
                    placeholder='비밀번호 확인'
                    value={joinForm.passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                />
                <input
                    type='button'
                    onClick={handleJoin}
                    value="회원가입"
                    disabled={joinForm.password !== joinForm.passwordConfirm || !loginIdValid}
                />
            </form>
        </>
    );
}

export default JoinPage
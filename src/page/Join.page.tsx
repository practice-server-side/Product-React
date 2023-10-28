import * as React from 'react';
import {useJoinForm} from "../hook/CustJoinHook";

export type JoinFormRequest = {
    loginId: string,
    loginPassword: string,
    userName: string,
    userPhone: string,
}

export const JoinPage = () => {

    const {
        joinForm,
        loginIdValid,
        handleLoginIdChange,
        handleValidateLoginId,
        handlePasswordChange,
        handlePasswordConfirmChange,
        handleJoin
    } = useJoinForm();

    return (
        <>
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
import React, {FC, useState} from 'react';
import s from "./Login.module.scss"

interface PropsLogin {
    loginSend: (login: string) => void
    error:string
}

const Login: FC<PropsLogin> = ({loginSend,error}) => {
    const [loginValue, setLoginValue] = useState<string>('')
    const editLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value)
    }

    return (
        <div className={s.login}>
            <div className={s.login__wrap}>
                <h1 className={s.login__title}>Login</h1>
                {error &&
                    <div className="_error">{error}</div>
                }
                <div className={s.login__form}>
                    <input type="text" className={s.login__input} onChange={editLogin}/>
                    <button className={s.login__btn} onClick={() => loginSend(loginValue)}>ok</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, {FC, useEffect, useState, Suspense} from 'react';
import Aside from "./components/Aside/Aside";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Sale from "./components/Content/Sale/Sale";
import {setUser} from "./Redux/Market";
import userApi from "./Api/Api";
import {useDispatch} from "react-redux";
import Loader from "./components/Ui/Loader/Loader";


enum ActiveClass {
    active = 'active'
}

const App: FC = () => {
    const [login, setLogin] = useState<number>(0)



    const dispatch = useDispatch()
    const auth = async () => await userApi.getUser().then(e => {
        if (e) {
            // console.log(e)
            dispatch(setUser(e.status))
            setLogin(e.status)
        }
    });


    useEffect(() => {
        auth()
    }, [])

    if (!login) return <Loader/>

    return (
        <Router>
            <Suspense fallback={<Loader/>}>
                <main>
                    <Aside/>
                    <div style={{flex: "1 1 auto"}}>
                        <Routes>
                            <Route path='/'
                                   element={<Navigate replace to="/sale"/>}/>
                            <Route  path='/sale' element={<Sale/>}/>
                        </Routes>
                    </div>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;

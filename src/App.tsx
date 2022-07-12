import React, {FC, Suspense} from 'react';
import Aside from "./components/Aside/Aside";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Sale from "./components/Content/Sale/Sale";
import Loader from "./components/Ui/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";

const App: FC = () => {

    return (
        <Router>
            <Suspense fallback={<Loader/>}>
                <main>
                    <Aside/>
                    <div className="content">
                        <Routes>
                            <Route path='/'
                                   element={<Navigate replace to="/sale"/>}/>
                            <Route path='/sale' element={<Sale/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;

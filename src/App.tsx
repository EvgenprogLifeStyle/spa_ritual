import React, {FC, Suspense} from 'react';
import Aside from "./components/Aside/Aside";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
const Sale = React.lazy(() => import('./components/Content/Sale/Sale'));
const Loader = React.lazy(() => import('./components/Ui/Loader/Loader'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const App: FC = () =>
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


export default App;

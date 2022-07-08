import React from 'react';
import TopControl from "../TopControl/TopControl";
import Footer from "../../Footer/Footer";
import GeneralInfoContainer from "../GeneralInfo/GeneralInfoContainer";

const Sale = () => {
    return (<>

            <TopControl/>
            <div style={{padding: "24px 40px 0"}}>
                <GeneralInfoContainer/>
                <Footer/>

            </div>
        </>
    );
};

export default Sale;
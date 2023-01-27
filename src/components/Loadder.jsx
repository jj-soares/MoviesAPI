import React from "react";

import './LoadderStyle.css'

import { TailSpin } from 'react-loader-spinner'


function Loader() {


    return (

        <div className="loader_container">
            <TailSpin
                color="#f7d354"
                ariaLabel="tail-spin-loading"
                visible={true}
                />
        </div>


    )
}

export default Loader
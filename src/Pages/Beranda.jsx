import React from "react";
import Navbar from "../Component/Navbar";
import Corousel from "../Component/Corousel";
import Berita from "../Component/Berita";

const Beranda = ()=> {
    return (
        <div>
            <Navbar/>
            <Corousel/>
            <Berita/>
        </div>
    );
}

export default Beranda ;
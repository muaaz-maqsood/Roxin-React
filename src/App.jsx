import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./header";
import "./sttyle.css"
import Section2 from "./Section2";
import Webpresence from "./Webpresence";
import Work from "./Work";
import Products from "./Products";
import Culture from "./Culture";
import Teamwork from "./Teamwork";
import ThreeImages from "./ThreeImages";
import Paragraph from "./Paragraph";
import Clients from "./Clients";
import Logos from "./Logos";
import Footer from "./Footer";


export default function App() {

    return (

        <>
            <Header />
            <Section2 />
            <Webpresence />
            <Work />
            <Products />
            <Culture />
            <Teamwork />
            <ThreeImages />
            <Paragraph />
            <Clients />
            <Logos />
            <Footer />
            <Routes>
                <Route />
            </Routes>
        </>

    )
}
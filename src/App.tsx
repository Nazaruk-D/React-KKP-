import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Rating/Raiting";
import {OnOff} from "./components/OnOff/OnOff";


//function declaration

function hello() {
    alert('Hello IT-kamasutra')
}

// hello()


function App(props: any) {
    console.log("App rendering")
    return (
        <>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            {/*<Raiting value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <OnOff value={false}/>
            <OnOff value={true}/>
        </>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}
;





export default App;

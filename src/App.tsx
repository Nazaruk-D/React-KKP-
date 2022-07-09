import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Rating/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";


//function declaration

function App(props: any) {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            {/*<Raiting value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <OnOff/>
            {/*<OnOff/>*/}
        </div>
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

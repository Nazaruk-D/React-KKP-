import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting, RatingValueType} from "./components/Rating/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


//function declaration

function App(props: any) {
    console.log("App rendering")

    let [raitingValue, setRaitingValue] = useState<RatingValueType>(2)
    let [accordionValue, setAccordionValue] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu"} onClick={()=>setAccordionValue(!accordionValue)} collapsed={accordionValue} />
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>
            <Raiting value={raitingValue} onClick={setRaitingValue}/>
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

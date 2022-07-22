import React from "react";

type AccordionPropsType = {
    titleValue: string
    onClick: () => void
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
            {/*{props.collapsed === false && <AccordionBody/> }*/}
        </div>
    );
}

type AccordionTitlePropsType = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={e => props.onClick()}> {props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}


export default Accordion;

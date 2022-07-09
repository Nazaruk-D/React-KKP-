import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed,setCollapsed] = useState(false)
    const onCLickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {collapsed && <AccordionBody/>}
            <button onClick={onCLickHandler}>Toggle</button>
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <>
            <h3> {props.title}</h3>
        </>
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


export default UncontrolledAccordion;
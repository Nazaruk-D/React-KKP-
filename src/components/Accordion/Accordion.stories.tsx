import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: "Accordion stories",
    components: Accordion
};

const callback = action("Accordion mode change event fired")

export const CollapsedMod = () => <Accordion titleValue={"Menu"} onClick={callback} collapsed={true}/>
export const UnCollapsedMod = () => <Accordion titleValue={"Menu"} onClick={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"} onClick={()=>setValue(!value)} collapsed={value}/>
}

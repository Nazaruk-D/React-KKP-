import React from "react";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";



export default {
    title: "UncontrolledAccordion stories",
    components: UncontrolledAccordion
};

// const callback = action("Accordion mode change event fired")

export const UncontrolledAccordionMode = () => <UncontrolledAccordion titleValue={'Menu'}/>


import React from "react";
import s from "./OnnOff.module.css"


type OnOffPropsType = {
    value: boolean
};

export const OnOff = (props: OnOffPropsType) => {
    return (
        <table>
            <tbody>
            {/*<tr>*/}
            {/*    <td className={s.on}><span>Onn</span></td>*/}
            {/*    <td className={s.off}><span>Off</span></td>*/}
            {/*    <th>*/}
            {/*        <div className={s.circleGreen}></div>*/}
            {/*    </th>*/}
            {/*</tr>*/}
            <tr>
                <td className={(props.value ? s.on : s.grey)}><span>On</span></td>
                <td className={(!props.value ? s.off : s.grey)}><span>Off</span></td>
                <th>
                    <div className={(props.value ? s.circleGreen : s.circleRed)}></div>
                </th>
            </tr>
            </tbody>
        </table>
    )
}
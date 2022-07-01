import React, {useState} from "react";
import s from "./OnnOff.module.css"


type OnOffPropsType = {
    // value: boolean
};


export const OnOff = (props: OnOffPropsType) => {

    const [a, setA] = useState("On");

    function onClickHandler(value: string) {
        setA(value);
    }

    if (a === "Off") {
        return (
            <table>
                <tbody>
                <tr>
                    <button onClick={() => onClickHandler("On")}>
                        <td className={s.grey}><span>On</span></td>
                    </button>
                    <button onClick={() => onClickHandler("Off")}>
                        <td className={s.off}><span>Off</span></td>
                    </button>
                    <th>
                        <div className={s.circleRed}></div>
                    </th>
                </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <table>
                <tbody>
                <tr>
                    <button onClick={() => onClickHandler("On")}>
                        <td className={s.on}><span>On</span></td>
                    </button>
                    <button onClick={() => onClickHandler("Off")}>
                        <td className={s.grey}><span>Off</span></td>
                    </button>
                    <th>
                        <div className={s.circleGreen}></div>
                    </th>
                </tr>
                </tbody>
            </table>
        )
    }
}


////////////////////////код, который работает от booleva значения
//
// export const OnOff = (props: OnOffPropsType) => {
//     return (
//         <table>
//             <tbody>
//             {/*<tr>*/}
//             {/*    <td className={s.on}><span>Onn</span></td>*/}
//             {/*    <td className={s.off}><span>Off</span></td>*/}
//             {/*    <th>*/}
//             {/*        <div className={s.circleGreen}></div>*/}
//             {/*    </th>*/}
//             {/*</tr>*/}
//             <tr>
//                 <button onClick={onClickHandler}>
//                     <td className={(props.value ? s.on : s.grey)}><span>On</span></td>
//                 </button>
//                 <button onClick={onClickHandler}>
//                     <td className={(!props.value ? s.off : s.grey)}><span>Off</span></td>
//                 </button>
//                 <th>
//                     <div className={(props.value ? s.circleGreen : s.circleRed)}></div>
//                 </th>
//             </tr>
//             </tbody>
//         </table>
//     )
// }
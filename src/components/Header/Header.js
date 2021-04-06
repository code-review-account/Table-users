import React from 'react';
import ContextData from '../../Context/Data/ContextData';
import CheckBox from '../Table/UI/CheckBox';
import './style.header.scss'
const Header = ()=> {
    const {stateData, dispatchData} = React.useContext(ContextData)

    const selectAll = (event)=>{
        let arr = stateData.data
        for(let i = 0; i< arr.length; i++){
            arr[i].select = event.target.checked     
        }    
    dispatchData({
        type: "RE_CHACK",
        payload: arr
       })
       btnAllRender(event)

    }

    const btnAllRender = (event) =>{
        let arr = stateData
         arr.delBtn = 1
           if (event.target.checked === true) { arr.delBtn = 2 } 
    }
    return(
        <tr className="header">
            <td><label className="divC"><CheckBox className="chackbox" onChange={selectAll}/><span className="fake"></span></label></td>
            <td>№</td>
            <td>ФИО</td>
            <td>Возраст (Лет)</td>
            <td>Рост</td>
            <td>Вес</td>
            <td>Зарплата</td>
            <td></td>
            <td></td>
        </tr>
    )
}
export default Header
import React from 'react';
import CheckBox from '../Table/UI/CheckBox';
import Trash from './icons/trash';
import RowTR from './UI/RowTR';
import './Row.scss'
import Pencil from './icons/pencil';
import ContextData from '../../Context/Data/ContextData';

const Row = ({elem, indexOf})=> {
    const {stateData, dispatchData} = React.useContext(ContextData)
    const deleteRow =()=>{
        let result = stateData.data
        result.splice(indexOf-1, 1)
        dispatchData({
            type: "DELETE_DATA",
            payload: result
           })
    }
    function timeConverter(){
        let year = new Date(elem.date_of_birth * 1000)
        let birthYear = year.getFullYear()
        let now = new Date();
        let nowYear = now.getFullYear()
        return(
            nowYear-birthYear
        )
    }

const heightConverter = (height) => {
    let fut = height.slice(0, height.search("'"))
    let duim = height.slice(height.search("'")+1,  height.search('"'))
    let heightInCM = Math.trunc(30.48*fut+2.54*duim)
    let heightM = Math.trunc(heightInCM/100)
    let heightСM = heightInCM - heightM*100
    return(
        `${heightM}м ${heightСM}см`
    )
}

const weightConverter = (weight) =>{
    let kg = weight/2.20462
    return(
        Math.trunc(kg)
    )
}

const calculateBGColor =()=>{
    if (elem.id % 2 === 0) {
        return('#ffffff')
    } else {
        return('#fafafa') 
    }
}

const reChack = (ev)=>{
    let result = stateData.data
    result[indexOf-1].select = ev.target.checked
    dispatchData({
        type: "RE_CHACK",
        payload: result
       })
       btnRender(ev) 
}

const btnRender = (ev) =>{
    let arr = stateData
     arr.delBtn = 1
     for(let i = 0; i< arr.data.length; i++){
       if (arr.data[i].select === !ev.target.checked) { arr.delBtn = 2 }
     }   
}
        
    return(
        <RowTR background={calculateBGColor()}>
            <td><CheckBox onChange={reChack} checked={elem.select} /></td>
            <td>{indexOf}</td>
            <td>{elem.first_name} {elem.last_name}</td>
            <td>{timeConverter()}</td>
            <td>{heightConverter(elem.height)}</td>
            <td>{weightConverter(elem.weight)} кг</td>
            <td>${elem.salary}</td>
            <td><Pencil/></td>
            <td onClick={deleteRow}><Trash/></td>
        </RowTR>
    )
}

export default Row
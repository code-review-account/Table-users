import React from 'react';
import ContextData from '../../Context/Data/ContextData';
import ButtonDel from '../ButtonDel/ButtonDel';
import Table from '../Table/Table';
import Title from '../Title/Title';
import './style.modules.scss'

const Container = ()=>{
    const {stateData, dispatchData} = React.useContext(ContextData)
    const deleteRowIfChack = ()=>{
        let res = stateData.data
        let arrToDel = res.filter(ele => ele.select === false) 
        dispatchData({
            type: "DELETE_DATA",
            payload: arrToDel
           })
     }

    const btnColor = ()=>{
         let btnInfo = stateData.delBtn
        let calcColor = '#dadada'
            if(btnInfo === 2){calcColor='#fff'}
         return(calcColor)
    }
    const btnBG = ()=>{
        let btnInfo = stateData.delBtn
       let calcColor = '#fff'
           if(btnInfo === 2){calcColor='#0085be'}
        return(calcColor)
   }



    return(
        <div className="main">
           <Title/>
           <Table/>
          <div className="btndiv" ><ButtonDel className="btndel" onClick={deleteRowIfChack} btnBG={btnBG} btnColor={btnColor}>Удалить выбранные</ButtonDel></div>
        </div>
    )
}
export default Container
import React from 'react';
import ContextData from '../../Context/Data/ContextData';
import NET from '../../network';
import Header from '../Header/Header';
import Row from '../Row/Row';
import './style.table.scss'



const Table = ()=>{
    
    const {stateData, dispatchData} = React.useContext(ContextData)
    const users = stateData.data
    React.useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await fetch(NET.APP_URL)
          if (response.status === 200) {
            const result = await response.json()
            dispatchData({
              type: "FETCH_DATA",
              payload: result
             })
          }
        } catch (e) {
          console.log(e)
        }
      }

      const fetchRates = async () => {
        try {
          const response = await fetch(NET.RATES_URL)
          if (response.status === 200) {
            const rates = await response.json()
            dispatchData({
              type: "Add_RATES",
              payload: rates.rates.USD
             })
          }
        } catch (e) {
          console.log(e)
        }
      }
      fetchRates()
      fetchData()
    }, [])

    if (!users) {return null}
    return(        
      <table className='users'>
         <Header/>
         {users && users.map((elem, index) => (
         <Row elem={elem} indexOf={users.indexOf(elem)+1} key={index} />
         ))}
      </table>
    )
}
export default Table
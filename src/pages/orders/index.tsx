import { useEffect, useState } from "react";
import DateCmp from "../../components/date";
import ValueCard from "../../components/valueCard";
import OrdersGraph from "../../components/ordersGraph";
import OrdersTable from "../../components/ordersTable";

const Orders = () => {
    const percentsData = [
        {
            text:"Revenue",
            percent:22,
            value:7825,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Orders",
            percent:-25,
            value:920,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Visitors",
            percent:49,
            value:15500,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Conversion",
            percent:1.9,
            value:28,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        }
    ]
    const [selectedDate, setSelectedDate] = useState('');
    useEffect(()=>{

    },[selectedDate,setSelectedDate])
  const handleDateChange = (date:string) => {
    setSelectedDate(date);
    console.log(date + " değeri ile tarih sorgusu atıldı")
  };
    return(
        <>
         <div className="flex justify-between m-5">
        <div className="text-2xl font-inter font-medium leading-9">
          Orders
        </div>
        <div>
            <DateCmp onDateChange={handleDateChange}/>
            <button onClick={()=>{
            }}>
            <img src="../../../src/assets/more.png" className="ml-5 hover:scale-110" alt="" />
            </button>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
      {percentsData.map((item,key:number)=>{
        return(
            <div key={key} className="m-5"><ValueCard data={item}/></div>
        )
      })}
</div>
<div className="m-5">
<OrdersGraph/>
</div>
     <div className="m-5">
     <OrdersTable/>
     </div>
      
        </>
    )
}

export default Orders
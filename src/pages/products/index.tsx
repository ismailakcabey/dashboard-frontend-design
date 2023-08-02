import { useEffect, useState } from "react";
import DateCmp from "../../components/date"
import ValueCard from "../../components/valueCard";
import GraphCmp from "../../components/ordersGraph";
import Box from "../../components/box";

const Products = () => {
    const percentsData = [
        {
            text:"Revenue",
            percent:22,
            value:75.620,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Orders Paid",
            percent:5.7,
            value:520,
            isPercent:true,
            isPrice:false,
            isPercentValue:true
        },
        {
            text:"Refunds",
            percent:-18,
            value:7.283,
            isPercent:true,
            isPrice:false,
            isPercentValue:true
        },
        {
            text:"Conversion",
            percent:1.9,
            value:28,
            isPercent:true,
            isPrice:false,
            isPercentValue:true
        }
    ]
    const data = [
        {
            "name": "Data",
            "day": "2",
            "gdp": 120
        },
        {
            "name": "Data",
            "day": "4",
            "gdp": 130
        },
        {
            "name": "Data",
            "day": "6",
            "gdp": 140
        },
        {
            "name": "Data",
            "day": "8",
            "gdp": 125
        },
        {
            "name": "Data",
            "day": "10",
            "gdp": 160
        },
        {
            "name": "Data",
            "day": "12",
            "gdp": 110
        },
        {
            "name": "Data",
            "day": "14",
            "gdp": 170
        },
        
    ]
    const [selectedDate, setSelectedDate] = useState('');
    useEffect(()=>{

    },[selectedDate,setSelectedDate])
  const handleDateChange = (date:string) => {
    setSelectedDate(date);
    console.log(date + " değeri ile tarih sorgusu atıldı")
  }
  const boxDetails = [
    {
        image:'../../../src/assets/folder.png',
        title:'In Stock',
        detail:'9,520'
    },
    {
        image:'../../../src/assets/map-pin.png',
        title:'Colors',
        detail:'Black, White, Blue, Yellow'
    },
    {
        image:'../../../src/assets/calendar.png',
        title:'Start Time',
        detail:'September 30, 2018'
    },
    {
        image:'../../../src/assets/bag.png',
        title:'Lige Time Sells',
        detail:'40,02,030'
    }
  ]
    return(
        <>
         <div className="flex justify-between m-5">
        <div className="text-2xl font-inter font-medium leading-9 flex flex-row">
        <div className="m-1" style={{color:"#FF8901"}}>Products</div>
        <div className="m-1" style={{color:"#1C2A53"}}> / Basket with handles</div>
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
      <div className="flex justify-around flex-row m-5 max-lg:flex-col">
      <div className="m-5 basis-1/3 bg-white rounded-lg px-5 py-5"><Box details={boxDetails} baseImage="../../../src/assets/clock.png" baseTitle="Analog Table Clock" secondTitle="General"/></div>
        <div className="m-5 flex-grow bg-white rounded-lg px-5 py-5"><GraphCmp data={data} isHeader={true} buttonName="View Details" isXAxis={true} isYAxis={true} details="Revenue" router=""/></div>
      </div>

        </>
    )
}

export default Products
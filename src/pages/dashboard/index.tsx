import { useEffect, useState } from "react"
import CartDashboard from "../../components/cartDashGraph"
import DashboardGraph from "../../components/dashboardGraph"
import DateCmp from "../../components/date"
import ValueCard from "../../components/valueCard"
import TrafficGraph from "../../components/trafficGraph"

const DashBoardPage = () => {
    const percentsData = [
        {
            text:"Revenue",
            percent:22,
            value:7825
        },
        {
            text:"Orders",
            percent:-25,
            value:920
        },
        {
            text:"Visitors",
            percent:49,
            value:15500
        },
        {
            text:"Conversion",
            percent:1.9,
            value:28
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
          Dashboard
        </div>
        <div>
            <DateCmp onDateChange={handleDateChange}/>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
      {percentsData.map((item,key:number)=>{
        return(
            <div key={key} className="m-5"><ValueCard data={item}/></div>
        )
      })}
</div>
      <div className="flex justify-around flex wrap flex-col lg:flex-row">
        <div className="bg-white px-5 py-5 m-5 rounded-lg w-10/10 lg:w-3/4 hover:scale-105"><DashboardGraph/></div>
        <div className="w-2/5 bg-white px-5 py-5 m-5 rounded-lg w-full lg:w-1/4 hover:scale-105"><CartDashboard/></div>
      </div>

      <div>
        <TrafficGraph/>
      </div>

        </>
    )
}

export default DashBoardPage
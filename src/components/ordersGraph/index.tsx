import { Line, LineConfig } from "@ant-design/plots";
import { Tooltip } from "antd";

const OrdersGraph = () => {
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
    const config: LineConfig = {
        data,
        xField: 'day',
        yField: 'gdp',
        seriesField: 'name',
        color:["#FF8901","#FF392B","#2F80ED"],
        scrollbar: {
            type: 'horizontal',
          },
          yAxis: {
            label: {
                formatter: (v: any) => `${v}`, // Etiket formatını belirleyin
                //@ts-ignore
                visible: true, // Etiketleri görünür yapın
            },
        },
        legend: false,
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
        lineStyle:{
            lineWidth:5
        },
        tooltip:{
            customContent:(title:any,data:any)=>{
                return(
                    <div style={{backgroundColor:"#FF8901",margin:"-25px -25px -25px -25px"}} className="rounded-lg">
                        <div className="m-5 text-white font-semibold text-xl" style={{backgroundColor:"#FF8901"}} >{data[0]?.data?.gdp}</div>
                    </div>
                )
            }
        }
    };
    return(
        <div className=" bg-white rounded-lg px-5 py-5">
        <div className="flex justify-between flex wrap">
                <div className="text-sm m-5 leading-8 flex" style={{color:"#1C2A53"}}>
                    <div className="mr-5 mt-3">
                        <img src="../../../src/assets/dot3.png" alt="" />
                    </div>
                    <div>Orders Update</div>
                </div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>View Details</div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
        </div>
        <div style={{ color: "#8E95A9" }} className="font-medium text-sm">
                <Line {...config} />
            </div>
        </div>
    )
}

export default OrdersGraph
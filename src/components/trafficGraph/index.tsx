import RevuenceTraffic from "./revuence"
import TrafficGraphModal from "./traffic"

const TrafficGraph = () => {
    
    return(
        <>
        <div className="flex justify-around  flew-row max-lg:flex-col">
            <div className="bg-white px-5 py-5 m-5 rounded-lg hover:scale-105"><RevuenceTraffic/></div>
            <div className="bg-white px-5 py-5 m-5 rounded-lg hover:scale-105"><TrafficGraphModal/></div>
        </div>
        </>
    )
}

export default TrafficGraph
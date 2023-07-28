import RevuenceTraffic from "./revuence"

const TrafficGraph = () => {
    
    return(
        <>
        <div className="flex justify-around flex-col  md:flex-row">
            <div className="bg-white px-5 py-5 m-5 rounded-lg hover:scale-105"><RevuenceTraffic/></div>
            <div className="bg-white px-5 py-5 m-5 rounded-lg hover:scale-105">2</div>
        </div>
        </>
    )
}

export default TrafficGraph
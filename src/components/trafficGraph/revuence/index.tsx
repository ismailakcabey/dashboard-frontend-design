import { Pie, PieConfig } from "@ant-design/plots";

const RevuenceTraffic = () => {
    const data = [
        {
          type: 'Desktop',
          value: 65.2,
        },
        {
            type: 'Mobile',
            value: 18.6,
          },
          {
            type: 'Tablet',
            value: 10.3,
          },
          {
            type: 'Unknow',
            value: 5.8,
          },
      ];
      const config:PieConfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: false,
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        color: ['#FF392B', '#2F80ED', '#00C3F8', '#FF8901'], // Turuncu, Kırmızı, Mavi ve Turkuaz renkleri
        statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
          },
      };
    return (
        <div className="px-5 py-5">
            <div className="flex justify-around">
                <div className="text-xl font-medium m-5 leading-8">
                    Revenue by device
                </div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>More </div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>

        <div>
        <Pie {...config} />
        </div>
        </div>
    )
}

export default RevuenceTraffic
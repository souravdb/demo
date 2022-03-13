import React from "react"
import moment from 'moment'

const style = {
    padding: 6,
    backgroundColor: "#fff",
    border: "1px solid #ccc"
}

const CustomToolTip = props => {
    const { active, payload } = props
    if (active) {
        const currData = payload && payload.length ? payload[0].payload : null

        return (
            <div className="area-chart-tooltip" style={style}>

                {/* <span className='font-semibold hover:text-blue-600 p-2'>
                    {moment(currData).format('MMM-YY') ? moment(new Date(currData.date)).format('MMM-YY') : " -- "}
                </span> */}

                <span className='font-semibold text-blue-600 pb-4'>
                    {currData ? currData.name : " -- "}
                </span>

                {/* <Bar yAxisId={0} dataKey="pv" barSize={20} fill="#413ea0" />
                <Line yAxisId={1} type="monotone" dataKey="uv" stroke="#ff7300" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}

                <p>
                    <span fill="#ff7300">
                        {currData ? "amt: " : " -- "}
                    </span>
                    <span >
                        {currData ? currData.amt : " -- "}
                    </span>
                </p>

                <p className='text-xs'>
                    <span className="font-semibold text-sm p-2">
                        {currData ? "uv: " : " -- "}
                    </span>
                    <span className="text-xs p-2">
                        {currData ? currData.uv : " -- "}
                    </span>
                </p>

                <p className='text-xs'>
                    <span className="font-semibold text-sm p-2">
                        {currData ? "pv: " : " -- "}
                    </span>
                    <span className="text-xs p-2">
                        {currData ? currData.pv : " -- "}
                    </span>
                </p>
            </div>
        )
    }

    return null
}

export default CustomToolTip

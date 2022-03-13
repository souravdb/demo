import React, { PureComponent } from 'react'
import moment from 'moment'
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
// import CustomToolTip from "../styles/CustomToolTip"

const data = [
    { sprint: 'S-01', story: 'US-12345', product: 'P-A', storyPoints: 3, cycleTime: 5, leadTime: 40, sprintEndDate: new Date(2022, 1, 14).getTime() },
    { sprint: 'S-01', story: 'US-22377', product: 'P-B', storyPoints: 5, cycleTime: 7, leadTime: 56, sprintEndDate: new Date(2022, 1, 28).getTime() },
    { sprint: 'S-01', story: 'US-31242', product: 'P-C', storyPoints: 3, cycleTime: 8, leadTime: 98, sprintEndDate: new Date(2022, 2, 11).getTime() },
    { sprint: 'S-02', story: 'US-34565', product: 'P-D', storyPoints: 5, cycleTime: 13, leadTime: 28, sprintEndDate: new Date(2022, 2, 25).getTime() },
    { sprint: 'S-02', story: 'US-42367', product: 'P-E', storyPoints: 8, cycleTime: 10, leadTime: 64, sprintEndDate: new Date(2022, 3, 11).getTime() },
    { sprint: 'S-02', story: 'US-57355', product: 'P-A', storyPoints: 1, cycleTime: 2, leadTime: 70, sprintEndDate: new Date(2022, 3, 25).getTime() },
    { sprint: 'S-03', story: 'US-76341', product: 'P-C', storyPoints: 13, cycleTime: 15, leadTime: 75, sprintEndDate: new Date(2022, 4, 8).getTime() },
]

function CustomTooltip({ payload, label, active }) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label border-b pb-4 font-semibold text-lg">{`${moment(label).format('DD-MMM-YY')}`}</p>

                {payload.map((item, index) => (
                    <p key={index} className="label">
                        <span className="font-semibold text-sm">{`${item.name}: `}</span>
                        <span className="text-sm">{item.value}</span>
                    </p>
                ))}
            </div>
        );
    }

    return null;
}

export default class Chart extends PureComponent {
    render() {
        return (
            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />

                        <XAxis
                            dataKey="sprintEndDate"
                            tickFormatter={(date) => moment(date).format('DD-MMM-YY')}
                            padding={{ left: 20, right: 20 }}
                            type='number'
                            domain={['auto', 'auto']}
                            scale="time"
                            props={{ fontSize: 16, fontWeight: 800 }}
                        />

                        <Bar yAxisId={0} dataKey="cycleTime" name="Cycle Time" barSize={20} fill="#4682B4" stroke="#203354" />
                        <Line yAxisId={1} type="monotone" dataKey="leadTime" name="Lead Time" stroke="#B61500" />
                        <Area type="monotone" dataKey="storyPoints" name="Points" fill="#EAB42A" stroke="#FF6347" />
                        {/* <Area type="monotone" dataKey="storyPoints" name="Points" fill="#8884d8" stroke="#8884d8" /> */}
                        <Line dataKey="product" name="Product" height="0" legendType="none" />
                        <Line dataKey="sprint" name="Sprint" height="0" legendType="none" />
                        <Line dataKey="story" name="Story" height="0" legendType="none" />

                        <YAxis yAxisId={0} orientation="right" label={{ value: 'Cycle Time', angle: -90, position: 'outsideRight', fontSize: 16, fontWeight: 800 }} />
                        <YAxis yAxisId={1} label={{ value: 'Lead Time', angle: -90, margin: 100, position: 'insideLeft', fontSize: 16, fontWeight: 800 }} />

                        {/* <Tooltip content={<CustomToolTip />} /> */}
                        <Tooltip content={<CustomTooltip />} />
                        {/* <Tooltip /> */}

                        <Legend />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
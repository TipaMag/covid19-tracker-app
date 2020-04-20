import React, { useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

const ChartContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
`

const Chart = ({ data }) => {
    return (
        <ChartContainer>
            {data.length &&
                <Line
                    data={{
                        labels: data.map(({ date }) => date),
                        datasets: [
                            {
                                label: 'Confirmed',
                                data: data.map(({ confirmed }) => confirmed),
                                backgroundColor: 'rgba(223, 175, 17, 0.4)',
                                borderColor: 'rgba(223, 175, 17, 0.7)',
                                borderWidth: 2,
                                hoverBackgroundColor: 'rgba(223, 175, 17, 0.9)',
                                hoverBorderColor: 'rgba(223, 175, 17, 1)',
                            },
                            {
                                label: 'Death',
                                data: data.map(({ deaths }) => deaths),
                                backgroundColor: 'rgba(223, 17, 17, 1)',
                                borderColor: 'rgba(223, 17, 17, 0.7)',
                                borderWidth: 2,
                                hoverBackgroundColor: 'rgba(223, 17, 17, 0.9)',
                                hoverBorderColor: 'rgba(223, 17, 17, 1)',
                            }
                        ]
                    }}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            }
        </ChartContainer>
    )
}
export default Chart
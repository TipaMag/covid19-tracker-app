import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'
import { api } from '../../api/api'

const ChartContainer = styled.div`
    padding: 10px;
`
const ChartBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
    border-radius: 10px;
`

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    let [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await api.getDaily())
        }
        getDailyData()
    }, [])

    const lineChart = (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        label: 'Confirmed',
                        data: dailyData.map(({ confirmed }) => confirmed),
                        backgroundColor: 'rgba(223, 175, 17, 0.4)',
                        borderColor: 'rgba(223, 175, 17, 0.7)',
                        borderWidth: 2,
                        hoverBackgroundColor: 'rgba(223, 175, 17, 0.9)',
                        hoverBorderColor: 'rgba(223, 175, 17, 1)',
                    },
                    {
                        label: 'Death',
                        data: dailyData.map(({ deaths }) => deaths),
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
    )
    const barChart = (
        confirmed ?
            (<Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            data: [confirmed.value, recovered.value, deaths.value],
                            backgroundColor: ['yellow', 'green', 'red'],
                            borderColor: 'rgba(223, 175, 17, 0.7)',
                        },
                    ]
                }}
                width={100}
                height={300}
                options={{
                    maintainAspectRatio: false,
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />) : null
    )

    return (
        <ChartContainer>
            <ChartBody>
                {country
                    ? barChart
                    : lineChart
                }
            </ChartBody>
        </ChartContainer>
    )
}
export default Chart
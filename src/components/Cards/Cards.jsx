import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import { api } from '../../api/api'

const StyledContainer = styled(Grid)`
    margin: 30px 0;
`
const StyledCard = styled(Grid)`
    margin: 0 2% 20px 2%;
    background-color: #EBECF0;
    box-shadow:  3px 3px 5px #BABECC,  -5px -5px 10px #FFF;
    
    ${({ infected }) =>
        infected &&
        css`
        border-bottom: 10px solid yellow;
    `};
    ${({ recovered }) =>
        recovered &&
        css`
        border-bottom: 10px solid green;
    `};
    ${({ death }) =>
        death &&
        css`
        border-bottom: 10px solid red;
    `};
`

const Cards = ({country}) => {
    let [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            setData(await api.getData(country))
        }
        getData()
    }, [country])

    if (!data.confirmed) {
        return null
    }
    return (
        <StyledContainer>
            <Grid container justify='center'>
                <StyledCard infected="true" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varian="h5">
                            <CountUp start={0} end={data.confirmed.value} duration={1.5} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </StyledCard>
                <StyledCard recovered="true" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varian="h5">
                            <CountUp start={0} end={data.recovered.value} duration={1.5} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of COVID-19</Typography>
                    </CardContent>
                </StyledCard>
                <StyledCard death="true" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography varian="h5">
                            <CountUp start={0} end={data.deaths.value} duration={1.5} separator=" " />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </StyledCard>
            </Grid>
        </StyledContainer>

    )
}
export default Cards
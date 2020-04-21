import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { api } from '../../api/api'
import styled from 'styled-components'

const StyledItem = styled(Grid)`
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
`

const CountryPicker = ({ onSelectCountry }) => {
    let [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountriesData = async () => {
            setCountries(await api.getCountries())
        }
        getCountriesData()
    }, [])

    return (
        <Grid container justify='center'>
            <StyledItem item component={FormControl}>
                <NativeSelect onChange={(e) => onSelectCountry(e.target.value)}>
                    <option value=''>Global</option>
                    {countries &&
                        countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </StyledItem>
        </Grid>
    )
}

export default CountryPicker
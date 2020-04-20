import React from 'react'
import { Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

const CountryPicker = ({ countries, onSelectCountry }) => {

    return (
        <Grid container justify='center'>
            <Grid item component={FormControl}>
                <NativeSelect onChange={(e) => onSelectCountry(e.target.value)}>
                    <option value='global'>Global</option>
                    {countries &&
                        countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </Grid>
        </Grid>
    )
}

export default CountryPicker
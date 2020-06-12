import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountrySelector.module.css'
import { fetchCountries } from '../../api'

const CountrySelector = ( { handleCountryChange } ) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setfetchedCountries(await fetchCountries());
        }
        fetchCountriesAPI();
    }, [setfetchedCountries])
    
    console.log(fetchedCountries);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;
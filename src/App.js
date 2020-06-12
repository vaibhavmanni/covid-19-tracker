import React, { Component } from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountrySelector from './components/CountrySelector/CountrySelector'
import Image from './images/covid.png'

import styles from './App.module.css'

import { fetchData } from './api'

export default class App extends Component {
    
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img src={Image} className={styles.image} alt='COVID-19'/>
                <CountrySelector handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}


import './App.css';
import React, { Component } from 'react'
import { TableContainer } from './components/table-container/table-container.component';
import { ContinentButtons } from './components/continent-buttons/continent-buttons.component';

const requestOptions = {
  method: 'GET',
  headers: { 
    'Content-Type': 'application/json',
    'User-Agent': 'PostmanRuntime/7.28.4',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
   }
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      covidstatus: [],
      searchField: 'All'
    };
  }

  componentDidMount(){ 
    this.fetchAllCountries();  
  }

  fetchAllCountries = () => {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday=&sort=', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ covidstatus: data})
          console.log(data);
        });
  }

  changeContinent = (e) => {
    this.setState({ searchField: e});
  }
  filterData = () => {
    let continent = this.state.searchField;
    //this.fetchAllCountries();
    return this.state.covidstatus.filter(x => x.continent === continent);
  }

  render(){
    let {covidstatus, searchField} = this.state;
    let covidData = searchField === "All" ? covidstatus : this.filterData();
    return (
      <div className="App">
        <h1>Covid-19 Status Worldwide</h1>
        <ContinentButtons changeContinent={this.changeContinent}/>
        <TableContainer covidStatus={covidData}/>
      </div>
     
    );
  }
}


export default App;

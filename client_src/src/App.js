import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './App.css';

import HeaderNav from './components/headerNav';
import ExchangeChart from './components/exchangeChart';
import ExchangeSpreadMessage from './components/exchangeSpreadMessage';
import ExchangesSpreadBarChart from './components/exchangeSpreadBarChart';
import ExchangeTable from './components/exchangeTable';
import FooterNav from './components/footerNav';

import Spinner from './UI/Spinner';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bitflyers: [],
      coinchecks: [],
      quoinexs:[],
      // quoines: [],
      zaifs: [],
      btcboxs: [],
      bitbanks: [],
      // error: null,
      // isLoaded: false
    }
    // console.log('[App] constructor', this.state);
  }


  componentWillMount() {
    // this.fetchDataExchanges('componentWillMount');
    this.allExchangeTicker();
    // console.log('[App] componentWillMount', this.state);
  }

  componentDidMount(){
    // this.appComponent = setInterval( () => this.allExchangeTicker(), 30000);
    // console.log('[App] componentDidMount', this.state);
  }

  componentWillUnmount(){
    clearInterval(this.appComponent);
  }

  allExchangeTicker = () => {
    this.fetchDataTickers('bitflyers', 'Bitflyer');
    this.fetchDataTickers('coinchecks', 'Coincheck');
    this.fetchDataTickers('quoinexs', 'Quoinex');
    this.fetchDataTickers('zaifs', 'Zaif');
    this.fetchDataTickers('btcboxs', 'Btcbox');
    this.fetchDataTickers('bitbanks', 'Bitbank');
  }

  fetchDataTickers = (brokers, Broker) => {
    this.brokers = brokers;
    axios.get(`http://localhost:4000/api/${brokers}/tickers`)
      .then(res => {
        let exchanges = [];
        exchanges[brokers] = res.data[Broker].map(fetchData => {
          let utcTime  = moment.utc(fetchData.datetime).toDate();
          return {
            ...fetchData,
            name: `${Broker}`,
            localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
          };
        });
        this.setState({ [brokers]: exchanges[brokers] });
      }
    );
  }

  // fetchDataExchanges = (phase) => {
  //   if(phase === 'componentWillMount'){
  //     this.setState({ isLoaded: true });
  //   }
  //   let bitflyers, coincheck, quoinexs, zaifs, btcboxs, bitbanks = [];
  //   axios.get(`http://localhost:4000/api/bitflyers/tickers`)
  //     .then(res => {
  //       const exchanges = res.data;
  //       bitflyers = exchanges.Bitflyer.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Bitflyer',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //     });
  //   console.log('bitflyers', bitflyers);
  //   axios.get(`/api/exchange`)
  //     .then(res => {
  //       const exchanges = res.data;
  //       const coinchecks = exchanges.Coincheck;
  //       const updateCoinchecks = coinchecks.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Coincheck',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //       const quoines = exchanges.Quoine;
  //       const updateQuoines = quoines.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Quoine',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //       const zaifs = exchanges.Zaif;
  //       const updateZaifs = zaifs.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Zaif',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //       const btcboxs = exchanges.Btcbox;
  //       const updateBtcboxs = btcboxs.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Btcbox',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //       const bitbanks = exchanges.Bitbank;
  //       const updateBitbanks = bitbanks.map(fetchData => {
  //         const utcTime  = moment.utc(fetchData.datetime).toDate();
  //         return {
  //           ...fetchData,
  //           name: 'Bitbank',
  //           localTime: moment(utcTime).format('YYYY-MM-DD HH:mm:ss')
  //         }
  //       });
  //       if(phase === 'componentWillMount'){
  //         this.setState({
  //           // bitflyers: updateBitflyers,
  //           coinchecks: updateCoinchecks,
  //           quoines: updateQuoines,
  //           zaifs: updateZaifs,
  //           btcboxs: updateBtcboxs,
  //           bitbanks: updateBitbanks,
  //           isLoaded: false
  //         });
  //       } else {
  //         this.setState({
  //           // bitflyers: updateBitflyers,
  //           coinchecks: updateCoinchecks,
  //           quoines: updateQuoines,
  //           zaifs: updateZaifs,
  //           btcboxs: updateBtcboxs,
  //           bitbanks: updateBitbanks,
  //         });
  //       }
  //     });
  //     .catch(error =>{
  //       this.setState({ error });
  //     });
  // }

  render() {

    const { bitflyers, coinchecks, quoinexs, zaifs, btcboxs, bitbanks } = this.state;
    // console.log('[App] render isLoaded(ture)', this.state);
    if(!(bitflyers.length > 0 && coinchecks.length > 0 && quoinexs.length > 0 && zaifs.length > 0 && btcboxs.length > 0 && bitbanks.length > 0 )){
      return <Spinner className="container position-ref full-height" />;
      // console.log('[App] render array(ture)');
    }

    // if(isLoaded){
    //   return <Spinner className="container position-ref full-height" error={error} />;
    // }
    // console.log('[App] render isLoaded(false)', this.state);

    return (
      <div className="">
        <HeaderNav />
        <ExchangeChart
          bitflyers={bitflyers}
          coinchecks={coinchecks}
          quoinexs={quoinexs}
          zaifs={zaifs}
          btcboxs={btcboxs}
          bitbanks={bitbanks}
        />
        <ExchangeSpreadMessage
          bitflyer={bitflyers[0]}
          coincheck={coinchecks[0]}
          quoinex={quoinexs[0]}
          zaif={zaifs[0]}
          btcbox={btcboxs[0]}
          bitbank={bitbanks[0]}
        />
        <ExchangesSpreadBarChart
          bitflyer={bitflyers[0]}
          coincheck={coinchecks[0]}
          quoinex={quoinexs[0]}
          zaif={zaifs[0]}
          btcbox={btcboxs[0]}
          bitbank={bitbanks[0]}
        />
        <ExchangeTable
          bitflyer={bitflyers[0]}
          coincheck={coinchecks[0]}
          quoinex={quoinexs[0]}
          zaif={zaifs[0]}
          btcbox={btcboxs[0]}
          bitbank={bitbanks[0]}
        />
        <FooterNav />
      </div>
    );
  }
}

export default App;

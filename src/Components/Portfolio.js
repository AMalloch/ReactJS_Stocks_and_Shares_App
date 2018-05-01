import React from 'react';
import DisplayShare from './DisplayShare';
import _ from 'lodash';

const Portfolio = (props) => {

  const options = props.portfolio.map((share, index) => {
    return <option key={index} value={index}>{share.companyName}</option>
  });

  const handlePortfolioSelect = (event) => {
    // debugger;
    let index = event.target.value;
    props.onCurrentShare(index);
  }

  // const sellShares = (share) => {
  //   for(share of portfolio){
  //     if(share.)
  //   }
  //
  // }

  //sell button when clicked, will remove the selected share from the portfolio array.

  //once removed, loop through the array and count the price*quantity of each remaining share

  //add total to a variable that can then store the totalValue of shares held

  //

  // the profit/loss should then be updated in the database

  const totalValue = () => {
    let total = 0;
    for(let share of props.portfolio){
      total+=share.price * share.volume;
    }
    return total;
  }

  const handleButton = ()=>{
    console.log("Sell Button clicked");
  }
  return (
    <React.Fragment>
      <select
        onChange={handlePortfolioSelect}
        id="portfolio-selector"
        defaultValue="default"
        >
          <option disabled value='default'> view shares</option>
          {options}
        </select>
        <DisplayShare
          share={props.selectedShare}
        />
        <button onClick={handleButton}>Sell</button>
        <h4>Total Portfolio Value: £{totalValue()}</h4>
      </React.Fragment>
    )
  }

  export default Portfolio;

import React from 'react';

class NewPortfolioStock extends React.Component {
  constructor(props){
    super(props);
    // this.selectedStockForm = this.selectStockForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.state = {
      volume: "0"
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const buyOrder = this.props.currentStock
    buyOrder.volume = parseInt(this.state.volume)
    buyOrder._id = null
    debugger;
  }

  handleVolumeChange = (event) => {
    this.setState({volume: event.target.value});
  }

  render(){
    if(!this.props.currentStock){
      return null;
    }
    return(
    <React.Fragment>
      <form onSubmit={this.handleFormSubmit}>
        <h3>Your selected stock</h3>
        <label>
          Symbol:
          <input type="text" disabled value={this.props.currentStock.symbol}/>

          Company Name:
          <input type="text" disabled value={this.props.currentStock.companyName}/>

          Sector:
          <input type="text" disabled value={this.props.currentStock.sector}/>

          Price Change:
          <input type="text" disabled value={this.props.currentStock.priceChange}/>

          Price Change Percent:
          <input type="text" disabled value={this.props.currentStock.priceChangePercent}/>

          Price:
          <input type="text" disabled value={this.props.currentStock.price}/>

          Week 52 High:
          <input type="text" disabled value={this.props.currentStock.week52High}/>

          Volume:
          <input type="text" value={this.state.volume} onChange={this.handleVolumeChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  )
  }
}


export default NewPortfolioStock;

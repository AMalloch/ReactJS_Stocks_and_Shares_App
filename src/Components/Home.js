import React from 'react';
import TitleBar from './TitleBar';
import {Link} from "react-router-dom";


const Home = (props) => {

  return(
      <React.Fragment>

        <div className="title-div">
          <TitleBar />
        </div>

        <div className="button-portfolio">
          <Link to='/portfolio'>Portfolio</Link>
        </div>
        <div className="button-stock">
          <Link to='/market_stock'>Market Stock</Link>
        </div>

        <div className="stock-div">
          <p>RISERS AND FALLERS</p>
          <img  src="http://www.proactiveinvestors.co.uk/thumbs/upload/MarketReport/Image/2015_06/757z468_risers_fallers_resized.png" alt="TextImage"/>
        </div>
      </React.Fragment>
  )
}


export default Home;

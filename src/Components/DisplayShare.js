import React from "react";

const DisplayShare = (props) => {
  if(!props.share) return null;
  return (
    <article>
      <p>Company {props.share.companyName}({props.share.symbol})</p>
      <p>Sector {props.share.sector}</p>
      <p>Quantity {props.share.volume}</p>
      <p>Buy Price {props.share.price}</p>
      <p>Total Share Value {props.share.price * props.share.volume}</p>
    </article>
  )
}

export default DisplayShare;

import React from 'react';

const Card = props => {
  return (
    <a href={props.link} className='card'>
      <img alt={`${props.missionName}`} src={props.image} />
      <p className='missionName'>{props.missionName}</p>
      <p><strong>Mission Ids :</strong> </p>
      <span className='dark'>{props.missionId.length > 0 ? <ul>{props.missionId.map((item, index) => (<li key={index}>{item}</li>))}</ul> : "Id doesn't exists"}</span>
      <p><strong>Launch Year :</strong> <span>{props.launchYear}</span></p>
      <p><strong>Successful Launch :</strong> <span>{props.launchSuccess}</span></p>
      <p><strong>Successful Landing :</strong> <span>{props.landSuccess}</span></p>
    </a>
  );
}

export default Card;

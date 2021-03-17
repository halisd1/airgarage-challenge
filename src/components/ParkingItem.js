import React from 'react';

const ParkingItem = ({ name, address, image_url, rating, review_count, url }) => {
    return (
        <div className="parking-item" onClick={() => {
            window.open(url);
        }}>
            <h3>{name}</h3>
            <img className="image" src={image_url} alt={name}/>
            <h4>Address: {address}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Review Count: {review_count}</h4>
            <h4>AirGarage Rating: {((review_count * rating)/(review_count+1)).toFixed(1)}</h4>
        </div>
    )
}

export default ParkingItem;
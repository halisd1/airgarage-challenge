import React from 'react';
import ParkingItem from './ParkingItem';

const ParkingSpotsList = ({ spotsList }) => {
    const spotItems = spotsList.map(spot => {
        return <ParkingItem
            key={spot.id}
            name={spot.name}
            image_url={spot.image_url}
            url={spot.url}
            review_count={spot.review_count}
            rating={spot.rating}
            address={spot.location.display_address}
        />
    })

    return (
        <div className="parkingspot-list">
            {spotItems}
        </div>
    )
}

export default ParkingSpotsList;
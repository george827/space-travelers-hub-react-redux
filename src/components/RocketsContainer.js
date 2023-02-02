import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketList from './RocketList';

const Rockets = () => {
  const RocketState = useSelector((state) => state.rockets);
  return (
    <Container>
      <br />
      {
        RocketState.map((rocket) => (
          <RocketList
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages[0]}
            reserved={rocket.reserved}
          />
        ))
      }
    </Container>
  );
};

export default Rockets;

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ShareItinerary from '../components/ShareItinerary';

const GET_ITINERARY = gql`
  query GetItinerary($id: ID!) {
    itinerary(id: $id) {
      id
      destination
      activities
    }
  }
`;

const Itinerary = ({ match }) => {
  const { id } = match.params;
  const { loading, error, data } = useQuery(GET_ITINERARY, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { itinerary } = data;

  return (
    <div>
      <h2>{itinerary.destination}</h2>
      <ul>
        {itinerary.activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <ShareItinerary itineraryId={itinerary.id} />
    </div>
  );
};

export default Itinerary;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const SHARE_ITINERARY = gql`
  mutation ShareItinerary($itineraryId: ID!, $email: String!) {
    shareItinerary(itineraryId: $itineraryId, email: $email) {
      id
      destination
      activities
    }
  }
`;

const Share = () => {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [shareItinerary, { error }] = useMutation(SHARE_ITINERARY);

  const handleShare = async () => {
    try {
      await shareItinerary({ variables: { itineraryId: id, email } });
      alert('Itinerary shared successfully!');
    } catch (e) {
      console.error(e);
      alert('Error sharing itinerary');
    }
  };

  return (
    <div>
      <h2>Share Itinerary</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter friend's email"
        required
      />
      <button onClick={handleShare}>Share</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Share;

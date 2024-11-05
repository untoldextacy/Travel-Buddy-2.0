import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShareItineraryPage = ({ itineraries, deleteItinerary }) => {
  const { id } = useParams(); // Get the itinerary ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const itinerary = itineraries.find(it => it.id === parseInt(id)); // Find the corresponding itinerary

  const [copied, setCopied] = useState(false); // State to manage copy notification

 

  const shareLink = `${window.location.origin}/share/${itinerary.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true); // Show notification
    setTimeout(() => setCopied(false), 2000); // Hide notification after 2 seconds
  };

  const handleDelete = () => {
    deleteItinerary(itinerary.id);
    navigate('/'); // Redirect to the main itinerary list after deletion
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold text-center">{itinerary.destination}</h2>
      <p className="text-gray-700 text-center">Date: {itinerary.date}</p>
      <p className="mt-2 text-center">{itinerary.details || "No additional details"}</p>

      <div className="mt-4 text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" onClick={handleCopyLink}>
          Copy Link
        </button>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded mr-2"
        >
          Share on Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Share on Twitter
        </a>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded ml-2"
          onClick={handleDelete}
        >
          Delete Itinerary
        </button>
      </div>

      {/* Notification for copied link */}
      {copied && (
        <div className="mt-2 text-green-600 text-center">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ShareItineraryPage;

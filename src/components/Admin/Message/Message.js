import React, { useState } from "react";
import axios from "axios";

function Message() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const fetchMessages = () => {
    axios
      .get("https://techdriveserver.onrender.com/api/getcontact") // Change to your actual API endpoint
      .then((response) => {
        // Access the 'contact' field inside the response object
        setMessages(response.data.contact);
        console.log(response.data.contact); // Assuming the 'contact' array contains the messages
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching messages");
      });
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <button
        onClick={fetchMessages}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all duration-200 mb-4"
      >
        Fetch Messages
      </button>

      {error && <div className="text-red-500">{error}</div>}

      {/* Scrollable message container */}
      <div className="mt-4 max-h-80 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="border-b py-2">
              <p>
                <strong>From:</strong> {message.firstname} {message.lastname}
              </p>
              <p>
                <strong>Email:</strong> {message.email}
              </p>
              <p>
                <strong>Phone:</strong> {message.mobileNumber}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>
            </div>
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
    </div>
  );
}

export default Message;

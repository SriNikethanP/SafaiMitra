import React, { useState } from "react";
import axios from "axios";

const LocationSearch = ({ onSelectLocation }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch location suggestions
  const fetchSuggestions = async (input) => {
    if (!input) return setSuggestions([]);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${input}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  // Handle selecting a suggestion
  const handleSelect = (location) => {
    setQuery(location.display_name); // Update input field
    setSuggestions([]); // Hide suggestions

    // Update map marker
    onSelectLocation({
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lon),
      name: location.display_name,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for nearby locations..."
        className="p-2 border rounded w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded w-full mt-1">
          {suggestions.map((location, index) => (
            <li
              key={index}
              onClick={() => handleSelect(location)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;

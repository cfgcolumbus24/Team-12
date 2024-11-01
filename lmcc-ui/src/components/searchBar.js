// src/components/SearchBar.js
"use client";

import React, { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputSection}>
        <span style={styles.icon}>🔍</span>
        <input
          type="text"
          placeholder="Search Events here"
          value={query}
          onChange={handleInputChange}
          style={styles.input}
        />
      </div>
      <div style={styles.filters}>
      <div>Date:</div>
      <select name="Date" id="Date">
        
        <option value="date" disabled >Date</option>
        <option value="24hrs">24 hours</option>
        <option value="1week">1 week</option>
        <option value="1month">1 month</option>
    </select>
    <div>Event Type:</div>
    <select name="event-type" id="event-type">
        
        <option value="event-type" disabled >Event Type</option>
        <option value="music">Music</option>
        <option value="dancing">Dancing</option>
        <option value="art">Art</option>
    </select>
    <div>Sort:</div>
        <select>
          <option disabled >Sort by: </option>
          <option value="relevancy">Relevancy</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <button onClick={handleSearch} style={styles.button}>Find Events</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
  },
  inputSection: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
    color: '#888',
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    flex: '1',
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#888',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

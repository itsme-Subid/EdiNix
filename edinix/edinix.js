import React, { useState, useEffect } from 'react';

const Edinix = ({ code, color }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.example.com/data?code=${code}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [code]);

  const style = {
    backgroundColor: color || 'lightblue',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    margin: '5px'
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span>No data found for code: {code}</span>;
  }

  return <span style={style}>{data.text}</span>;
};

export default Edinix;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MythCard from './mythCard';

const Myths = () => {
  const [myths, setMyths] = useState([]);

  useEffect(() => {
    const fetchMyths = async () => {
      try {
        const response = await axios.get('http://localhost:8000/myths');
        setMyths(response.data.myths);
        
      } catch (error) {
        console.error('Error fetching myths:', error);
      }
    };
    fetchMyths();
  }, []);

  return (
    <div className="myths">
      {myths.map(myth => (
        <MythCard key={myth._id} title={myth.title} content={myth.content} />
      ))}
    </div>
  );
};

export default Myths;
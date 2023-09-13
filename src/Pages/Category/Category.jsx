import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NaturalSummary from '../NatutalSummary/NaturalSummary';
import './Category.css'
const Category = () => {
    const { id } = useParams();
    const [natural, setNatural] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/natural/${id}`)
        .then(res => res.json())
        .then(data => {
          setNatural(data);
        });
    }, [id]);
  
    return (
       <div className='naturalsection'>
         <div className='natural'>
        {
            natural.map(nature=><NaturalSummary
            key={nature._id}
            nature={nature}
            ></NaturalSummary>)
        }
        </div>
       </div>
    );
};

export default Category;
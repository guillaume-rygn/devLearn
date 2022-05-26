import React, { useEffect, useState } from 'react';
import { API_URL } from '../../service/API';
import CategoryCard from '../../components/CategoryCard';

const Home = () => {

  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      fetch(API_URL + '/api/categories?populate=questions', {
        method: 'get',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((response) => {
        setCategories(response.data)
      })
    },[]
  )
  return(
    <>
      <p>Voici les catégories de questions disponibles :</p>
      <div className='gridCategory'>
        {categories.map(element => <CategoryCard key={element.id} data={element}/>)}
      </div>
      
    </>
  )
}

export default Home;
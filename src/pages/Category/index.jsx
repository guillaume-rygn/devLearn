import React,{ useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { API_URL } from '../../service/API';

const Category = () => {

  const category = useParams().category;
  const [questionslist, setQuestionsList] = useState([]);

  useEffect(
    ()=> {
      fetch(API_URL + '/api/questions?populate=category', {
         method: 'get',
         headers:{
           
           'Content-Type': 'applications/json'
         }
      })
      .then((response) => response.json())
      .then((response) => {
        setQuestionsList(response.data)
      })
    },[]
  )
  
  return(
    <>
      <h1>Questions sur la catégorie {category}</h1>
      <ul>
        {questionslist.map(element => <Link to={element.id}><li key={element.id}>{element.attributes.question}</li></Link>)}
      </ul>
    </>
  )
}

export default Category;
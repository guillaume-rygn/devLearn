import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../service/API';
import Question from '../Question';

const Questions = () => {

  const params = useParams();
  console.log(params)

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
        console.log(response.data)
        setQuestionsList(response.data)
      })
    },[]
  )

  return(
    <>
      {questionslist.map(element => <Question key={element.id} data={element.attributes}/>)}
    </>
  )
}

export default Questions;
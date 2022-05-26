import React, { useState } from 'react';

const Question = ({data}) => {

  const answers = useState(Object.values(data.answer));
  const [response, setResponse] = useState('');

  const AnswerQuestion = (e) => {
    if(Number(e.target.value) === data.good_answer){
      setResponse('bravo c\'est la bonne réponse')
    } else {
      setResponse('Dommage ce n\'est pas la bonne réponse');
    }
  }

  return(
    <>
      <p>Category : {data.category.data.attributes.name}</p>
      <p>{data.question}</p>
      {answers[0].map((element,index) => <button value={index + 1 } key={answers[0].indexOf(element)} onClick={AnswerQuestion}>{element}</button>)}
      <p>{response}</p>
    </>
  )
}

export default Question;
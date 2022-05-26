import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({data}) => {

  const category = useState(data);

  return(
    <Link to={category[0].attributes.name} className='card'>
      <p>{category[0].attributes.name}</p>
      <p>Nombre de question : {category[0].attributes.questions.data.length}</p>
    </Link>

  )
}

export default CategoryCard;
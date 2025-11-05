import React from 'react'

function Card({username="Madhur",post="world"}) {
    /* console.log(props); */
    
  return (

    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Preity_Zinta%2C_2001.jpg?20200713115149"
    alt="Priety Zinta"
    className="w-full h-64 object-cover"
  />
  <div className="p-5">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">Emma Watson</h2>
    <p className="text-gray-600 text-sm leading-relaxed">
      Priety Zinta is the most beautiful bollywood actress in the {post}.
    </p>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
      Read More
    </button>
    <div className='text-red-600'>Created by {username}</div>
  </div>
</div>

    </div>
    
  )
}

export default Card

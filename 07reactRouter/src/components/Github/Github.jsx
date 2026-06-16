import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     fetch('https://api.github.com/users/shefali9')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("====>", data)
//         setData(data)
//       })
//       .catch((error) => {
//         console.log("Error:", error)
//       })
//   }, [])

  return (

    <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'>

      <p>Github Followers: {data.followers}</p>

      <img

        src={data.avatar_url}

        alt='Git picture'

        width={300}

        className='mx-auto mt-4 rounded-full'

      />

    </div>

  )

}

export default Github

export const githubInfoLoader = async () => {

  const response = await fetch('https://api.github.com/users/shefali9')

  return response.json()


}
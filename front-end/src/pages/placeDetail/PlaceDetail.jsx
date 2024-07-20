import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import customAxios from '../../axios/customAxios'
import { LoaderCircle } from 'lucide-react'
import { Map } from 'lucide-react'

export default function CategoryDetail() {

  const { id } = useParams()

  const [place, setPlace] = useState({})
  const [loading, setLoading] = useState(true)

  if (!id) return <h2>Ingrese el ID de un lugar para conocer sus detalles</h2>

  useEffect(() => {

    const getPlaceByID = async () => {
      const response = await customAxios.get(`api/maps/place-details/${id}`)
      setPlace(response.data)
      setLoading(false)
    }

    getPlaceByID()

  }, [])

  return (
    <div className='px-2 sm:px-6 my-2'>
      {
        loading ?
          <LoaderCircle size={64} className="mx-auto animate-spin mt-32   " />
          :
          <div className='flex justify-between items-center shadow-md p-4 rounded'>
            <div className=''>
              <h1 className='text-3xl text-bold'>{place.displayName.text}</h1>
              <p>{place.formattedAddress}</p>
            </div>
            <a 
              href={place.googleMapsUri}
              target='_blank'
              >
              <Map size={52} />
            </a>
          </div>
      }

    </div>
  )
}
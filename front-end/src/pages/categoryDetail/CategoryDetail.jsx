import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetail() {

  const { id } = useParams()

  if (!id) return <h2>Ingrese el ID de un lugar para conocer sus detalles</h2>

  React.useEffect(() => {

    console.log(id)

  }, [])

  return (
    <div className=''>
      
    </div>
  )
}
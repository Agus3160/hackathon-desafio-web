import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import customAxios from '../../axios/customAxios'
import { LoaderCircle } from 'lucide-react'
import { Map } from 'lucide-react'
import { useSession } from '../../context/SessionContext'

export default function CategoryDetail() {

  const { id } = useParams()
  const { session } = useSession()

  const [place, setPlace] = useState({})
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [commentsLoading, setCommentsLoading] = useState(true)
  const [newComment, setNewComment] = useState({
    body: '',
    username: session.user,
    placeId: id
  })
  const [submitting, setSubmitting] = useState(false)

  if (!id) return <h2>Ingrese el ID de un lugar para conocer sus detalles</h2>

  useEffect(() => {

    const getPlaceByID = async () => {
      const response = await customAxios.get(`api/maps/place-details/${id}`)
      setPlace(response.data)
      setLoading(false)
    }

    const getCommentsByPlaceID = async () => {
      const response = await customAxios.get(`api/comment/place/${id}`)
      setComments(response.data.comments)
      setCommentsLoading(false)
    }

    getPlaceByID()
    getCommentsByPlaceID()

  }, [id])

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const comment = {
        placeId: id,
        body: newComment.body,
        username: session.username,
        createdAt: new Date()
      }
      const response = await customAxios.post(`/api/comment/`, comment)
      setComments([response.data.comment, ...comments])
      setNewComment({ ...newComment, body: '' })
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
    setSubmitting(false)
  }

  return (
    <div className='px-2 sm:px-6 my-2'>
      {
        loading ?
          <LoaderCircle size={64} className="mx-auto animate-spin mt-32" />
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

      <div className='mt-6'>
        <h2 className='text-2xl font-bold'>Comentarios</h2>

        <form onSubmit={handleCommentSubmit} className='mt-4'>
          <textarea
            className='w-full p-2 border rounded'
            placeholder='Escribe tu comentario aquí...'
            value={newComment.body}
            onChange={(e) => setNewComment({...newComment, body: e.target.value})}
            required
          ></textarea>
          <button 
            type='submit' 
            className='mt-2 p-2 bg-blue-500 text-white rounded'
            disabled={submitting}
          >
            {submitting ? 'Enviando...' : 'Enviar Comentario'}
          </button>
        </form>

        {
          commentsLoading ?
            <LoaderCircle size={32} className="mx-auto animate-spin mt-4" />
            :
            comments.length > 0 ?
              comments.map((comment) => (
                <div key={comment._id} className='mt-4 p-4 border rounded shadow-md'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold'>{comment.username}</h3>
                    <span>{new Date(comment.createdAt).toLocaleString()}</span>
                  </div>
                  <p>{comment.body}</p>
                </div>
              ))
              :
              <p className='mt-4'>No hay comentarios para este lugar.</p>
        }
      </div>
    </div>
  )
}

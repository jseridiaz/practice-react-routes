import React from 'react'
import { getSeries, deleteSeries } from '../data/seriesData'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'

const Serie = () => {
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()

  return (
    <>
      <h2>{getSeries().find((el) => el === id)}</h2>
      <Button
        text={`Delete`}
        funcion={() => {
          deleteSeries(id).then((res) => navigate('/series'))
        }}
      />
      {/* /*{' '}
      <button
        onClick={() => {
          deleteSeries(id).then((res) => {
            navigate('/series')
          })
        }}
      >
        Delete {id}
      </button>{' '} */}
    </>
  )
}

export default Serie

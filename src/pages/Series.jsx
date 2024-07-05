import React from 'react'
import { getSeries, deleteSeries } from '../data/seriesData'
import { Link } from 'react-router-dom'

const Series = () => {
  const series = getSeries()
  return (
    <section id='all-series'>
      {series.map((el) => (
        <Link key={el} to={`/serie/${el}`}>
          {el}
        </Link>
      ))}
    </section>
  )
}

export default Series

import { useNavigate } from 'react-router-dom'

let serieData = [
  'Breaking Bad',
  'Game of Thrones',
  'The Sopranos',
  'Peaky Blinders',
  'Chernobyl',
  'Vikings',
  'The Simpsons',
  'Friends',
  'The Office',
  'How I Met Your Mother',
  'Doctor Who',
  'Mad Men',
  'Community',
  'The Good Place',
  'Stranger Things',
  'Squid Game',
  'The Crown',
  "The Handmaid's Tale",
  'Black Mirror',
  'The Mandalorian'
]

export const getSeries = () => serieData
export const deleteSeries = async (id) => {
  serieData = serieData.filter((serie) => serie !== id)
}

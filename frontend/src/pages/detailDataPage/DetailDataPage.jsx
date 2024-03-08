import React from 'react'
import DetailtableComponent from '../../components/detailTable/DetailtableComponent'
import { useParams } from 'react-router-dom'
import NavbarComponent from '../../components/navbar/NavbarComponent'

const DetailDataPage = () => {

  return (
    <div>
      <NavbarComponent/>
      <DetailtableComponent/>
    </div>
  )
}

export default DetailDataPage

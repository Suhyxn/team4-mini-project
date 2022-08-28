import { check } from 'prettier'
import React from 'react'

import { Outlet } from 'react-router-dom'
import Card from '../../components/common/Card'

function Home() {
  return (
    <div>
      Home
      <Card
        imageName="kookmin"
        bank="신한카드"
        name="신한 deep dream"
        description="1900"
        tags={['신한']}
      />
      <Outlet />
    </div>
  )
}

export default Home

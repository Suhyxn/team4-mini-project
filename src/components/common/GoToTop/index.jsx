import React, { useState, useEffect } from 'react'
import * as S from './style'
import { AiOutlineArrowUp } from 'react-icons/ai'

function GotoTop() {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])

  return (
    showButton && (
      <S.Container>
        <S.Box id="top" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </S.Box>
      </S.Container>
    )
  )
}

export default GotoTop

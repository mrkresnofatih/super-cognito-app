import { Button } from '@chakra-ui/react'
import React from 'react'

const CyanButton = ({size, onClick, content, style}) => {
  return (
    <Button 
      style={{borderWidth: 0, color: 'white', backgroundColor: '#0097B2', padding: `12px 24px`, ...style}}
      size={size} 
      onClick={onClick}
    >{content}</Button>
  )
}

export default CyanButton
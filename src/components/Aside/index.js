import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import { RiAliensFill, RiUser2Fill, RiLogoutCircleFill,RiArrowRightCircleLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'

export default function Card(){

    const [open, setOpen] = useState(false)
    return(
        <Container open={open}>
          
        </Container>
    )
}
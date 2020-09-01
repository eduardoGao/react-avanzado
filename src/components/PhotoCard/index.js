import React, { useState, useEffect, useRef } from "react";
import { Articule, ImgWrapper, Img, Button } from "./styles"
import { MdFavoriteBorder } from "react-icons/md";

const defaultImage = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(function () {
    // console.log(element.current)
    const observer = new window.IntersectionObserver(function (entries) {
      // console.log(entries)
      const { isIntersecting } = entries[0]
      console.log({ isIntersecting })
      if (isIntersecting) {
        // console.log('Sí')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])



  return (
    <Articule ref={element}>
      {
        show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size={25} />
            {likes} likes!
          </Button>
        </>
      }

    </Articule>
  )
}
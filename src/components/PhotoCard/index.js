import React, { useState, useEffect, useRef } from "react";
import { Articule, ImgWrapper, Img, Button } from "./styles"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const defaultImage = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })

  // console.log(liked)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(element.current)
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting })
        if (isIntersecting) {
          // console.log('Sí')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

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
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size={25} />
            {likes} likes!
          </Button>
        </>
      }

    </Articule>
  )
}
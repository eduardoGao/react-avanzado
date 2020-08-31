import React from "react";
import { PhotoCard } from "../PhotoCard"

import { photos } from "../../../api/db.json"

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        photos.map(item =>
          <PhotoCard key={item.id} src={item.src} />
        )
      }
    </ul>
  )
}
import React from 'react'
import "./Loading.scss"

function Loading() {
  return (
    <div className="loader">
        <img src="/img/load.png" alt="logo e-commerce" />
        <h2>Cargando...</h2>
    </div>
  )
}

export default Loading
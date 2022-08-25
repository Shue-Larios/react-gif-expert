
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
      {/* mostramos la imagen */}
        <img src={ url } alt={ title } />
        {/* aca mostramos el titulo */}
        <p>{ title }</p>
    </div>
  )
}

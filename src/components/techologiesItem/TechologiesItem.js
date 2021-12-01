const TechnologiesItem = ({technology}) => {
  return (
    <div className="technologies-item">
      <div className="technologies-item__img">
        <img src={technology.image} alt={technology.title} />
      </div>

      <h3 className="item-title item-title_mb12">{technology.title}</h3>
      <p className="text text_fz18">{technology.text}</p>
    </div>
  )
}

export default TechnologiesItem
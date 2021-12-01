const AboutItem = ({info}) => {
  return (
    <div className="about-item">
      <h3 className="item-title item-title_mb20">{info.title}</h3>
      <p className="text">{info.text}</p>
    </div>
  )
}

export default AboutItem
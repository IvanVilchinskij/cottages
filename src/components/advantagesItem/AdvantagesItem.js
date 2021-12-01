const AdvantagesItem = ({advantage}) => {
  return (
    <div className="advantages-item">
      <img src={advantage.icon} alt={advantage.text}/>

      <p className="advantages-item__text text">
        {advantage.text}
      </p>
    </div>
  )
}

export default AdvantagesItem
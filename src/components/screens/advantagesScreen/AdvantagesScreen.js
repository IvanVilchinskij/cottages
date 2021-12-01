import { advantagesScreenContent } from "./const"
import AdvantagesItem from "../../advantagesItem/AdvantagesItem"
import advantagesImg from '../../../assets/images/advantages.jpg'
import logoSymbol from '../../../assets/images/logo_symbol.png'

const AdvantagesScreen = () => {
  const advantages = advantagesScreenContent.advantages.map((item, i) => {
    if (i === 4) {
      return (
        <>
          <div key={i} className="advantages__img">
            <img src={advantagesImg} alt="wet-dreams" />
          </div>
          <AdvantagesItem key={item.iconId} advantage={item}/>
        </>
      )
    } else {
      return <AdvantagesItem key={item.iconId} advantage={item}/>
    }
  })

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2 className="advantages__title title">{advantagesScreenContent.title}</h2>

        <div className="advantages__list">
          {advantages}
        </div>
      </div>

      <img className="advantages__logo" src={logoSymbol} alt="logo"/>
    </section>
  )
}

export default AdvantagesScreen
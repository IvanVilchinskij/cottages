import { cottagesScreenContent } from './const'
import Slider from '../../slider/Slider'
import decoration from '../../../assets/images/decoration2.png'

const CottagesScreen = () => {
  return (
    <section className="cottages">
      <div className="container">
        <img className="cottages__decoration" src={decoration} alt="decoration"></img>
        <h2 className="cottages__title title">{cottagesScreenContent.title}</h2>

        <Slider />
      </div>
    </section>
  )
}

export default CottagesScreen
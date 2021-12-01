import AboutItem from '../../aboutItem/AboutItem'
import { mainScreenContent, cottagesCount } from '../mainScreen/const'
import { aboutScreenContent } from './const'
import aboutImg from '../../../assets/images/about_img.jpg'
import decoration from '../../../assets/images/decoration.png'

const AboutScreen = () => {
  const aboutItemsWithoutLast = aboutScreenContent.aboutItems.map((item, i) =>
    i === aboutScreenContent.aboutItems.length - 1
      ?  null
      : <AboutItem key={i} info={item}/>
  )

  return (
    <section id="about" className="about">
      <div className="container">
        <span className="about__title-xl xl-title">{aboutScreenContent.title}</span>

        <div className="about__left">
          <h2 className="about__title title">{aboutScreenContent.title}</h2>
          <p className="about__text text">{aboutScreenContent.text}</p>

          <div className="about__cottages">
            <span className="text bold">{cottagesCount()} коттетджей:</span>
            <CottagesInfo info={mainScreenContent.cottagesInfo[0]}/>
            <CottagesInfo info={mainScreenContent.cottagesInfo[1]}/>
          </div>

          {aboutItemsWithoutLast}
        </div>
        
        <div className="about__right">
          <div className="about__img">
            <img src={aboutImg} alt="MM Group" />

            <img src={decoration} alt="decoration" className="about__decoration about__decoration_first"/>
            <img src={decoration} alt="decoration" className="about__decoration about__decoration_second"/>
          </div>

          <AboutItem info={aboutScreenContent.aboutItems[2]}/>
        </div>
      </div>
    </section>
  )
}

const CottagesInfo = ({info}) => {
  return (
    <span className="text">- {info.square} м<sup>2</sup> на {info.ares} сотках</span>
  )
}

export default AboutScreen
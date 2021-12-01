import { locationSCreenContent } from './const'
import locationImg from '../../../assets/images/location.png'

const LocationScreen = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location__info">
          <span className="location__title-xl xl-title xl-title_upper">{locationSCreenContent.title}</span>
          <h2 className="location__title title">{locationSCreenContent.title}</h2>

          <p className="text">{locationSCreenContent.firstParagraph}</p>
          <br/>
          <p className="text">{locationSCreenContent.secondParagraph}</p>
        </div>

        <div className="location__map">
          <div className="location__img">
            <img src={locationImg} alt="location" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default LocationScreen
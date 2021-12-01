import { contactsScreenContent } from './const'
import { phoneFormatter } from '../../../formatters/formatters'
import icons from '../../../assets/icons.svg'
import qr from '../../../assets/images/qr.jpg'

const ContactsScreen = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts__map">
          <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0754a1e0e992694e981e7e1ef6c3bc8ea70053be44c0a48b5714443a6d4e5ac6&amp;source=constructor"></iframe>
        </div>

        <div className="contacts__info">
          <h2 className="contacts__title title">
            {contactsScreenContent.title}
          </h2>

          <div className="contacts__address text text_fz18">
            <span>{contactsScreenContent.address}</span>
          </div>

          <div className="contacts__communication">
            <div className="contacts__links">
              <a href={`tel:+${contactsScreenContent.phone}`}>
                <svg>
                  <use href={`${icons}#phone`}></use>
                </svg>

                <span>
                  +{phoneFormatter(contactsScreenContent.phone, true)}
                </span>
              </a>

              <a href={`mailto:${contactsScreenContent.mail}`}>
                <svg className="stroke">
                  <use href={`${icons}#mail`}></use>
                </svg>

                <span>
                  {contactsScreenContent.mail}
                </span>
              </a>

              <a 
                href={`https://www.instagram.com/${contactsScreenContent.inst.slice(1)}/`}
              >
                <svg>
                  <use href={`${icons}#inst`}></use>
                </svg>

                <span>
                  {contactsScreenContent.inst}
                </span>
              </a>
            </div>

            <div className="contacts__qr">
              <img src={qr} alt="wathsapp qr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsScreen

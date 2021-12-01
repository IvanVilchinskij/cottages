import { phoneFormatter } from '../../formatters/formatters'
import { phoneNumber, navLinks } from './const'
import { getScrollbarWidth } from '../../helpers/helpers'
import logo from '../../assets/images/logo.png'
import icons from '../../assets/icons.svg'
import { useEffect, useState } from 'react'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isOpenBurger, setIsOpen] = useState(false)

  const toggleBurger = () => {
    if (windowWidth > 991) return
    
    setIsOpen(!isOpenBurger)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    const menu = document.querySelector('.header__info'),
          body = document.body

    if (isOpenBurger) {
      body.classList.add('open-menu')
      menu.classList.add('active')
      body.style.paddingRight = getScrollbarWidth() + 'px';
    } else {
      body.classList.remove('open-menu')
      menu.classList.remove('active')
      body.style.paddingRight = '';
    }
  }, [isOpenBurger])

  useEffect(() => {
    const body = document.body

    if (windowWidth < 992 || !body.classList.contains('open-menu')) return

    setIsOpen(false)
  }, [windowWidth])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  const activeClass = isOpenBurger ? 'active' : ''

  const navLinksArray =  navLinks.map((navItem, i) => {
    return <li key={i} className="nav__item" onClick={toggleBurger}>
            <a href={navItem.link}>
              {navItem.title}
            </a>
          </li>
  })

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__info">
        <div className="tel-info">
          <svg>
            <use href={`${icons}#whatsapp`}></use>
          </svg>
        
          <div className="tel-info__wrapper">
            <span></span>

            <a href={`tel:+${phoneNumber}`}>
              <svg>
                <use href={`${icons}#phone`}></use>
              </svg>

              <span>
                +{phoneFormatter(phoneNumber)}
              </span>
            </a>
          </div>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            {navLinksArray}
          </ul>
        </nav>
      </div>

      <div className={`burger ${activeClass}`} onClick={toggleBurger}>
          <span className='burger__upper-line'></span>
          <span className='burger__middle-line burger__middle-line--upper'></span>
          <span className='burger__middle-line burger__middle-line--down'></span>
          <span className='burger__down-line'></span>
        </div>
    </header>
  )
}

export default Header
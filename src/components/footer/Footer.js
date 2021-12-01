import { footerLinks } from "./const"

const Footer = () => {
  const footerLinksItems = footerLinks.map((item, i) => {
    return <li key={i} className="footer__item">
      <a className="text" href={item.link}>{item.title}</a>
    </li>
  })

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list">
          {footerLinksItems}
        </ul>
      </div>
    </footer>
  )
}

export default Footer

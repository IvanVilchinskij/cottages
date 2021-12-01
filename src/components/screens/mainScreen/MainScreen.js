import Header from "../../header/Header";
import { mainScreenContent, cottagesCount } from './const'

const MainScreen = () => {
  const cottagesInfo = mainScreenContent.cottagesInfo.map((cottageType, i) => {
    return (
      <div key={i} className="cottages-info">
        <div className="cottages-info__count">{cottageType.count}</div>
        <div className="cottages-info__text">
          коттеджа<br/>{cottageType.square} <span>м<sup>2</sup></span><br/>на {cottageType.ares} сотках
        </div>
      </div>
    )
  })

  const accentInfo = mainScreenContent.accentInfo.map((info, i) => {
    return (
      <div key={i} className="accent-info">
        <span>{info.accentTxt}</span> {info.txt}
      </div>
    )
  })

  return (
    <div className="main">
      <div className="container">
        <BgLines />
        <Header />

        <div className="main-content">
          <div className="main-content__left">
            <h1 className="main-content__title title title_white-sm">{mainScreenContent.title}</h1>
            <a href="#presentation" className="main-content__btn">{mainScreenContent.btnTxt}</a>

            <h2 className="main-content__title title title_white-sm title_xs">
              {cottagesCount()} коттеджей
            </h2>

            <div className="main-content__cottages-info">
              {cottagesInfo}
            </div>
          </div>

          <div className="main-content__right">
            {accentInfo}
          </div>
        </div>
      </div>
    </div>
  )
}

const BgLines = () => {
  return (
    <div className="main__bg-line-wrapper">
      <div className="main__bg-line main__bg-line_1"></div>
      <div className="main__bg-line main__bg-line_2 hidden-sm"></div>
      <div className="main__bg-line main__bg-line_3"></div>
      <div className="main__bg-line main__bg-line_4 hidden-sm"></div>
      <div className="main__bg-line main__bg-line_5"></div>
    </div>
  )
}

export default MainScreen
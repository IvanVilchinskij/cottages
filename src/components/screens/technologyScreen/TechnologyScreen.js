import { technologyScreenContent } from "./const" 
import TechnologiesItem from "../../techologiesItem/TechologiesItem"
import Presentation from "../../presentation/Presentation"
import FormState from "./formState"

const form = new FormState()

const TechnologyScreen = () => {
  const technologiesLeft = technologyScreenContent.technologies
    .slice(0,  Math.ceil(technologyScreenContent.technologies.length / 2))
    .map((item, i) => {
      return <TechnologiesItem key={i} technology={item} />
    })

  const technologiesRight = technologyScreenContent.technologies
    .slice(Math.ceil(technologyScreenContent.technologies.length / 2))
    .map((item, i) => {
      return <TechnologiesItem key={i + Math.ceil(technologyScreenContent.technologies.length / 2)} technology={item} />
    })

  return (
    <section className="technology" id="technology">
      <div className="container">
        <span className="technology__title-xl xl-title xl-title_m">{technologyScreenContent.bigTitle}</span>
        <h2 className="technology__title title">{technologyScreenContent.title}</h2>

        <div className="technology__flex-wrapper">
          <div className="technology__left">
            {technologiesLeft}
          </div>
          <div className="technology__right">
            {technologiesRight}
          </div>
        </div>

        <Presentation form={form}/>
      </div>
    </section>
  )
}

export default TechnologyScreen
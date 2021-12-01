import { presentationContent } from './const'
import icons from '../../assets/icons.svg'
import { observer } from 'mobx-react'

const Presentation = observer(({ form }) => {
  const validate = (field, value) => {
    if (value) {
      form.setValidationsMessages(field, '')
    } else {
      form.setValidationsMessages(field, 'required')
    }
  }

  const trimValues = () => {
    for (let key in form.formData) {
      form.setFormData(key, form.formData[key].trim())
    }
  }

  const clearForm = () => {
    for (let key in form.formData) {
      form.setFormData(key, '')
    }
  }

  const validateBeforeSubmit = () => {
    for (let key in form.formData) {
      validate(key, form.formData[key])
    }
  }

  const handleChange = (e) => {
    const target = e.target

    form.setFormData(target.name, target.value)

    if (form.validationsMessages[target.name]) {
      validate(target.name, target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    trimValues()
    validateBeforeSubmit()

    if (form.hasError) {
      console.log('Failed submit')
    } else {
      console.log({...form.formData})
      clearForm()
    }
  }

  const formFields = presentationContent.formFields.map((field, i) => {
    return (
      <div key={i} className="presentation__field">
        <svg className={`presentation__icon presentation__icon_${i}`}>
          <use href={`${icons}#${field.iconId}`}></use>
        </svg>
        <input value={form.formData[field.name]} onChange={handleChange} type={field.type} placeholder={field.placeholder} name={field.name}/>
        <span className="presentation__valid-message">{form.validationsMessages[field.name]}</span>
      </div>
    )
  })

  return (
    <div id="presentation" className="presentation">
      <h3 className="presentation__title title title_s">{presentationContent.title}</h3>

      <div className="presentation__subtitle">
        <span>{presentationContent.subtitle}</span>
      </div>

      <form className="presentation__form">
        {formFields}
        <button onClick={handleSubmit} className="presentation__btn">
          {presentationContent.submitText}
        </button>
      </form>
    </div>
  )
})

export default Presentation
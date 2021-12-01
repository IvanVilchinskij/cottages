import { makeAutoObservable } from 'mobx'

export default class FormState {
  formData = {
    name: '',
    phone: ''
  }

  validationsMessages = {
    name: '',
    phone: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  setFormData(field, newValue) {
    this.formData[field] = newValue
  }

  setValidationsMessages(field, newValue) {
    this.validationsMessages[field] = newValue
  }

  get hasError() {
    let hasError = false

    for (let key in this.validationsMessages) {
      if (this.validationsMessages[key]) {
        hasError = true
      }
    }

    return hasError
  }

}
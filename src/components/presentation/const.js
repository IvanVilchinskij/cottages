export const presentationContent = Object.freeze({
  title: 'Скачать презентацию',
  subtitle: 'Оставьте свои контакты и мы вам вышлем',
  formFields: [
    {
      iconId: 'user',
      placeholder: 'Ваше имя',
      type: 'text',
      name: 'name'
    },
    {
      iconId: 'phone-fill',
      placeholder: 'Номер телефона',
      type: 'number',
      name: 'phone'
    },
  ],
  submitText: 'Отправить',
})

export const initFormData = Object.freeze({
  name: '',
  phone: '',
})

export const initValidations = Object.freeze({
  name: '',
  phone: '',
})
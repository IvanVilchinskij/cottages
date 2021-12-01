export const mainScreenContent = Object.freeze({
  title: 'Элитный коттеджный городок в г. Нур-Султан',
  btnTxt: 'Скачать презентацию',
  cottagesInfo: [
    {
      count: 3,
      square: 368,
      ares: 10
    },
    {
      count: 33,
      square: 179,
      ares: 5
    }
  ],
  accentInfo: [
    {
      accentTxt: 'Строительные работы',
      txt: 'начались в сентября 2021 года'
    },
    {
      accentTxt: 'Срок сдачи',
      txt: ' коттеджей - I квартал 2022 года'
    },
    {
      accentTxt: 'Срок сдачи',
      txt: ' всего коттеджного городка - II квартал 2022 года'
    },
  ]
})

export const cottagesCount = () => {
  let count = 0
  mainScreenContent.cottagesInfo.forEach(item => {
    count += item.count
  })

  return count
}
import map from '../../../assets/icons/map.svg'
import shield from '../../../assets/icons/shield.svg'
import fence from '../../../assets/icons/fence.svg'
import sofa from '../../../assets/icons/sofa.svg'
import house from '../../../assets/icons/house.svg'
import app from '../../../assets/icons/app.svg'
import someShit from '../../../assets/icons/some-shit.svg'

export const advantagesScreenContent = Object.freeze({
  title: 'Основные преимущества городка',
  advantages: [
    {
      iconId: '#map',
      text: <><span>Выгодное</span><br/><span>месторасположение</span></>,
      icon: map,
    },
    {
      iconId: '#shield',
      text: <><span>Охраняемая</span><br/><span>территория</span></>,
      icon: shield,
    },
    {
      iconId: '#fence',
      text: 'Городок по периметру ограждён 3-метровым забором, оснащён системой видеонаблюдения 24/7',
      icon: fence,
    },
    {
      iconId: '#sofa',
      text: 'Здесь вы почувствуете уединенность, безопасность и комфорт',
      icon: sofa,
    },
    {
      iconId: '#house',
      text: 'Индивидуальные участки ограждены 2-метровыми заборами',
      icon: house,
    },
    {
      iconId: '#app',
      text: <><span>Cобственное</span><br/><span>приложение</span></>,
      icon: app,
    },
    {
      iconId: '#some-shit',
      text: 'Каждому владельцу коттеджа даётся возможность на своем земельном участке возводить дополнительные застройки: баню, сауну, летнюю кухню и др.',
      icon: someShit,
    },
  ]
})
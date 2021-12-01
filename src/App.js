import { useEffect } from 'react'
import MainScreen from "./components/screens/mainScreen/MainScreen";
import AboutScreen from "./components/screens/aboutScreen/AboutScreen";
import CottagesScreen from './components/screens/cottagesScreen/CottagesScreen';
import LocationScreen from './components/screens/locationScreen/LocationScreen';
import AdvantagesScreen from './components/screens/advantagesScreen/AdvantagesScreen';
import TechnologyScreen from './components/screens/technologyScreen/TechnologyScreen';
import PaymentTypesScreen from './components/screens/paymentTypesScreen/PaymentTypesScreen';
import ContactsScreen from './components/screens/contactsScreen/ContactsScreen';
import Footer from './components/footer/Footer';
import { linkScroll } from './linkScroll/linkScroll'

const App = () => {
  useEffect(() => {
    linkScroll()
  }, [])

  return (
    <>
      <MainScreen />
      <AboutScreen />
      <CottagesScreen />
      <LocationScreen />
      <AdvantagesScreen />
      <TechnologyScreen />
      <PaymentTypesScreen />
      <ContactsScreen />
      <Footer />
    </>
  )
}

export default App

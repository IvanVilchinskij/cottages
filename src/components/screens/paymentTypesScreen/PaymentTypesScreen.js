import { paymentTypesContent } from './const'

const PaymentTypesScreen = () => {
  const types = paymentTypesContent.types.map((item, i) => {
    return (
      <div key={i} className="payment-type">
        <div className="payment-type__img">
          <img src={item.image} alt="type" />
        </div>

        <p className="payment-type__text">{item.text}</p>
      </div>
    )
  })

  return (
    <section id="payment-types" className="payment-types">
      <div className="container">
        <span className="payment-types__title-xl xl-title">
          {paymentTypesContent.bigTitle}
        </span>
        <h2 className="payment-types__title title">
          {paymentTypesContent.title}
        </h2>

        <div className="payment-types__types">
          {types}
        </div>
      </div> 
    </section>
  )
}

export default PaymentTypesScreen
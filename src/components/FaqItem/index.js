import './index.css'

const FaqItem = props => {
  const {faqItem, onToggleButton, isPlusButtonActive} = props
  const {id, questionText, answerText} = faqItem
  const plusUrl =
    'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const minusUrl =
    'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const displayAnswer = (
    <div>
      <hr className="horizontalLine" />
      <p className="answer">{answerText}</p>
    </div>
  )

  const onClickStatusChangeButton = () => {
    onToggleButton(id)
  }

  const buttonUrl = !isPlusButtonActive ? plusUrl : minusUrl

  const Alt = !isPlusButtonActive ? 'plus' : 'minus'

  const answer = !isPlusButtonActive ? '' : displayAnswer

  return (
    <li className="faqItem-container">
      <div className="question-container">
        <h1 className="faq">{questionText}</h1>
        <button
          className="statusChange-button"
          onClick={onClickStatusChangeButton}
          type="button"
        >
          <img src={buttonUrl} alt={Alt} className="buttonImage" />
        </button>
      </div>
      {answer}
    </li>
  )
}

export default FaqItem

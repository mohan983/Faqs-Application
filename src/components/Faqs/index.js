import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    activeButtonIds: [],
  }

  onToggleButton = id => {
    const {activeButtonIds} = this.state
    const isAnswerDisplayedForId = activeButtonIds.includes(id)
    const activeIds = [activeButtonIds.filter(eachId => eachId !== id)]
    console.log(isAnswerDisplayedForId)
    console.log(activeIds[0])
    if (isAnswerDisplayedForId) {
      this.setState({
        activeButtonIds: [...activeIds[0]],
      })
    } else {
      this.setState(prevState => ({
        activeButtonIds: [...prevState.activeButtonIds, id],
      }))
    }
  }

  render() {
    const {activeButtonIds} = this.state
    console.log(activeButtonIds)
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="Faqs-bg-container">
          <h1 className="Faqs-heading">FAQs</h1>
          <ul className="Faqs-container">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqItem={eachItem}
                isPlusButtonActive={activeButtonIds.includes(eachItem.id)}
                onToggleButton={this.onToggleButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

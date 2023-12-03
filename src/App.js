import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'

class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderLine: false,
  }

  changeActive = () => {
    this.setState(prevValue => ({
      isBold: !prevValue.isBold,
    }))
  }

  changeStyle = () => {
    this.setState(prevValue => ({
      isItalic: !prevValue.isItalic,
    }))
  }

  changeLine = () => {
    this.setState(prevValue => ({
      isUnderLine: !prevValue.isUnderLine,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    const buttonBold = isBold ? 'active' : 'inactive'
    const buttonItalic = isItalic ? 'active' : 'inactive'
    const buttonLine = isUnderLine ? 'active' : 'inactive'
    const textClasses = `${isBold ? 'boldClass' : 'text'} ${
      isItalic ? 'italicClass' : 'text'
    } ${isUnderLine ? 'lineClass' : 'text'}`

    return (
      <div className="pro">
        <div className="bg">
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="bg">
          <ul className="bg">
            <li>
              <button
                data-testid="bold"
                type="button"
                aria-label="Bold"
                onClick={this.changeActive}
                className={buttonBold}
              >
                <VscBold size={25} />
              </button>
            </li>
            <li>
              <button
                data-testid="italic"
                type="button"
                aria-label="Italic"
                onClick={this.changeStyle}
                className={buttonItalic}
              >
                <GoItalic size={25} />
              </button>
            </li>
            <li>
              <button
                data-testid="underline"
                type="button"
                aria-label="Underline"
                onClick={this.changeLine}
                className={buttonLine}
              >
                <AiOutlineUnderline size={25} />
              </button>
            </li>
          </ul>
          <textarea className={textClasses} />
        </div>
      </div>
    )
  }
}

export default App

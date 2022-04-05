import { useState, useRef } from 'react'

// controlled forms
export const InputField = () => {
  const [inputText, setInputText] = useState('')

  const handleChange = (e) => {
    // I want to update the state of inputText
    setInputText(e.target.value)
  }

  return (
    <div className="input-field">
      <label htmlFor="text-input">Put your text here!</label>
      <input
        type="text"
        className="text-input"
        id="text-input"
        value={inputText}
        onChange={handleChange}
      />
      <div>here is what is in the form: {inputText}</div>
    </div>
  )
}

// uncontrolled forms
export const RefInput = () => {
  const inputText = useRef('')

  const handleClick = () => {
    console.log(inputText)
    console.log(inputText.current)
    console.log(inputText.current.value)
  }

  return (
    <>
      <input type="text" className="ref-input-field" ref={inputText} />
      <button className="btn-input" onClick={handleClick}>
        Check that Ref!
      </button>
    </>
  )
}

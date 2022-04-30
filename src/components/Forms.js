import axios from 'axios'
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

export const ImageUploadForm = ({ token }) => {
  const imageFileInput = useRef(null)
  const [fileName, setFileName] = useState('No file selected')

  const handleClick = () => {
    const imageFile = imageFileInput.current.files[0]
    axios.patch(`http://localhost:8000/api/auth/users/me/`, imageFile, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': imageFile.type,
        'Content-Disposition': `attachment; filename=${imageFile.name}`,
      },
    })
  }

  const handleFileName = (e) => {
    setFileName(e.target.files[0].name)
  }

  return (
    <div className="file is-normal has-name container m-5">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          name="resume"
          ref={imageFileInput}
          onChange={handleFileName}
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">Profile Photo</span>
        </span>
        <span className="file-name">{fileName}</span>
      </label>
      <button className="btn-input" onClick={handleClick}>
        Upload
      </button>
    </div>
  )
}

import React, { useState } from 'react'
import './App.css'
import {numbers, upperCase, lowerCase, symbol} from './characters'

function App() {
  const [pass, setPassword] = useState('')

  const handleGeneratePassword = (e) => {
    let char = ''
    
      char = char + upperCase
      char = char + lowerCase
      char = char + numbers
      char = char + symbol
    
    setPassword(createPassword(char))
  }

  const [passLength, length] = useState(25)
  const createPassword = (char) => {
    let pass = ''
    const charLength = char.length

    for (let i = 0; i < passLength; i++) {
      const characterIndex = Math.round(Math.random() * charLength)
      pass = pass + char.charAt(characterIndex)
    }
    return pass
  }


  return (
    <div className='App'>
      <div className='container'>
        <div className='generator'>
          <h2 className='header'> Random Password Generator!</h2>
          <div className='pass'>
            <h3>{pass}</h3>
          </div>

          <div className='form-group'>
            <label htmlFor='length'>Password length</label>
            <input
              defaultValue={passLength}
              onChange={(e) => length(e.target.value)}
              type='number'
              id='length'
              name='length'
              max='25'
              min='10'
            />
          </div>

          <button onClick={handleGeneratePassword} className='generator__btn'>
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
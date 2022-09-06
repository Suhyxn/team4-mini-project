import { useCallback, useState } from 'react'

const useInputValue = (initialState = false) => {
  let [active, setActive] = useState({
    name: false,
    id: false,
    pwd: false,
  })
  const [userInput, setUserInput] = useState({
    name: '',
    id: '',
    pwd: '',
  })

  const inputHandler = useCallback((e) => {
    const { name } = e.target

    setActive({
      ...active,
      [name]: true,
    })
  })

  const inputBlurHandler = useCallback((name) => {
    setActive({
      ...active,
      [name]: false,
    })
  })

  const onUserInputChange = useCallback((e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  })
  return [active, userInput, inputHandler, inputBlurHandler, onUserInputChange]
}

export default useInputValue

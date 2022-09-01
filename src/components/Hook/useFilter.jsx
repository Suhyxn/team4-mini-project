import { useCallback, useState } from 'react'

const useFilter = (initialState = false) => {
  const [item, setItem] = useState({
    loan: true,
    card: false,
  })

  const filterHandler = useCallback((e) => {
    const { value } = e.target
    setItem({
      [value]: !item[value],
    })
  })

  return [item, filterHandler]
}

export default useFilter

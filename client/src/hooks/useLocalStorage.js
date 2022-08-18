import { useEffect, useState } from "react"

function getStorageValue(key, defaultValue) {
  if(window) {
    const value = localStorage.getItem(key)
    const data = value ? JSON.parse(value) : defaultValue
    return data
  }
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
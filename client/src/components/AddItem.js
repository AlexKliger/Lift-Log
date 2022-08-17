import { useCallback, useState } from "react"

const Form = ({handleSubmit, styling, placeholder}) => {
  const [text, setText] = useState("")

  const handleChange = useCallback((e) => {
    setText(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
    handleSubmit(text)
    e.preventDefault()
  }, [text])

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder={placeholder || ""}
        onChange={handleChange}>
      </input>
      <input
        type="submit"
        value="+">
      </input>
    </form>
  )
}

export default Form
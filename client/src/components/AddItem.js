import { useCallback, useState } from "react"

const AddItem = ({handleSubmit, styling, placeholder}) => {
  const [text, setText] = useState("")

  const handleChange = useCallback((e) => {
    setText(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
    handleSubmit(text)
    setText("")
    e.preventDefault()
  }, [text])

  return (
    <form className={styling || ""} onSubmit={onSubmit}>
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

export default AddItem
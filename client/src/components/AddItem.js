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
    <form className={`add-item ${styling || ""}`} onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder={placeholder || ""}
        onChange={handleChange}>
      </input>

      <button className="btn-add" type="submit">
        <i className="fa fa-plus color-font--primary font-size--large"></i>
      </button>
    </form>
  )
}

export default AddItem
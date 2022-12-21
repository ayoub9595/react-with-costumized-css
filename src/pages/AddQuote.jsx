import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { addQuote } from '../services/QuoteServices'
import classes from './AddQuote.module.css'

const AddQuote = () => {

  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [titleError,setTitleError] = useState(false)
  const [descriptionError,setDescriptionError] = useState(false)

  
  const formSubmitHandler = event => {
    event.preventDefault()
    if(title === '' || description === '') {
      console.log('Clicked')
      return
    }
    addQuote({ title, description }).then(() => navigate('/'))

  }
  return (<>
    <h1 className={classes.title}>Add Quote Component</h1>
    <form className={classes.form} onSubmit={formSubmitHandler} >
      <label htmlFor="title" className={`${classes['form-item']} ${classes['label']}`}>Title:</label>
     {titleError && <p className={`${classes['form-item']} ${classes['error-message']}`}>Title can't be empty</p>}
      <input
        id="title"
        name="title"
        className={`${classes['form-item']} ${classes['input']} ${titleError ? classes.error : ''}`}
        onChange={event => setTitle(event.target.value)}
        onFocus={() => setTitleError(false)}
        onBlur={event => {if(event.target.value === '') setTitleError(true)} }
      />
      <label htmlFor="description" className={`${classes['form-item']} ${classes['label']}`}>Description:</label>
      {descriptionError &&<p className={`${classes['form-item']} ${classes['error-message']}`}>Description can't be empty</p>}
      <textarea
        rows="5"
        id="description"
        className={`${classes['form-item']} ${classes['textarea']} ${descriptionError ? classes.error : ''}`}
        name="description"
        onChange={event => setDescription(event.target.value)}
        onFocus={() => setDescriptionError(false)}
        onBlur={event => {if(event.target.value === '') setDescriptionError(true)} }
      />
      <div className={classes['form-item']}>
        <button className={`${classes['button']}`} disabled={title === '' || description === ''}>Add</button>
      </div>
    </form>

  </>)
}
export default AddQuote
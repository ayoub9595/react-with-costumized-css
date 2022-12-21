import classes from './Card.module.css'
const Card = props => {
  return (<>
    <div className={classes['card-container']}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.buttons}>
        <button
          className={`${classes.button} ${classes['button-info']}`}
          onClick={props.handleInfo}><i className="fa-sharp fa-solid fa-info"></i></button>
        { props.deletable &&
        <button
          className={`${classes.button} ${classes['button-delete']}`}
          onClick={props.handleDelete} ><i className="fa-sharp fa-solid fa-trash"></i></button>
        }  
        {
          !props.liked ?
          <button
          className={`${classes.button} ${classes['button-like']}`}
          onClick={props.handleLike} ><i className="fa-solid fa-thumbs-up"></i></button> :
          <button
          className={`${classes.button} ${classes['button-like']}`}
          onClick={props.handleDislike}><i className="fa-solid fa-thumbs-down"></i></button>    
        }
      </div>
    </div>
  </>)
}

export default Card
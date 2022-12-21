import classes from './Modal.module.css'

const Modal = ({handleYes,handleNo}) => {
    return (
        <div className={classes.modal}>
            <h3>Warning!</h3>
            <p>Are you sure you want to delete this quote ?</p>
            <div className={classes.buttons}>
                <button className={classes.button} onClick={handleYes}>Yes</button>
                <button className={classes.button} onClick={handleNo}>No</button>
            </div>
        </div>
    )
}

export default Modal
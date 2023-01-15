import styles from './LoaderSkeleton.module.css'

const LoaderSkeleton = () => {
    const items = [1,2]
    const buttons = [1,2,3]
    return(<>
       <div className={styles['skeleton-container']}>
        <div className={styles.title}></div>
        <div className={styles.description}>
            {items.map((item) => (
               <div key={item} className={styles['description-item']}></div> 
            )) }
        </div>
        <div className={styles.buttons}>
            {buttons.map(button => (
                <div key={button} className={styles.button}></div>
            ))}
        </div>
       </div>
    </>)
}

export default LoaderSkeleton
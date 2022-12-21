import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuoteById } from '../services/QuoteServices'
import classes from './QuoteDetail.module.css'

const QuoteDetail = () => {
    
    const navigate = useNavigate()

    const [quote, setQuote] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        getQuoteById(id).then(data => setQuote(data))
    }, [])

    return (
        <>
            {!quote ? <div>Loading ...</div> :
                <>
                    <h1 className={classes.title}>{quote.title}</h1>
                    <div className={classes.container}>
                    <p className={classes.description}>{quote.description}</p>
                    <button className={classes.button} onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </>

            }
        </>
    )
}

export default QuoteDetail
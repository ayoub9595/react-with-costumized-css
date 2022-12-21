import { useContext, useEffect, useState } from 'react'
import classes from './AllQuotes.module.css'
import Card from '../components/Card'
import { deleteQuote, getAllQuotes } from '../services/QuoteServices'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../store/auth-context'
import Modal from '../components/Modal'
import { LIKED_QUOTES } from '../helpers/helpers'

const AllQuotes = () => {
    const context = useContext(AuthContext)
    const [elements, setElements] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [quoteId, setQuoteId] = useState(null)
    const navigate = useNavigate()
    
    const displayModal = id => {
        context.displayBackDrop()
        setShowModal(true)
        setQuoteId(id)
    }
    const handleYes = () => {
        deleteQuote(quoteId).then(() => {
            context.hideBackDrop()
            setShowModal(false)
            context.dislikeQuote(quoteId)
            alert('Quote with id: ' + quoteId + ' removed successfully !')
        })
        setElements(previous => previous.filter(element => element.id !== quoteId))

    }
    const handleNo = () => {
        context.hideBackDrop()
        setShowModal(false)
    }

    const handleLikeHanlder = quote => context.likeQuote(quote)

    const handleDislikeHanlder = quoteId => context.dislikeQuote(quoteId)

    useEffect(() => {
        const laodedQuotes = []

        getAllQuotes().then(data => {
            for (const key in data) {
                const quote = {
                    id: key,
                    title: data[key].title,
                    description: data[key].description
                }
                laodedQuotes.push(quote)
            }
            setElements(laodedQuotes)
        })
    }, [])
    return (
        <>
            {elements.length === 0 ? (<div>Loading ...</div>) :

                (
                    <>
                        {showModal && <Modal handleYes={handleYes} handleNo={handleNo} />}
                        <div className={classes.cards}>
                            {elements.map(element => (
                                <Card
                                    key={element.id}
                                    title={element.title}
                                    description={element.description}
                                    deletable= {true}
                                    liked={context.likedItems.findIndex(item => item.id === element.id) > -1}
                                    handleInfo={() => navigate(`${element.id}`)}
                                    handleDelete={() => displayModal(element.id)}
                                    handleLike={() => handleLikeHanlder(element)}
                                    handleDislike={() => handleDislikeHanlder(element.id)} />
                            ))}
                        </div>
                    </>)
            }
        </>
    )
}
export default AllQuotes
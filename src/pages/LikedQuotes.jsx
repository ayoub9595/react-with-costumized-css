import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"
import AuthContext from "../store/auth-context"
import classes from './LikedQuotes.module.css'

const LikedQuotes = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const likedItems = context.likedItems
    const handleDislike = id => {
        context.dislikeQuote(id)
    }
    return (
   <>
{   context.likedItems.length === 0 ? <p className={classes.paragraph}>No liked items so far</p> :
    
    <>
            <div className={classes.cards}>
                {likedItems.map(element => (
                    <Card
                        key={element.id}
                        title={element.title}
                        description={element.description}
                        deletable= {false}
                        liked={true}
                        handleInfo={() => navigate(`/${element.id}`)}
                        handleDislike={() => handleDislike(element.id) } />
                ))}
            </div>
        </>
    
    }
    </>
    )
}
export default LikedQuotes
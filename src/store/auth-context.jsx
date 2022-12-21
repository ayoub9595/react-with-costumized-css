import React, { useState } from "react";
import { useEffect } from "react";
import { LIKED_QUOTES } from "../helpers/helpers";

const AuthContext = React.createContext({
    likedItems: [],
    likeQuote: () => { },
    dislikeQuote: () => { },
    showBackdrop: null,
    displayBackDrop: () => { },
    hideBackDrop: () => { },
    showMobileNav: null,
    displayMobileNav: () => { },
    hideMobileNav: () => { }
});

export const AuthContextProvider = props => {

    const [likedItems, setLikedItems] = useState([]);
    const [showBackdrop, setShowBackDrop] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        const items = localStorage.getItem(LIKED_QUOTES)
        if (items) setLikedItems(JSON.parse(items))
    }, [])

    const likeQuoteHanlder = quote => {
        setLikedItems(prevState => [...prevState, quote]);
        const items = localStorage.getItem(LIKED_QUOTES)
        if (!items) localStorage.setItem(LIKED_QUOTES, JSON.stringify([quote]))
        else {
            const existingItems = JSON.parse(items)
            const newItems = [...existingItems, quote]
            localStorage.setItem(LIKED_QUOTES, JSON.stringify(newItems))
        }
    }

    const dislikeQuoteHandler = quoteId => {
        const quoteIndex = likedItems.findIndex(quote => quote.id === quoteId);
        const quotes = [...likedItems]
        if (quoteIndex !== -1) {
            quotes.splice(quoteIndex, 1)
            setLikedItems(quotes)
            localStorage.removeItem(LIKED_QUOTES)
            localStorage.setItem(LIKED_QUOTES, JSON.stringify(quotes));
        }

    }
    const showBackdropHandler = () => {
        setShowBackDrop(true)
    }
    const hideBackDropHandler = () => {
        setShowBackDrop(false)
    }
    const showMobileNavHandler = () => {
        setShowMobileNav(true)
    }
    const hideMobileNavHandler = () => {
        setShowMobileNav(false)
    }
    return (<AuthContext.Provider value={
        {
            likedItems,
            likeQuote: likeQuoteHanlder,
            dislikeQuote: dislikeQuoteHandler,
            showBackdrop,
            displayBackDrop: showBackdropHandler,
            hideBackDrop: hideBackDropHandler,
            showMobileNav,
            displayMobileNav: showMobileNavHandler,
            hideMobileNav: hideMobileNavHandler
        }
    }>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext

export const getAllQuotes = () => {
   return fetch('https://catch-of-the-day-wes-bos-ayoub.firebaseio.com/quotes.json')
   .then(response => response.json())
}

export const getQuoteById = quoteId => {
    return fetch('https://catch-of-the-day-wes-bos-ayoub.firebaseio.com/quotes/'+quoteId+'.json')
    .then(response => response.json())
}

export const addQuote = quote => {
    return fetch('https://catch-of-the-day-wes-bos-ayoub.firebaseio.com/quotes.json',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote) 
    })
    .then(response => response.json())
}

export const deleteQuote = quoteId => {
    return fetch('https://catch-of-the-day-wes-bos-ayoub.firebaseio.com/quotes/'+quoteId+'.json',{
        method: 'DELETE'
    }).then(response => response.json()) 
}
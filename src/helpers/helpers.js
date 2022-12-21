export const elements = likedItems => {
    return [
        { id: 1, title: 'Quotes', link: '/' },
        { id: 2, title: 'Add a quote', link: '/add' },
        { id: 3, title: 'Liked Quotes (' + likedItems.length + ')', link: '/liked' }
      ]
}

export const LIKED_QUOTES = 'LIKED_QUOTES'
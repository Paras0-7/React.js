import { booksAction } from "../slices/bookSlice";
export const fetchBooks = function(){
    return async function(dispatch){
        const fetchData = async function(){
            const response = await fetch('http://localhost:3001/books');

        if(!response.ok){
            throw new Error('Could not load books');
        }

        const data = await response.json();
        // console.log(data)
        return data;


    }


    try{
        const bookData = await fetchData();
        const books = bookData.map(function(book){
            return {
                id:book.id,
                price:book.price,
                quantity:1,
                title:book.title,
                authors: book.authors,
                image:book.thumbnailUrl,
                date: new Date().toDateString()
            }
        })

   
            dispatch(
                booksAction.loadBooks(books)
            )
    }catch(err){
        console.log('Error')
    }
}
}
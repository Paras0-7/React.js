import { Container } from "../UI/Container";
import { Book } from "./Book"
import styles from './css/BooksList.module.css'
import { useSelector } from "react-redux";
export  const BooksList = function(){

    const books = useSelector(function(state){
        return state.books.books
    })

   
    const content = books.map(function(book){
        return <Book book={book} key={book.id }/>
    });
 
    return (
        <Container>
        <h1 className={styles.heading}>Books</h1>
        <div className={styles.bookList}>
            {content}
        </div>
        </Container>
    )
}
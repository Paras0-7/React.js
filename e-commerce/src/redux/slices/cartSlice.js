import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        books: [],
        totalBooks: 0,
        totalPrice:0
    },
    reducers:{
        addBook(state,action){
            
            const newBook = action.payload;
            
            state.totalBooks++;
            state.totalPrice +=newBook.price;
            const existingBook = state.books.find((book)=>{
                return book.id === newBook.id;
            })

            if(existingBook){
                existingBook.quantity++;
                
            }else{
                state.books.push(newBook)
            }

            
        },

        removeBook(state,action){
            const id = action.payload;
            state.totalBooks--;

            const existingBook = state.books.find((book)=>{
                return book.id === id;
            })

            if(existingBook.quantity ===1){
                state.books = state.books.filter(function(book){
                    return book.id!==id;
                })
            }else{
                existingBook.quantity--;
                
            }
            state.totalPrice-=existingBook.price;
        },
        emptyCart(state){
            state.books=[];
            state.totalBooks=0;
            state.totalPrice=0;
        }
    }
})

export const cartReducers = cartSlice.reducer;
export const cartActions = cartSlice.actions;


// {
//     "id":1,
//     "title": "Unlocking Android",
//     "quantity":1,
//     "image": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    
//     "price":90,
//     "inventory":2
//   },
// {
//     "id":2,
//     "title": "Unlocking Android",
//     "quantity":1,
//     "image": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    
//     "price":90,
//     "inventory":2
//   },
// {
//     "id":3,
//     "title": "Unlocking Android",
//     "quantity":1,
//     "image": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    
//     "price":90,
//     "inventory":2
//   },
// {
//     "id":4,
//     "title": "Unlocking Android",
//     "quantity":1,
//     "image": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    
//     "price":90,
//     "inventory":2
//   },
// {
//     "id":5,
//     "title": "Unlocking Android",
//     "quantity":1,
//     "image": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    
//     "price":90,
//     "inventory":2
//   },

import { Routes,Route }  from 'react-router-dom'
import { Orders } from '../components/Orders/Orders';
import { BooksList } from './../components/Books/BooksList';
import { BookData } from '../components/Books/BookData';
import { Cart } from './../components/Cart/Cart';
import { Error } from './../components/Error/Error';

export const MainRoutes = function(){
    return(
        <Routes>
            <Route path="/" element={<BooksList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/book/:id" element={<BookData/>}/>
            <Route path="*" element={<Error/>}/>
      </Routes>
    )
}
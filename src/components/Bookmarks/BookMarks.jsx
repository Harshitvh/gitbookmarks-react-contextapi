import React,{useEffect,useContext} from 'react'
import BookMarkItem from './BookMarkItem';
import BookMarksContext from './../../context/BookMarks/BookMarkContext'
import './BookMarks.css'

 const BookMarks = () => {
     const bookMarksContext = useContext(BookMarksContext);
     const bookmarks = bookMarksContext.bookmarks;
     useEffect(()=>{
        bookMarksContext.getBookMarks()
     },[])
    if(bookmarks!==null && bookmarks.length>0)
    {
        return bookmarks.map(bm=><BookMarkItem  bm ={bm}></BookMarkItem>)
    }
    else
     return (
        <div>
            <p>Please Add Bookmarks</p>
        </div>
    )
}

export default BookMarks;

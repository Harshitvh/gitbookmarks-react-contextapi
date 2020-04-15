import React,{useReducer} from 'react'
import BookMarkReducer from './BookMarkReducer';
import BookMarkContext from './BookMarkContext';
import {GET_BOOKMARKS,ADD_BOOKMARK,REMOVE_BOOKMARK} from './../Types'

const BookMarkState = (props)=>{
    const initialState = {
        bookmarks: []
    }
    const [state, dispatch] = useReducer(BookMarkReducer, initialState)
    const getBookMarks=async ()=>{
        dispatch({
            type:GET_BOOKMARKS,
            payload:  state.bookmarks
        })

    }

    const addBookMarks = async(repo)=>{
              dispatch({
                  type: ADD_BOOKMARK,
                  payload: repo
              })
    }

    const removeBookMarks = async(id)=>{
        dispatch({
            type: REMOVE_BOOKMARK,
            payload: id
        })
}
    return <BookMarkContext.Provider
    value={{
        bookmarks: state.bookmarks,
        addBookMarks,
        removeBookMarks,
        getBookMarks

    }}>
      {props.children}
    </BookMarkContext.Provider>

}
export default BookMarkState;
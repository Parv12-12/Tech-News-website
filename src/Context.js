import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { type } from "@testing-library/user-event/dist/type";

  const initialState = {
        isLoading :true,
        query:"css",
        nbPages:0,
        page:0,
        hits:[],
    };
    let API = "http://hn.algolia.com/api/v1/search?";


const AppContext = createContext();

const AppProvider = ({children})=>{
 
    const [state, dispatch] = useReducer(reducer , initialState)
    
    
    const fetchApiData = async (url)=>{

        dispatch({
            type:"SET_LOADING",
        })

        try {

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);   
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages,

                }

            })
            
            
        } catch (error) {
            console.log(error);
            
            
        }

    }

    //to remove the post

    const removePost =(postID)=>{
        dispatch({
            type:"REMOVE_POST",
            payload:postID,
        })
    }

    //to search the post

    const searchPost = (searchedQuery)=>{
        dispatch({type:"SEARCH_POST",
            payload:searchedQuery
        })

    }

    //pagination 

    const getNextPage = ()=>{
        dispatch({type:"NEXT_PAGE"});
    }
      const getPrevPage = ()=>{
        dispatch({type:"PREV_PAGE"});
    }

    //to fetch data from api

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query , state.page])

  

    return(
        <>
            <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>
        </>
    )
}

const UseGlobalContext = ()=>{
    return useContext(AppContext)
};

export {AppContext,AppProvider,UseGlobalContext};
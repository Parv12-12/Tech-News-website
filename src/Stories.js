import React, { useEffect } from "react";
import { UseGlobalContext } from "./Context";

const Stories = ()=>{

  
    const {hits , isLoading , removePost} = UseGlobalContext();

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <>
       <div className="stories-div">
       {hits.map((currPost)=>{
        const {title,author,objectID,url,num_comments} = currPost;
        return (
            
                <div className="card" key={objectID}>
                    <h2>{title}</h2>
                    <p> <span>by {author}</span> | <span>{num_comments}</span> comments</p>
                    <div className="card-button">
                        <a href={url} target="_blank">Read More</a>
                        <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                    </div>

                </div>
            
        )

       })}
       </div>
       </>
    )

}

export default Stories;
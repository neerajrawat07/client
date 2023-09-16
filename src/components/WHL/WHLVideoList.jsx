import React from 'react'
import ShwoVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({page,videoList}) {
  
  return (
 
    <>
     {
              videoList?.map(m=>{
                return(
                    <>
                    <ShwoVideoList videoId={m._id} key={m._id}/>
                    </>
    
                )
            })
     }
      
     
    </>
  )
}

export default WHLVideoList
import React from 'react'

const Button =({children,className, onClick, type, style}) => {
    return(


<button className={className} 
style={style} 
onClick = {onClick}> 
    {children}

    </button>


//         <div>
// <button className={className} style={style} 
// onClick={()=>{
// return this.likeIt()
// }}>Like</button>
// <button className={className} style={{ margin:'8px 12px'}} onClick={()=>{
// return this.dislikeIt(animal)
// }}>Dislike</button>
// <button className={className} style={{ margin:'8px 12px'}} onClick={()=>{
// return this.discardIt(animal)
// }}>Discard</button>

// </div>

    )
}

export default Button 
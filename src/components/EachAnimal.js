import React from 'react'
import AnimalItem from './AnimalItem'

const EachAnimal = (props) => {
return (
<div>
{props.animals.map((animal,idx)=>{
    return(

<div  style={{
        display:'grid',
        height:'100%',
        // gridTemplateRows: "100px",
        gridTemplateColumns: "repeat(3, 1fr)",
        flexDirection:"column"
    }}>
<AnimalItem animal={animal} key={animal.objectId} likeIt={props.likeIt} dislikeIt={props.dislikeIt} discardIt= {props.discardIt} />
</div>
    )

})
}
</div>
)
}

export default EachAnimal 
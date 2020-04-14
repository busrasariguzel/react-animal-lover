import React from 'react'
import Button from './Button'

const AnimalItem =({likeIt, dislikeIt, discardIt, animal:{image, name,type,description} , animal ={animal}}) => {
    return (
        <div>
        <div  className="ui card" style={{width:'75%', padding:'20px'}}>
    <div className="content">
<img src={image} alt="..." style={{width:'200px', height:'280px'}}></img>
    <h2>{name}</h2>
    <div className="meta">{type}</div>
<div className="description"> {description}</div>

<hr />

<div className="buttons"
style={{
    display:'flex',
    flexDirection:'row',
    paddingLeft: '0px',
    alignItems: 'start',
    // height:'2px'
}}>

<Button className="ui blue button" style={{ margin:'8px 12px'}} 
onClick={()=>{
return likeIt()
}}
>Like</Button>
<Button className="ui red button" style={{ margin:'8px 12px'}} onClick={()=>{
return dislikeIt()
}}>Dislike</Button>
<Button className="ui grey button" style={{ margin:'8px 12px'}} onClick={()=>{
return discardIt(animal)
}}>Discard</Button>

</div>
</div>

</div>
</div>
)

    


}

export default AnimalItem
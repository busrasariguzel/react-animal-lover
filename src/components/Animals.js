import React, {Component} from 'react'
import faker from 'faker'

let animals = [
{

    name : 'Zeyno',
    type: 'Dog',
    description: faker.lorem.sentence(),
    image:'/images/kopek4.jpg',

},
{
    name :'Betty',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/dog1.jpg',

},
{
    name : 'Kamuran',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/dog5.jpg',

},
{
    name : 'Loco',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/kopek2.jpg',

},
{
    name : 'Sally',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion1.jpg'

},
{
    name : 'Pamuk',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion2.jpg',

},

{
    name : 'Muzur',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion5.jpg',

},
{
    name : 'Beth',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion6.jpg',

},
{
    name : 'Kuzu',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu2.jpg',

},
{
    name : 'Toddy',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu3.jpg',

},
{
    name : 'Bidik',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu4.jpg',

},
{
    name : 'Bodo',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu11.jpg',

},

]



class Animal extends Component {
constructor(){
super()
this.state = {
animals,
likes:[],
dislikes:[]

}
}
likeIt =() => {

this.state.likes.push()
}
dislikeIt =() => {
    
}
discardIt =() => {
    
}

render(){
    return (
        
        <div>
            <h1>Animal Lover</h1>
            {this.state.animals.map((animal,idx)=>{
    return(
            <div  className="ui card" style={{width:'75%', padding:'20px'}}>
    <div className="content">
<img src={animal.image} alt="..." style={{width:'300px', height:'310px'}}></img>
    <h2 className="meta">Name: {animal.name}</h2>
    <div className="meta"> Type: {animal.type}</div>
<hr />
<div className="description"> {animal.description}</div>
<button className="ui blue button" style={{ margin:'10px 15px'}} onClick={()=>{
return this.likeIt()
}}>Like</button>
<button className="ui red button" style={{ margin:'10px 15px'}} onClick={()=>{
return this.dislikeIt()
}}>Dislike</button>
<button className="ui grey button" style={{ margin:'10px 15px'}} onClick={()=>{
return this.discardIt()
}}>Discard</button>

</div> 
</div>
        


)})}


</div>


    )
}

}

export default Animal
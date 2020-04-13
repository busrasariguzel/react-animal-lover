import React, {Component} from 'react'
import faker from 'faker'

let animals = [
{

    name : 'Zeyno',
    type: 'Dog',
    description: faker.lorem.sentence(),
    image:'/images/kopek4.jpg',
    objectId: '1'

},
{
    name :'Betty',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/dog1.jpg',
    objectId: '2'


},
{
    name : 'Kamuran',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/dog5.jpg',
    objectId: '3'

},
{
    name : 'Loco',
    type: 'dog',
    description: faker.lorem.sentence(),
    image:'/images/kopek2.jpg',
    objectId: '4'

},
{
    name : 'Sally',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion1.jpg',
    objectId: '5'

},
{
    name : 'Pamuk',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion2.jpg',
    objectId: '6'

},

{
    name : 'Muzur',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion5.jpg',
    objectId: '7'

},
{
    name : 'Beth',
    type: 'lion',
    description: faker.lorem.sentence(),
    image:'/images/lion6.jpg',
    objectId: '9'

},
{
    name : 'Kuzu',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu2.jpg',
    objectId: '9'

},
{
    name : 'Toddy',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu3.jpg',
    objectId: '10'

},
{
    name : 'Bidik',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu4.jpg',
    objectId: '11'

},
{
    name : 'Bodo',
    type: 'sheep',
    description: faker.lorem.sentence(),
    image:'/images/kuzu11.jpg',
    objectId: '12'

},

]



class Animal extends Component {
constructor(){
super()
this.state = {
animals,
likes:[],
dislikes:[],


}
this.likeIt = this.likeIt.bind(this);
this.dislikeIt = this.likeIt.bind(this);
}
likeIt =(animal) => {
// if (!this.state.likes.includes(animal)){
//     if(this.state.dislikes.includes(animal)){
//         let dislikes2 = this.state.dislikes.filter(item=> item !==animal)
//         this.setState({dislikes: dislikes2})
//     }
// }
this.setState({likes: [...this.state.likes, animal]}, () => {
    // this.state.likes.map(item =>{
console.log(this.state.likes.name)
    // })
})

}
dislikeIt =(animal) => {
    this.setState({dislikes: [...this.state.dislikes, animal]}, () => {
        console.log(this.state.dislikes.name) 
    })
}
discardIt =() => {
    
}

render(){
    return (
        
        <div>
            <h1>Animal Lover</h1>
    <div className = "main section" 
    style={{
        display:'flex',
        flexDirection:"row"
    }}>
<div className="display section"
style={{
    display:'grid',
    height:'100%',
    // gridTemplateRows: "100px",
    gridTemplateColumns: "repeat(3, 1fr)",
    flexDirection:"column"
}}>
            {this.state.animals.map((animal,idx)=>{
    return(
            <div  key={idx} className="ui card" style={{width:'75%', padding:'20px'}}>
    <div className="content">
<img src={animal.image} alt="..." style={{width:'200px', height:'280px'}}></img>
    <h2>{animal.name}</h2>
    <div className="meta">{animal.type}</div>
<div className="description"> {animal.description}</div>

<hr />

<div className="buttons"
style={{
    display:'flex',
    flexDirection:'row',
    paddingLeft: '0px',
    alignItems: 'start',
    // height:'2px'
}}>

<button className="ui blue button" style={{ margin:'8px 12px'}} onClick={()=>{
return this.likeIt()
}}>Like</button>
<button className="ui red button" style={{ margin:'8px 12px'}} onClick={()=>{
return this.dislikeIt(animal)
}}>Dislike</button>
<button className="ui grey button" style={{ margin:'8px 12px'}} onClick={()=>{
return this.discardIt()
}}>Discard</button>

</div>
</div>

</div>
// </div>
)})} 






</div>
{/* map ends */}
<div className="section2">
<div className="likes"> 
    <h2>Likes </h2>
{this.state.likes.name}
</div>
<div className="dislikes"> 
    <h2>Dislikes </h2>
</div>
</div>

</div>


{/* main div ends */}
</div>
    )
}

}

export default Animal
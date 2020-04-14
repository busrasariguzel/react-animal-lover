import React, {Component} from 'react'
import faker from 'faker'
import EachAnimal from './EachAnimal'
import animals from '../data/data'



class App extends Component {
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
    console.log(this.state.likes)
        // })
    })
    
    }
    dislikeIt =(animal) => {
    if (!this.state.dislikes.includes(animal)){
        if(this.state.likes.includes(animal)){
            let likes2 = this.state.likes.filter(item => item !== animal);
            this.setState({likes: likes2})
        }
        this.setState({dislikes: this.state.dislikes.concat(this.state.animals.filter(item => item === animal))})
        console.log(this.state.dislikes.name)
    }
    }
    discardIt =(animal) => {
        const updatedAnimals = this.state.animals.filter((item => item !== animal));
        this.setState({animals:updatedAnimals});
        console.log(updatedAnimals)
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


    <EachAnimal animals={this.state.animals} likeIt={this.likeIt} dislikeIt={this.discardIt} discardIt={this.discardIt}/>
    
    </div>
    {/* map ends */}
    <div className="section2">
    <div className="likes"> 
        <h2>Likes </h2>
    {this.state.likes.name}
    </div>
    <div className="dislikes"> 
    
         <h2>Dislikes </h2>
        {/* {this.state.dislikes.map((animal , idx) => {
            <p>{animal.name}</p> 
         })}  */}
    </div>
    </div>
    
    </div>
    
    
     {/* main div ends  */}
    </div>
        )
    }
    
    }
    
    export default App
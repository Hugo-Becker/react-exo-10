
import './App.css';
import React,{Component} from 'react'

class App extends Component {

  state={
    titre:'Hello World ',
    titre2:'Encore new titre',
    paragraphe:'This is a paragraphe',
    para2:'This is new paragraphe'


  }
  

  changeViaBind=(param)=>{
    this.setState({
      titre:param
    })
  }
  
  changePara =()=>{

    this.setState({
      paragraphe:'new paragraphe here'
    })
  }

  changeTitle2=()=>{
    let input=document.querySelector('input')
    this.setState({
      titre2:input.value
    })

  }
  changePara2=()=>{
    let textarea=document.querySelector('textarea')
    this.setState({
      para2:textarea.value
    })
  }


  render(){

    return (

      <div>

        <h1 onClick={this.changeViaBind.bind(this,'LETS GOOOO NEW TITLE VIA BIND ')}>{this.state.titre}</h1>

        <h1>{this.state.titre2}</h1>

        <p>{this.state.paragraphe}</p>
        <p>{this.state.para2}</p>

        <button onClick={this.changePara}> Modifier le paragraphe</button>
        <input type='text'></input>
        <button onClick={this.changeTitle2}>Change titre 2</button>
        <textarea onChange={this.changePara2}></textarea>


      </div>
      
    )
    

  }
  
}

export default App;

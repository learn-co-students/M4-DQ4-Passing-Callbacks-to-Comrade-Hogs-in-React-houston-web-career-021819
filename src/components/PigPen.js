import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub", 
  "MasterBlaster"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim)
  }

  relax = () => {
    const newState = {environment: 'docile'}
    this.setState(newState)
  }

  alterEnvironment = (vibe) => {
    console.log('you reached me')
    if (vibe === "inhospitable")
      this.audio.play()
      this.setState({environment :vibe})
      //trigger pig here?
  }

  generateSheeple = () => {
    return pigs.map((name, idx) => (  // pig is connected only through its prop environment, which is just pigpen's environment
      <Pig key={idx} id={name} name={name} environment={this.state.environment}/>
    ))
  }

  render() {
    const sheeple = this.generateSheeple()
    //console.log
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 environment={null} alterEnvironment={this.alterEnvironment/*null */} />
      </div>
    )
  }
}

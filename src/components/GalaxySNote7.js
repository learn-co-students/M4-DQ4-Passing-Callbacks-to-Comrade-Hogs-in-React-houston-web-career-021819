import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
  }

  relax = () => {
  }

  exclaim = () => {
    //console.log('hi')
    this.setState({
      panicked: true  //add exclamation mark
    })

    this.props.alterEnvironment('inhospitable') // trigger the event in parent

    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()

    setTimeout(() => {
      this.setState({panicked:false});
      this.props.alterEnvironment('docile')
    }, 3000);
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)
  
  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}

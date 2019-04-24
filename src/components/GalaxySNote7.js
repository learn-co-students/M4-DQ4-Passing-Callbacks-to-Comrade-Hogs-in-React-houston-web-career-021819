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
    //change environment by calling alterEnvironment function in parent component
    this.props.alterEnvironment("inhospitable");
    //call relax here after 2000 ms, relax is called as a callback function. passing the relax function as an argument 
    setTimeout(this.relax, 2000);
  }

  relax = () => {
    //change state
    this.setState({panicked: false});
    //change environment, alterEnvironment takes an argument, then change environment to the argument
    //line below will change environment back to docile
    this.props.alterEnvironment("docile");
  }

  exclaim = () => {
    this.setState({panicked: true})
    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

/*if this pig's state is panicked, then call this.panic()function. add exclamation mark for this pig*/

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}

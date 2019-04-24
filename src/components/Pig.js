import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

   /*if a pig's environment is inhospitable, then call this.panic()function. add exclamation mark for one pig*/

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {
          this.props.environment === "inhospitable" ? this.panic(): null
        }
      </div>
    )
  }
}

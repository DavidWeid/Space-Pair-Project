import React, { Component } from 'react';
import "./style.css";

class Hightlighter extends Component {
  state = {
    move: 0
  }

  moveRight = () => {
    // console.log(this.state.move)
    // console.log((this.props.highlightArr.length - 1) * -300)
    // console.log( ((this.props.highlightArr.length - 1) * -300) + 1 )
    if (this.state.move >= ((this.props.highlightArr.length - 1) * -300) + 1) {
      const box = document.getElementById("highlighterBox");
      let pos = this.state.move;
      let newPos = pos - 300;
      let timer = setInterval(() => {
        if (pos <= newPos) {
          clearInterval(timer);
          this.setState({ move: pos });
        } else {
          pos = pos - 3;
          box.style.left = pos + "px";
        }
      }, 5)
    }
  }

  moveLeft = () => {
    // console.log(this.state.move)
    if (this.state.move <= -1) {
      const box = document.getElementById("highlighterBox");
      let pos = this.state.move;
      let newPos = pos + 300;
      let timer = setInterval(() => {
        if (pos >= newPos) {
          clearInterval(timer);
          this.setState({ move: pos });
        } else {
          pos = pos + 3;
          box.style.left = pos + "px";
        }
      }, 5)
    }
  }

  setMove = (pos) => {
    this.setState({ move: pos })
  }

  render() {
    return (
      <div className="highlighter">
        <div className="moveButtons">
          <button className="moveBtn moveBtnLeft" onClick={this.moveLeft}><i className="fas fa-caret-square-left"></i></button>
          <button className="moveBtn moveBtnRight" onClick={this.moveRight}><i className="fas fa-caret-square-right"></i></button>
        </div>
        <div className="highlighterHolder">

          <div id="highlighterBox" className="highlighterBox">

            {this.props.highlightArr.map(each =>
              <div className="highlight" key={each.sol}>
                <img src={each.url} alt={each.sol} />
                <div className="highlightInfo">
                  <p>Sol: {each.sol}</p>
                  <p>Camera: {each.camera}</p>
                  <p>{each.description}</p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    );
  }
}

export default Hightlighter;
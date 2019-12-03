/*global kakao*/
import React from 'react';

class SubwayMap extends React.Component {
  constructor(props) {
    super(props)

  }
marking=()=>{
    
   
   
   this.props.on(this.props.ohno)
  }

  componentDidUpdate() {
    if (this.props.ohno) { 
      this.marking()
    }
  }



  render() {
    return (
      <div id='map' style={{ width: 100 + '%', position:'fixed',top:0,bottom:0,zIndex:-10 }} onClick={this.initMap}>
      </div>
    )
  }

}
export default SubwayMap;

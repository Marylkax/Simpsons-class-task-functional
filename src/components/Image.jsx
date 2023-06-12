import React, { Component } from "react";


const Image = (props) => {
  const { image, character } = props; 
  return <img src={image} alt={character} />;
}
// class Image extends Component {
//   render() {
//     const { image, character } = this.props;

//     return <img src={image} alt={character} />;
//   }
// }

export default Image;

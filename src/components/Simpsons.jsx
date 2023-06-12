import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";

// don't need to import React when using functional?   

const Simpsons = (props) =>{ 
  
    const { simpsons, onDelete, onLikeToggle, onSearchInput, onAlphabetList, onReset, searchInput, alphabetList} = props;

    return (
      <>
       <Controls
        onSearchInput={onSearchInput}
        onAlphabetList={onAlphabetList}
        onReset={onReset}
        searchInput={searchInput}
        alphabetList={alphabetList}
        />
        {simpsons.map((item, index) => {
          return (
            <Character
              item={item}
              key={item.id}
              onDelete={onDelete} //passing down to Character component
              onLikeToggle={onLikeToggle}
            />
          );
        })}
      </>
    );

}


// class Simpsons extends Component {
//   render() {
//     const { simpsons, onDelete, onLikeToggle, onSearchInput, onAlphabetList, onReset, searchInput, alphabetList} = this.props;

//     return (
//       <>
//        <Controls
//         onSearchInput={onSearchInput}
//         onAlphabetList={onAlphabetList}
//         onReset={onReset}
//         searchInput={searchInput}
//         alphabetList={alphabetList}
//         />
//         {simpsons.map((item, index) => {
//           return (
//             <Character
//               item={item}
//               key={item.id}
//               onDelete={onDelete} //passing down to Character component
//               onLikeToggle={onLikeToggle}
//             />
//           );
//         })}
//       </>
//     );
//   }
// }
// no state or lifecycle methods, so this is able to be converted to functional way. Able to have mix of class based and functional components

export default Simpsons;

import React, { Component } from 'react';


const Controls = (props) => {
    const {onSearchInput, onAlphabetList, onReset, searchInput, alphabetList} = props;
        return (
        <>
        <input id="inputbox" onInput={onSearchInput} type="text" value={searchInput}/>
        <select id="listbox" onChange={onAlphabetList} value={alphabetList}>
        <option value=""></option>
        <option value="asc"> Asc </option>
        <option value="desc">Desc</option>
        </select>
        <button onClick={onReset}> Reset</button>
        </>
        );
    }
// class Controls extends Component {
   
//     render() { 
//         const {onSearchInput, onAlphabetList, onReset, searchInput, alphabetList} = this.props;
//         return (
//         <>
//         <input id="inputbox" onInput={onSearchInput} type="text" value={searchInput}/>
//         <select id="listbox" onChange={onAlphabetList} value={alphabetList}>
//         <option value=""></option>
//         <option value="asc"> Asc </option>
//         <option value="desc">Desc</option>
//         </select>
//         <button onClick={onReset}> Reset</button>
//         </>
//         );
//     }
// }
 
export default Controls;
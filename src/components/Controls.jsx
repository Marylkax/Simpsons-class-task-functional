import React, { Component } from "react";

const Controls = (props) => {
  const { onSearchInput, onAlphabetList, onReset, search, alphabetList } =
    props;
  return (
    <>
      <input
        id="inputbox"
        onInput={onSearchInput}
        type="text"
        search={search}
      />
      <select id="listbox" onChange={onAlphabetList} value={alphabetList}>
        <option value=""></option>
        <option value="asc"> Asc </option>
        <option value="desc">Desc</option>
      </select>
      <button onClick={onReset}> Reset</button>
    </>
  );
};


export default Controls;

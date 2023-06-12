import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";


const Simpsons = (props) => {
  const {
    simpsons,
    onDelete,
    onLikeToggle,
    onSearchInput,
    onAlphabetList,
    onReset,
    search,
    alphabetList,
  } = props;

  return (
    <>
      <Controls
        onSearchInput={onSearchInput}
        onAlphabetList={onAlphabetList}
        onReset={onReset}
        search={search}
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
};

export default Simpsons;

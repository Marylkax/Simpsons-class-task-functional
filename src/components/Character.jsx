import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } =
      props.item;
    const { onLikeToggle, onDelete } = props;

    if (characterDirection === "Left") {
      return (
        <div className="characterContainer">
          <Name
            character={character}
            onLikeToggle={onLikeToggle}
            id={id}
            liked={liked}
          />
          <Image image={image} />
          <Quote quote={quote} />
          <Delete onDelete={onDelete} id={id} />
        </div>
      );
    }

    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete onDelete={onDelete} id={id} /> 
        {/* passes to Delete */}
      </div>
    );
}


export default Character;

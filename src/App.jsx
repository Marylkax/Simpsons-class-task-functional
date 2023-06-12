// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

const App  = () => {
  const [simpsons, setSimpsons] = useState();
  const [liked, setLiked] = useState("");
  const [search, setSearch] = useState("");
  const [alphabetList, setAlphabetList] = useState("");
  // reset?


const onInitialise = async () => {
    const {data} = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
  
   data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    setSimpsons(data); // historic way is a mix of class and functional
  };

  useEffect(() => {
    onInitialise();
  }, []); // API calls need to run once, dependency array 

  const onLikeToggle = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });
   
    _simpsons[indexOf].liked = !_simpsons[indexOf].liked; //switches between true and false
    setSimpsons(_simpsons)
  };

  const onDelete = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = _simpsons.findIndex((char) => {
      return char.id === id;
    });
    _simpsons.splice(indexOf, 1);
    setSimpsons(_simpsons)
  };

  const onSearchInput = (e) => {
    setSearch(e.target.value);
    // this.setState({ reset: false });
  };

  const onLikeToggleInput = (e) => {
    setLiked(e.target.value);
    // this.setState({ reset: false });
  };

  const onAlphabetList = (e) => {
   setAlphabetList(e.target.value );
  };
  

  // const onReset = (e) => {
  // //  this.onInitialise();
  //  setOnReset (reset , true);
  // };

   if (!simpsons) return <Loading />;

  if (simpsons.length === 0) return <p>You deleted everything!</p>;

  let filteredList = [...simpsons];

    let total = 0;
    simpsons.forEach((char) => {
      if (char.liked) total++;
    });
    

    // if (onsearchInput){
    //   filteredList = filteredList.filter((item)=> {
    //   console.log(item.character);
    //     if
    //   (item.character.toLowerCase().includes(searchInput.toLowerCase())) {
    //       return true;
    //     }
    //   }); }

    //   if (onAlphabetList === 'asc'){
    //     filteredList.sort((itemOne, itemTwo) => {
    //       if (itemOne.character > itemTwo.character) return 1;
    //       if (itemOne.character < itemTwo.character) return -1;
    //     })
    //   } else if (onAlphabetList === 'desc'){
    //     filteredList.sort((itemOne, itemTwo) => {
    //       if (itemOne.character < itemTwo.character) return 1;
    //       if (itemOne.character > itemTwo.character) return -1;
    //     })
    //   } 
    // how to put this in

    return (
      <>
        <h1>Total no of liked chars #{total}</h1>
        <Simpsons
          // searchInput={onsearchInput}
          alphabetList={onAlphabetList}
          // onReset={this.onReset}
          // onSearchInput={onSearchInput}
          simpsons={filteredList}
          onDelete={onDelete} // function can now be passed down to Simpsons, then to character. Passed directly  in current scope
          onLikeToggle={onLikeToggle}
          onAlphabetList={onAlphabetList}
        />
      </>
    );

}

export default App;

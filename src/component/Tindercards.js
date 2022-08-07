import React from "react";
import TinderCard from "react-tinder-card";
import "./Tindercards.css";

function Tindercards() {
  //Hooks are funtions that can be used  in react components.
  //they are similar to state and props,but they are not.
  const [avengers] = React.useState([
    {
      name: "Thor",
      url: "https://ae01.alicdn.com/kf/H9846c1ddec084cf78a51d0f3a7f938edT/Acecorner-Thor-Hammer-Lightning-Superhero-3D-Creative-Sticker-LED-Wall-Lamp-Marvel-Avengers-Night-Light-for.jpg",
    },
    {
      name: "Hulk",
      url: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mas_mob_01_0.jpg",
    },
    {
      name: "Iron Man",
      url: "https://www.thewrap.com/wp-content/uploads/2021/08/Robert-Downey-Jr-Iron-Man-936x527.jpg",
    },
    {
      name: "Spider Man",
      url: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/ss_dfba6f2477bfa42be69ddfdffbd421d3943d20bf.1920x1080.jpg?t=1659553008",
    },
    {
      name: "Doctor Strange",
      url: "https://images.hindustantimes.com/img/2022/04/27/1600x900/Benedict_Dr_Strange_1646841251056_1651066424148.jpeg",
    },
    {
      name: "Captain Marvel",
      url: "https://www.the-sun.com/wp-content/uploads/sites/6/2021/11/TT_BrieLarsonCOMP.jpg",
    },
    {
      name: "Captain America",
      url: "https://www.aiesec.in/wp-content/uploads/2018/08/Captain-america-1.jpg",
    },
  ]);

  return (
    <div className="cardContainer">
      {avengers.map((avenger) => (
        <TinderCard
          className="swipe"
          key={avenger.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${avenger.url})` }}
          >
            <h2 className="name">{avenger.name}</h2>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Tindercards;

import React, { useState } from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'

const App = () => {

  const songdata = [
    {img: "https://www.ilyricshub.com/wp-content/uploads/2022/11/apna-bana-le-bhediya.jpg", song: "Apna Bana Le", artist: "Arjit Singh", added : false},
    {img: "https://images.genius.com/f938c6050411b1d383abd52480ae4f6c.1000x1000x1.png", song: "Chaleya", artist: "Anirudh Ravichander", added : false},
    {
      img : "https://i.scdn.co/image/ab67616d0000b273b0f9ceb59927ab76fe6269be",
      song : "Hamari Adhuri Kahani",
      artist : "Arijit Singh",
      added : false
    },
    {
      img : "https://images.genius.com/f156e459d8059bbb4e6ba3e5364208ec.960x960x1.jpg",
      song : "Dheere Dheere Se Meri Zindagi Mein Aana",
      artist : "Honey Singh",
      added : false
    },
    {
      img : "https://improxy.starmakerstudios.com/tools/im/240x/production/cover_img/ce42452ab57f7866ea75e01c1d0fed0a.jpg",
      song : "Saiyaara",
      artist : "Faheem Abdullah",
      added : false
    },
    {
      img : "https://c.saavncdn.com/793/Ae-Dil-Hai-Mushkil-Title-Track-From-Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
      song : "Ae dil hai mushkil",
      artist : "Arjit Singh",
      added : false
    },
    {
      img : "https://i.ytimg.com/vi/ttIKsnxPrMY/maxresdefault.jpg",
      song : "Nadaan Parindey Lyrics",
      artist : "A.R. Rahman",
      added : false
    },
  ];

  const [val, setVal] = useState(songdata);
  
  const handleFavorites = (cardIndex) => {
    setVal((pre) => {
      return pre.map((item, index) => {
        if(index === cardIndex) {
          return {...item, added : !item.added}
        }
        return item
      })
    })
  }

  return (
    <>
     <NavBar values = {val}/>
     <div className='px-20 justify-center flex gap-10 mt-10 flex-wrap'>
        {
          val.map((item, index)=> (
             <Card values = {item} key = {index} cardIndex = {index} handleFavorites = {handleFavorites} />
          )
          )
        }
     </div>
     
    </>
  )
}

export default App

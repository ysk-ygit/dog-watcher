import React from 'react'
import {useState} from 'react';
import {DogImage} from './DogImage';

export const Description = () => {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
    const change_image = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
       .then((res)=>res.json())
        .then((data)=>setDogUrl(data.message))
    }
   
  return (
 <main>
  <div id="description">
    <p>犬の画像を表示するサイトです</p>
    <p>更新ボタンを押すと、違う写真が見られます</p>
    <p>犬種を選択することもできます。</p>
  </div>
  <div>
    <DogImage url={dogUrl}/>
  </div>
  <button onClick={change_image}>更新</button>
 </main>
  )
}

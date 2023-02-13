import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
    const[breeds, setBreeds] = useState([]);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
         .then((data) => { 
          const breeds_list = data.message
          setBreeds(Object.keys(breeds_list)) //Object.keys(中身)では中身が持つプロパティの名前(今回は2階層目)の配列を返す　
        })
        },[]); //useEffectは特定タイミングで発火する。第二引数が空なら最初のみ。変数が入っていればそれの変化と対応

    const[selectedBreed, setSelectedBreed] = useState(null);
    let hound = selectedBreed;
    let subimglink = `https://dog.ceo/api/breed/${hound}/images/random/3`

    const[subdogimgs, setSubdogimags] =useState([]);
    let show_imgs = () => {
        fetch(subimglink)
        .then((res) => res.json())
         .then((data) => { 
          setSubdogimags(data.message)
        })
        if(hound==null) {
          alert("犬種を選択してください")
         }
        }
  return (
    <>
    <div>
     <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
    </div>
    <div id="descriptionsub">
    <button id="view_imgsub_button" onClick={show_imgs}>表示</button>
    <p>犬種を選んで表示ボタンを押すと、その犬種の写真が表示されます。</p>
     {subdogimgs.map((img)=>
      <img id="imgsub" src={img}></img>
     )}
    </div>

    </>
  )
} 



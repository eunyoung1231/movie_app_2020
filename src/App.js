import React from 'react'
import Potato from './Potato'

// function Food(props) {
//   console.log(props)
//   return <h1>I love {props.fav}</h1>
// }

// function Food({fav}) {  // props 중 fav 속성만 가져와서 사용하겠다
//   return <h1>I love {fav}</h1>
// }


function Food({name, picture}) {  // Food는 함수형 Component임. 함수형 Component는 return이 꼭 있어야 함
  return (
    <div>
      <h2>I love {name}~</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    foodName: 'Kimchi',
    image: 'https://contents.lotteon.com/itemimage/LD/66/06/19/07/4_/0/LD660619074_0_1.jpg/dims/resize/256x256'
  },
  {
    id: 2,
    foodName: 'Bibimbap',
    image: 'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/16344466-1a85-447a-a8eb-4b69b02bdd1b.jpeg'
  }
]

// function renderFood(dish) {
//   return <Food name={dish.foodName} picture={dish.image} />
// }

function App() {
  return (
    <div>
      { foodILike.map(dish => (
        <Food key={dish.id} name={dish.foodName} picture={dish.image} />
      )) }
      {/* { foodILike.map((renderFood)) } */}
      {/* <h1>Hello h1</h1>
      <h2>Hello h2</h2> */}
      {/* <Food fav="kimchi" something={true} papapa={['hello', 1, 2, 3, 4, true]} />
      <Food fav="raman" /> */}
    </div>
  )
}

export default App;

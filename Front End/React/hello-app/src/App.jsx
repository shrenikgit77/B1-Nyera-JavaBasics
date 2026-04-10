import logo from './logo.svg';
import './App.css';
import catimage from "./pictures/cat.jpg";

import Header from './component/Header';

let App = () => {
  return (
    <div className="App">
      {/* <h1 className="text-red-900 hover:text-green-900 bg-yellow-400 text-center p-3">Hello World</h1> */}

      <Header />
      <Images />
      <About />
      <Cards />
    </div>
  );
}




let Images = () => {
  return (
    <div className='flex justify-center overflow-x-auto'>
      <img src="/images/cat.jpg" className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
      <img src={catimage} className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
      <img src={catimage} className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
      <img src={catimage} className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
      <img src={catimage} className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
      <img src={catimage} className="border-8 border-blue-200 m-4 rounded-xl shadow-2xl hover:shadow-yellow-300" />
    </div>
  )
}


let About = () => {
  return (
    <p style={{ color: "gray", font: "normal 14px 'consolas'", backgroundColor: "azure", padding:"12px" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus excepturi natus. Quam veniam molestias dolorum ab dolorem. Est exercitationem non maxime alias nobis tempore dolorum quidem delectus quae ullam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloribus error autem illum aut repellat! Expedita illum quia nobis officia repudiandae eum incidunt, odio vel ipsam dicta, repellat fugiat voluptatibus.
    </p>
  )
}

let Card = () => {
  return (
    <div className="w-[250px] rounded-xl shadow-md hover:shadow-xl p-1 m-3">
        <img src="https://placehold.co/300x300/blue/white?text=image1" />
        <p className='text-xl text-red-900 m-2'>Coffee</p>
        <p>Coffee is too awesome. must buy...</p>
        <a href="#">Buy now</a>
    </div>
  )
}

let Cards = () => {
  return (
    <div className='flex flex-wrap justify-around'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}



export default App;

import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Images } from './components/Images'


function App() {
  const [images, setImages] = useState([])


  const fetchAPI = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_IMAGE_API_KEY}`)
    console.log(response.data);
    const data = await response.data;
    setImages(data);
  }

  return (
    <div className='header'>
      <h1>cyberconvoy.dev</h1>
      <button onClick={fetchAPI}> Click Me </button>
      <div className='photos'>
        {images.length>0&&(
          <Images images={images} />
        )}
      </div>
    </div>
  )
}

export default App

import React, { Component, Suspense, lazy } from 'react';
import './App.css';
// import ImageLoader from './ImageLoader';
//const ImageLoader = lazy(() => import('./ImageLoader'));

const Loader = () => <div className='loader'></div>

const ImageLoader = lazy( () => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(import('./ImageLoader'))
    }, 2000);
  })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Suspense fallback={<Loader />}>
          <ImageLoader id={10}/>
          <ImageLoader id={10}/>
          <ImageLoader id={10}/>
        </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
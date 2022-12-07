import React from 'react';
import './App.css';
import Button from './components/Button';


function App() {
  return (
  
 <section className="bg-gray-50">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <div className="mt-8 flex flex-wrap justify-center gap-8">
       <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="default"
      size="sm"
      primary={true}
      > Primary </Button>

      <hr />
      
      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="default"
      size="sm"
      primary={false}
      > Secondary </Button>

      <hr />
 
    </div>
      </div>
    </div>



  

</section>




  );  
}

export default App;

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
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
    <a
  className="inline-flex items-center bg-secondary rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  <span className="text-sm font-medium"> Download </span>

  <svg
    className="ml-3 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

<a
  className="inline-flex items-center rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 bg-primary"
  href="/download"
>
  <span className="text-sm font-medium"> Download </span>

  <svg
    className="ml-3 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

<hr />
      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="default"
      size="sm"
      > Default </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="primary"
      size="sm"
      > Primary </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="info"
      size="sm"
      > Info </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="warning"
      size="sm"
      > Warning </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="bg-optional"
      size="sm"
      > Success </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="bg-secondary"
      size="sm"
      > Danger </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="bg-primary"
      size="sm"
      > Dark </Button>

      <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="default"
      size="sm"
      disabled={true}
      > Disabled </Button>

      <hr />

    </div>
      </div>
    </div>



  

</section>




  );  
}

export default App;

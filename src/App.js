import './App.css';

  let name = 'HamZa';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='container'>
        <h1> Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, culpa? Voluptates error assumenda vel quia! Tenetur sit animi aperiam, ullam voluptatibus dolore, corporis magni, ratione et dolorem dignissimos aut eaque?
        </p>
      </div>
    </>
  );
}

export default App;

import './App.css';
// import Display from './Display.js';
// import { Heading } from './Display.js';
// import { Button } from './Button';

// const App = () => {
//   return (
//     <div>
//       <div>hellowww world</div>
//       <div>hi</div>
//       <hr />
//       <Display />
//       <Button />
//       {/* <Paragraph /> */}
//       <Heading />
//     </div>
//   );   
  
  
// };

// export default App;

const App = () => {

  const [user, setUser] = useState("");

  const [userArg , setUserArg] = useState(["Gaurav", "Pream"])

  // Controlled method
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUser(value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUserArg([user, ...userArg])
  }

  return (
    <div>
      <form action="" className='user-form'>
        <p>{user}</p>
        <input onChange={handleOnChange} type="text" />
        <button onClick={handleOnSubmit}>Add User</button>
      </form>

      <div>
        <ul>
          {
            userArg.map((item, i)=><li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App;

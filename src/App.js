import Axios from 'axios'
//import { response } from 'express'
import { useState } from 'react'

function App() {

  const [employeeList, setemployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      setemployeeList(response.data);
    });
  }







  const [light, setlight] = useState([]);
  const [count, setcount] = useState([]);

  // const adddata = () => {       Axios.post('http://localhost:3001/create',      {     name: name,     id:  id,     role: role   }) .then(response => this.setState({ articleId: response.data.id }));     )

  function createPost() { Axios.post("http://194.59.165.141:3002/create", { light: light, count: count}).then((response) => { setemployeeList(response.data) }); }


  return (
    <div className="App container">
      <h1>employee</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">

            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setlight(event.target.value)
            }}></input>
          </div>
          <div className="mb-3">

            <label htmlFor="age" className="form-label">address</label>


            <input type="text" placeholder="input Name" className="form-control" onChange={(event) => {
              setcount(event.target.value)
            }}></input>
          </div>

          <button className="btn btn-success" onClick={createPost}>ADD employee</button>
        </form>
      </div>
      <hr></hr>
      <div className="employees">
        <button className="btn btn-primary" onClick={getEmployees}>SHOW employee</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee card">

              <div className="card-body text-left">
                <p className="card-text">
                  name:{val.title}
                </p>
                <p className="card-text">
                 
                </p>
                <p className="card-text">
                 
                </p>
                <p className="card-text">
                 
                </p>
              </div>


              <a href={val.title}> เพิ่มเติม</a>


              <button className="btn btn-primary"> {val.title}</button>
              <input type="file" />
            </div>
          )

        })}


      </div>

    </div>
  );
}

export default App;

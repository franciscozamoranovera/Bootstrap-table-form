import React from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar'
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-md">
        <div class="row">
          <div className="d-md-flex">
            <div class="col-5">
              <Form />
            </div>
            <div class="col-7">
              <Table />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;

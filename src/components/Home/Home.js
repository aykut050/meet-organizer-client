import React from 'react'; 
import Table from '../Table/Table'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='mt-3'>
        <Table />
        <div id='buttons' className='mt-3'>
            <Link to="/add-meet" className='btn btn-success'>Toplantı Ekle</Link>
        </div>
    </div>
  );
}

export default Home;

import './App.css'; 
import Home from './components/Home/Home'
import AddMeet from './components/AddMeet/AddMeet'
import EditMeet from './components/EditMeet/EditMeet'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-meet" element={<AddMeet />}/>
        <Route exact path="/edit-meet/:meetId" element={<EditMeet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

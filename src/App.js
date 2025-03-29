import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Recipees from './pages/Recipees';
import RecipeeDetails from './pages/RecipeeDetails';
import AddRecipeeForm from './pages/AddRecipee'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Recipees searchTerm={searchTerm} />} />
        <Route path="/recipees/:id" element={<RecipeeDetails />} />    
        <Route path="/add-recipe" element={<AddRecipeeForm />} />   
      </Routes>
          </>
  );
}

export default App;
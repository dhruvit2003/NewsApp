import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryNews from './components/CategoryNews';
import SearchNews from './components/SearchNews';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

// const categories = ['sports', 'entertainment', 'technology', 'business', 'health'];
const categories = [
  { category: null, title: 'Top' },
  { category: 'sports', title: 'Sports' },
  { category: 'entertainment', title: 'Entertainment' },
  { category: 'technology', title: 'Technology' },
  { category: 'business', title: 'Business' },
  { category: 'health', title: 'Health' }
]
function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/searchNews" element={<SearchNews />} />/
        {
          categories.map((category, index) => {
            if (category.category === null) {
              return <Route exact path='/' element={<CategoryNews category={category.category} title={category.title} />} key={index} />
            }
            return <Route path={`/${category.category}`} element={<CategoryNews category={category.category} title={category.title} />} key={index} />
          })
        }

      </Routes>
      <Footer />
    </>
  )
}

export default App
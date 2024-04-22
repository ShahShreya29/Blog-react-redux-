import SignupForm from "./Components/SignupForm";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from "./Components/LoginForm";
import BlogList from "./Components/BlogList";
import Blogs from "./Components/Blogs";
import AddBlog from "./Components/AddBlog";
import EditBlog from "./Components/EditBlog";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='Blog-react-redux-/' element={  <SignupForm/>}></Route>
         <Route path='/LoginForm' element={<LoginForm/>}></Route>
         <Route path='/BlogList' element={<BlogList/>}></Route>
         <Route path='/Blogs' element={<Blogs/>}></Route>
         <Route path='/AddBlog' element={<AddBlog/>}></Route>
         <Route path='/Edit/:id' element={<EditBlog/>}></Route>
         <Route path='/*' element={<Error/>}></Route>

      </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;

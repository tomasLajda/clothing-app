import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;

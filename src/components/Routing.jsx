import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Links from './Links';
import Contact from './Contact';
import Page404 from './404/Page404';

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/links'} element={<Links/>}/>
            <Route path={'/contact'} element={<Contact/>}/>


            <Route path={'*'} element={<Page404/>}/>
        </Routes>
    )
}
export default Routing;

import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products/Products';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                {/* <NavBar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}

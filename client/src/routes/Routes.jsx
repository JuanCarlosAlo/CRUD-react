import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/details/:id' element={<Details />} />
			</Route>
		</Routes>
	);
};

export default Router;

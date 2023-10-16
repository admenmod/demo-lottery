import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/store/index.ts';
import '@/firebase';
import '@/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootPage } from '@/pages/RootPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';


const router = createBrowserRouter([
	{ path: '/', element: <RootPage /> },
	{ path: '/home', element: <HomePage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);

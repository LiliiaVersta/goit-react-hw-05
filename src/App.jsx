import AppRoutes from './AppRoutes';

import Navigation from './components/Navigation/Navigation';

export const App = () => {


	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<AppRoutes />
			</main>
		</>
	);
}







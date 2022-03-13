// used as a persisting layout for web page components and page props
// **********************************************************************
import { Header } from '../components';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />

			{/* dynamic components imported in a page */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
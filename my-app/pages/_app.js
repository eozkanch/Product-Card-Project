import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Kendi stil dosyanızı burada dahil edin

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

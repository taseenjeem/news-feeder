import Footer from "./components/global-components/footer/Footer";
import NavigationBar from "./components/global-components/navigation-bar/NavigationBar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;

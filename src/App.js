// import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import BoxBasic from './components/hero';
import ActionAreaCard from './components/feature';
import BasicGrid from './components/about';
// import ResponsiveGrid from './components/media';
import ServicesSection from './components/services';
import GallerySection from './components/media';
import ClientReviews from './components/client';
import BranchesPage from './components/branches';
import ContactUsPage from './components/contactUs';


function App() {
  return (
    <>
    <div className="App">
      
      <ResponsiveAppBar ></ResponsiveAppBar>
      <BoxBasic></BoxBasic>
      <ActionAreaCard></ActionAreaCard>
      <BasicGrid></BasicGrid>
      <ServicesSection></ServicesSection>
      <GallerySection></GallerySection>
      <ClientReviews></ClientReviews>
      <BranchesPage></BranchesPage>
      <ContactUsPage></ContactUsPage>

    </div>
    </>
  );
}

export default App;

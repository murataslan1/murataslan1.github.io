import HeroSection from './sections/HeroSection';
import InfoCardSection from './sections/InfoCardSection';
import WhatIDoSection from './sections/WhatIDoSection';
import ProjectsSection from './sections/ProjectsSection';
import TechStackSection from './sections/TechStackSection';
import AchievementsSection from './sections/AchievementsSection';
import FooterSection from './sections/FooterSection';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <InfoCardSection />
      <WhatIDoSection />
      <ProjectsSection />
      <TechStackSection />
      <AchievementsSection />
      <FooterSection />
    </main>
  );
}

export default App;

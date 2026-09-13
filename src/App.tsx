import { LanguageProvider } from './context/LanguageContext';
import { Header } from './component/layout/Header';
import { Footer } from './component/layout/Footer';
import { Home } from './component/section/Home';
import { Profile } from './component/section/Profile';
import { Services } from './component/section/Services';
import { Projects } from './component/section/Projects';
import { Contact } from './component/section/Contact';
import { ScrollToTop } from './component/common/ScrollToTop';

export const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-200">
        <Header />
        <main className="flex-1">
          <Home />
          <Profile />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;

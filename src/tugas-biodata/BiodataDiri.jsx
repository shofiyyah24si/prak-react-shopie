import './custom.css';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import TechStack from './components/TechStack.jsx';
import Education from './components/Education.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import GreetingForm from './components/GreetingForm.jsx';

export default function BiodataDiri() {
  return (
    <div className="biodata-wrapper">
      <Header />

      <div className="biodata-body">
        <aside className="biodata-sidebar">
          <ProfileCard />
          <ContactInfo />
        </aside>

        <main className="biodata-content">
          <TechStack />
          <Education />
          <SocialLinks />
          <GreetingForm />
        </main>
      </div>
    </div>
  );
}

import React from 'react';
import { useAppStore } from './store/useAppStore';
import Header from './components/Header';
import ScreenSplash from './components/ScreenSplash';
import ScreenMission from './components/ScreenMission';
import ScreenLandingCTA from './components/ScreenLandingCTA';
import ScreenPhoneInput from './components/ScreenPhoneInput';
import ScreenVerification from './components/ScreenVerification';
import ScreenPasswordRegister from './components/ScreenPasswordRegister';
import ScreenDashboard from './components/ScreenDashboard';
import ScreenPatientList from './components/ScreenPatientList';
import ScreenPatientDetails from './components/ScreenPatientDetails';

export default function App() {
  const currentScreen = useAppStore((state) => state.currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <ScreenSplash />;
      case 'mission':
        return <ScreenMission />;
      case 'landing-cta':
        return <ScreenLandingCTA />;
      case 'phone':
        return <ScreenPhoneInput />;
      case 'verify':
        return <ScreenVerification />;
      case 'register':
        return <ScreenPasswordRegister />;
      case 'dashboard':
        return <ScreenDashboard />;
      case 'patient-list':
        return <ScreenPatientList />;
      case 'patient-details':
        return <ScreenPatientDetails />;
      default:
        return <ScreenSplash />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-serif">
      {/* Top Application Header */}
      <Header />

      {/* Main Responsive Canvas (100% on Mobile, Formatted Container on Desktop) */}
      <main className="flex-1 flex justify-center items-start md:py-8 md:px-4">
        <div className="w-full max-w-md min-h-[calc(100vh-52px)] md:min-h-[750px] md:max-h-[850px] md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col transition-all">
          {renderScreen()}
        </div>
      </main>
    </div>
  );
}
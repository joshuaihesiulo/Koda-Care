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
import ScreenLoginWelcome from './components/ScreenLoginWelcome';
import ScreenPasswordLogin from './components/ScreenPasswordLogin';
import ScreenLoginSplash from './components/ScreenLoginSplash';

export default function App() {
  const currentScreen = useAppStore((state) => state.currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <ScreenSplash />;
      case 'mission':
        return <ScreenMission />;
      case 'login-welcome':
        return <ScreenLoginWelcome />;
      case 'login-password':
        return <ScreenPasswordLogin />;
      case 'login-splash':
        return <ScreenLoginSplash />;
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
    <div className="min-h-screen bg-slate-900 md:bg-slate-950 flex flex-col font-serif antialiased text-slate-100">
      {/* Top Application Header */}
      <Header />

      {/* Responsive Canvas Container */}
      <main className="flex-1 flex justify-center items-center py-0 md:py-8 md:px-4">
        <div className="w-full max-w-md h-screen md:h-[780px] md:max-h-[820px] md:rounded-[2.5rem] md:border-8 md:border-slate-800 md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col transition-all bg-slate-900 relative">
          {renderScreen()}
        </div>
      </main>
    </div>
  );
}
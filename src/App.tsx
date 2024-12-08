import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserEnvironment } from './pages/UserEnvironment';
import { Overview } from './pages/management/Overview';
import { Integrations } from './pages/management/Integrations';
import { Escalations } from './pages/management/Escalations';
import { PolicyManagement } from './pages/management/PolicyManagement';
import { MonitorCheck } from 'lucide-react';
import { RootLayout } from './components/layout/RootLayout';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <MonitorCheck className="w-8 h-8" />
                <span className="text-xl font-bold">Tier.5</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  Management
                </Link>
                <Link to="/user-env" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  User Environment
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Overview />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="escalations" element={<Escalations />} />
            <Route path="policies" element={<PolicyManagement />} />
          </Route>
          <Route path="/user-env" element={<UserEnvironment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
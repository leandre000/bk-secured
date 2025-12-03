import Dashboard from '../components/Dashboard';
import AuthWrapper from '../components/AuthWrapper';

export default function DashboardPage() {
  return (
    <AuthWrapper>
      <Dashboard />
    </AuthWrapper>
  );
}
import { createFileRoute } from '@tanstack/react-router';

import { DistanceProvider } from '../../../context/useDistanceProvider';
import KilometerInput from '../../../components/KilometerInput';
import StatsView from '../../../components/StatComponents/StatsView';

export const Route = createFileRoute('/(protected)/user/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <DistanceProvider>
      <KilometerInput />
      <StatsView />
    </DistanceProvider>
  );
}

import type { Metadata } from 'next';
import HomeView from './home-view';

export const metadata: Metadata = {
  title: 'Виктория Юнусова | Project Manager',
  description: 'Виктория Юнусова 2026 — специалист по управлению проектами',
};

export default function Page() {
  return <HomeView />;
}

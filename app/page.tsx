import type { Metadata } from 'next';
import HomeView from './home-view';

export const metadata: Metadata = {
  title: 'Виктория Юнусова | Project Manager | Business Analyst | Product Manager',
  description: 'Виктория Юнусова 2026 — специалист по управлению проектами, бизнес-анализу и продуктовому менеджменту.',
};

export default function Page() {
  return <HomeView />;
}

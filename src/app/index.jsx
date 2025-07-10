import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <section className='wrapper'>
      <h2>Jogger App Public Info Page</h2>
    </section>
  );
}

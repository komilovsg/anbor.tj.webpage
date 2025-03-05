import { Banner } from '@/widgets/banner';
import { AboutUS } from '@/entities/infrastructure';
import { DevelopmentAndImplementation } from '@/entities/development-and-implementation';
import { WorkWith } from '@/entities/work-with';
import { Form } from '@/features/form';

export default function Home() {
  return (
    <main>
      <Banner />
      <DevelopmentAndImplementation />
      <AboutUS />
      <WorkWith />
      <Form />
    </main>
  );
}

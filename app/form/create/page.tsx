import Form from '@/app/ui/form/create-form';
import Breadcrumbs from '../../ui/form/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Form', href: '/form'},
          {
            label: 'Create Form',
            href: '/form/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  )
}

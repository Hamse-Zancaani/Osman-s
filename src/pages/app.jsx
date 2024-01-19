import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';
import 'tailwindcss/tailwind.css'

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> hage HRM System</title>
      </Helmet>

      <AppView />
    </>
  );
}

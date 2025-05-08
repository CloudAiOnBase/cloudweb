import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'

const AuthLayout = lazy(() => import('@/components/layouts/AuthLayout'));
const RootLayout = lazy(() => import('@/components/layouts/RootLayout'));
const Main = lazy(() => import("./_root/Main"));

import '@/globals.css'
import { Docs, PrivacyPolicy } from './_root';
import NotFound from './components/shared/NotFound';


const App = () => {
  return (
    <main >
      <Suspense>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            {/* <Route path="/sign-in" element={<SigninForm />} /> */}
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Main />} />
            <Route path="/docs" element={<Docs />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            {/* <Route path="/docs/:slug" element={<Main />} /> */}
          </Route>

        </Routes>
      </Suspense>
    </main>
  )
}

export default App
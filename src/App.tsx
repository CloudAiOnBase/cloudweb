import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'

const AuthLayout = lazy(() => import('@/components/layouts/AuthLayout'));
const RootLayout = lazy(() => import('@/components/layouts/RootLayout'));
const Main = lazy(() => import("./_root/Main"));


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
            <Route index element={<Main />} />
          </Route>

        </Routes>
      </Suspense>
    </main>
  )
}

export default App
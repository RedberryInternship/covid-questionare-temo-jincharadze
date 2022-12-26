import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Form, Main } from '@/pages';
import { FormDataProvider } from '@/store';
import { Success } from '@/components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Main />} />
      <Route path='/questionnaire'>
        <Route index element={<Form />} />
      </Route>
      <Route path='/success'>
        <Route index element={<Success />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <FormDataProvider>
      <RouterProvider router={router} />
    </FormDataProvider>
  );
}

export default App;

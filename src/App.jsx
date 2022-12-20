import Main from '@/pages/Main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Form from '@/pages/Form';
import { FormDataProvider } from '@/store/context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Main />} />
      <Route path='/questionnaire'>
        <Route index element={<Form />} />
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

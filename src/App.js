import './App.css';
import{ lazy, Suspense } from 'react';

const Background = lazy(() => import('./components/Background'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading... </div>}>
        <Background/>
      </Suspense>
    </main>
  );
}

export default App;

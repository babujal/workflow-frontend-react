import { useEffect, useState } from 'react';
import './App.css';
import fetchJobs from './services/jobs';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log('Jobs found:', jobs)
  }, [jobs]);

  useEffect(() => {
    const loadData = async () => {
      const data = await (fetchJobs())
      setJobs(data)
    }
    loadData()
  }, []);

  return (
    <>
    <h1>Hello world!</h1>
    </>
  )
}

export default App

import { useEffect, useState } from 'react';
import fetchJobs from '../services/jobs';

const Jobs = () => {
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
        <main>
            <section>
                <h1>Jobs</h1>
            </section>
        </main>
    )
}

export default Jobs;
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/works/`

const fetchJobs = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data
    } catch (e) {
        console.log('Error:', e);
    }
};

export default fetchJobs;
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

const fetchJobs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/workflow/`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data
    } catch (err) {
        console.log('Error:', err);
    }
};

export default fetchJobs;
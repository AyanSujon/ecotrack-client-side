import axios from "axios";
import { useEffect, useState } from "react";


const useChallenges = () => {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true)
        axios('http://localhost:3000/api/challenges')
        .then(res => setChallenges(res.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))

    }, []);
    return {challenges, loading, error};

};

export default useChallenges;
















// // src/Hooks/useChallenges.js
// import { useEffect, useState } from "react";
// import axios from "axios";

// const useChallenges = (filters = {}) => {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchChallenges = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         let query = "";
//         if (Object.keys(filters).length > 0) {
//           query = "?" + new URLSearchParams(filters).toString();
//         }

//         const { data } = await axios.get(`http://localhost:3000/api/challenges${query}`);
//         setChallenges(data);
//       } catch (err) {
//         console.error("Error fetching challenges:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChallenges();
//   }, [filters]);

//   return { challenges, loading, error };
// };

// export default useChallenges;






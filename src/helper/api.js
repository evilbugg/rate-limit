import axios from 'axios';

const getComments = async () => {
    const postId = Math.floor(Math.random() * 100) + 1
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.data.splice(0,3);
}

export default getComments ;

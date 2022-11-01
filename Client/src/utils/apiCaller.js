import axios from 'axios';

function callAPI(enPoint,method,body) {
    return axios({
        method: method,
        url: `http://localhost:5000/${enPoint}`,
        data: body
      })
      .catch (err =>{
        console.log(err)
      })
}

export default callAPI;
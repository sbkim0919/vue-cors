import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

// const URL = 'https://renewal-api.eveinft.com:8095/users/logout';
// let config = {headers: 
//                   {    
//                     'Content-Type': 'application/json',
//                     'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJSVSJdLCJpYXQiOjE2NjEzNTQyNDYsImV4cCI6MTY2MTM1Nzg0Nn0.86TLELTDWvwZ2v5PFM1f92q1ON7MKCdr8bYOg9BJrXI'}};

//                     // let dataConfig = {email: "test1@gmail.com"};
//                     let saveData = {};
//                     saveData.email = "test1@gmail.com";

// axios.post(URL,JSON.stringify(saveData),config).then((response) => { // 실제 API를 요청한다/
//     console.log(response);
// })

const URL = 'https://renewal-api.eveinft.com:8095/users/getMyData';
let config = {headers: 
                  {    
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJSVSJdLCJpYXQiOjE2NjEzNTQzMDYsImV4cCI6MTY2MTM1NzkwNn0.xDl2Xm9qWIFnju35pwz1bAbPi_ZLrvntvEZBjfBaP5U'}};

                    // let dataConfig = {email: "test1@gmail.com"};
                    let saveData = {};
                    saveData.email = "test1@gmail.com";

axios.post(URL,JSON.stringify(saveData),config).then((response) => { // 실제 API를 요청한다/
    console.log(response);
})

// const URL = 'https://renewal-api.eveinft.com:8095/users/emailLogin';

// let config = {headers: 
//                       {    
//                         'Content-Type': 'application/json'}};

//                     let saveData = {};
//                     saveData.email = "test1@gmail.com";
//                     saveData.passwd = "1234";
                    
//                     // let data = {"email": "test1@gmail.com"};
//                     // let dataConfig = JSON.stringify(data);

// axios.post(URL,JSON.stringify(saveData), config).then((response) => { // 실제 API를 요청한다/
//     console.log(response);
// })

// let HOST = "https://renewal-api.eveinft.com:8095/users/emailLogin";
// let saveData = {};
// saveData.email = "test1@gmail.com";
// saveData.passwd = "1234";

// axios
//   .post(HOST, JSON.stringify(saveData))
//   .then((res) => {
//     console.log(res.staus);
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("항상 마지막에 실행");
//   });

// let query = '아이언맨';
// const URL = '/api2/v1/search/movie.json?query='+query+'&display=20'; /*URL*/
// let config = {headers: 
//                   {    
//                     'Host': 'openapi.naver.com',
//                     'User-Agent': 'curl/7.49.1',
//                     'Accept': '*/*',
//                     'X-Naver-Client-Id': '7ra3GJA-------ivYe9F',
//                     'X-Naver-Client-Secret': '4yq-------3W'}};

// axios.get(URL,'',config).then((response) => { // 실제 API를 요청한다/
//     console.log(response);
// })

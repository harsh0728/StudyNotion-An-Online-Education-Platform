import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {

    console.log("api connenctor: ",method,url);

    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}


// // new code 

// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = async (method, url, bodyData, headers, params) => {
//   console.log("api connector:", method, url);

//   try {
//     const response = await axiosInstance({
//       method,
//       url,
//       data: bodyData || null,
//       headers: headers || null,
//       params: params || null,
//     });

//     console.log("API RESPONSE:", response.data);

//     return response;
//   } catch (error) {
//     console.error("API ERROR:", error);
//     throw error;
//   }
// };

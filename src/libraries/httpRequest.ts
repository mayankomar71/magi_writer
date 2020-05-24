/*
 * sunit shakya
 * */

import axios from "axios";

// calling api

export function httpRequest(Url, method,data, headersData = {}, skipDefaultHeaders = false) {
    data=!data?"":data
    console.log(skipDefaultHeaders)
    // Set config defaults when creating the instance
    const instance = axios.create({
        // baseURL: process.env.BASE_URL,
        headers: headersData
    });

    var request;
    if (method === "GET") {
        request = instance.get(Url , {
                params: data
        });
    } else if (method === "POST") {
        request = instance.post(Url, data);
    } else if (method === "PUT") {
        request = instance.put(Url, data);
    } else if (method === "PATCH") {
        request = instance.patch(Url, data);
    } else if (method === "DELETE") {
        request = instance.delete(Url, { data: data });
    }

    return request.then(function(response) {
        return response;
    });
}

/*
axios.interceptors.request.use(
    function(config) {
        const token = getTokenFromLocalDB("token");

        if (token != null) {
            config.headers.Authorization = `${token}`;
        }

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);
*/


import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getAllBlogs () {
    const url = BASE_URL + `/posts`

    const response = await axios( url, {
        method: 'get',
        url: url
    })

    return response
}
export async function addBlogs (payload) {
    const url = BASE_URL + `/posts`

    const response = await axios( url, {
        method: 'post',
        data : payload,
        url: url
    })

    return response
}
export async function updateBlogs (payload) {
    const url = BASE_URL + `/posts?id=${payload.id}`

    const response = await axios( url, {
        method: 'put',
        url: url,
        data: payload
    })

    return response.status
}
export async function deleteBlogs (id) {
    const url = BASE_URL + `/posts?id=${id}`

    const response = await axios( url, {
        method: 'delete',
        url: url,
    })

    return response.status
}
export async function getBlogDetail (id) {
    const url = BASE_URL + `/posts?id=${id}`

    const response = await axios( url, {
        method: 'get',
        url: url
    })

    return response.data[0]
}
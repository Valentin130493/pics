import {BASE_URL} from "../static";

export const fetchData = async (url: string) => {
    const res = await fetch(`${BASE_URL}${url}`)
    return res.json()
}
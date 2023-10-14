export default async function fetchData(url,method = 'GET',body,headers){
    let data = await fetch(url,{
        method,
        headers,
        body
    }) ;

    if(!data.ok){
        throw new Error('Page not found 404');

    }
    return await data.json()
}
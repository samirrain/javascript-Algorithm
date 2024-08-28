async function getdata(id){

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
       const data = await response.json();
       return data;


}
getdata(20).then((data)=>console.log(data));
// const url="https://fakestoreapi.com/products/2";
const url="https://fakestoreapi.com/products?limit=4"

var txt='';
const fetchData = async ()=>{
    const response =await fetch(url);
    const data = await response.json();
    try{
        const response =await fetch(url);
        const data = await response.json();
        for(let item of data){
             txt +=`
            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="..." alt="...">
                <div class="card-body">
                    <h1>Title :${item.title}</h1>
                    <h4>Price :${item.price}</h4>
                    <h4>Rate  :${item.rating['rate']}</h4>
                </div>
            </div>
            `;
        }
        document.getElementsByClassName('container')[0].innerHTML=txt;
    }
    catch(err){
        console.log(err);
    }
    
}
fetchData();
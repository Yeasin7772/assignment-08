console.log('hello world');

const handelCategory = async()=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const tapData = data.data
   // console.log(tapData);
    const tapContainer = document.getElementById('tap-container')
    tapData.forEach(item => {
       // console.log(item);
        const createDiv =document.createElement('div')
        createDiv.innerHTML=`
        <a onclick = " displayLoad('${item.category_id}')" class="tab text-2xl text-black"">${item.category}</a> 
        `

        tapContainer.appendChild(createDiv)
    });
}

const displayLoad = async (itemId) =>{
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${itemId}`);
    const data = await response.json();
    const cardItems = data.data
    console.log(cardItems);
    const cardContainer = document.getElementById('card-container');

    cardItems.forEach = (item) =>{
        console.log(item);

    }


}
handelCategory()
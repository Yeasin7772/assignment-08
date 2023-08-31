console.log('hello world');

const handelCategory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const tapData = data.data
    // console.log(tapData);
    const tapContainer = document.getElementById('tap-container')
    tapData.forEach(item => {
        // console.log(item);
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `
        <a onclick = " displayLoad('${item.category_id}')" class="tab  md:text-xl sm:text-xl lg:text-2xl text-black"">${item.category}</a> 
        `

        tapContainer.appendChild(createDiv)
    });
}

const displayLoad = async (itemId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${itemId}`);
    const data = await response.json();
    const cardItems = data.data
    console.log(cardItems);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML=''

    cardItems.forEach(news => {
        console.log(news);
        const div = document.createElement('div');

        div.innerHTML = `
   


    <div class="card lg:w-auto bg-base-100 shadow-xl">
  <figure><img class="h-52" src="${news?.thumbnail? news.thumbnail : ' <img src="./images/Icon.png" alt="">'} " alt="Shoes" /></figure>

  <div class="flex gap-4 mt-4">
  <div>
      <div class="avatar online">
          <div class="w-14 rounded-full">
              <img
                  src="${news?.authors[0]?.profile_picture}" />
          </div>
      </div>
  </div>
  <div>
  <h2 class="card-title text-xl">${news?.title}</h2>
      
  </div>
</div>
  <div class="card-body">
    <h2 class="card-title text-xl">${news?.authors[0]?.profile_name}</h2>
    <p>${news?.others?.views}  views</p>
    
  </div>
</div>

    
    `


        cardContainer.appendChild(div)
    })


}

handelCategory()
displayLoad('1000')
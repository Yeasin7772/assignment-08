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
        <a onclick = " displayLoad('${item.category_id}')" class="tab  btn  md:text-xl sm:text-xl lg:text-2xl text-black"">${item.category}</a> 
        `
        tapContainer.appendChild(createDiv)
    });
}

const displayLoad = async (itemId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${itemId}`);
    const data = await response.json();

    const cardItems = data.data
    // const array = cardItems.length
   // console.log(cardItems);
    //const array = cardItems.length

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''

    const drawing = document.getElementById('drawing-container')
        drawing.innerHTML=''

    if (cardItems.length !=0) {
        cardItems.forEach(news => {
            //console.log(news);
            const div = document.createElement('div');
            div.innerHTML = `
    
            <div class="card lg:w-auto bg-base-100 shadow-xl">
            <figure class="relative"><img class="h-52" src="${news?.thumbnail ? news.thumbnail : ' <img src="./images/Icon.png" alt="">'}
            " alt="" /> </figure>
            <div class="absolute right-5 bottom-52">

            <h1 class="text-white bg-[#171717] p-2 rounded-lg ">${news?.others?.posted_date ? timeConvert(news.others.posted_date) : ''}</h1>

            </div>
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
              <h2 class="card-title text-xl">${news?.authors[0]?.profile_name}  
              <img src="${news.authors[0].verified ? `svg.svg` : ''}" alt="">
              </h2>
              <p>${news?.others?.views}  views</p>
              
            </div>
           </div>
              `
            cardContainer.appendChild(div)
        })
    
    } else {
        const div = document.createElement('div')
        div.innerHTML = `
        <img class="" src="./images/Icon.png" alt="">
        <h1 class="text-2xl font-semibold">Oops!! Sorry, There is no content here</h1>
        `
        drawing.appendChild(div)
    }

}


const timeConvert = (totalSeconds) =>{
    const hours = Math.floor(totalSeconds / 3600);
    const min = Math.floor((totalSeconds % 3600) /60)
    const seconds = totalSeconds % 60;
   return `${hours}hrs, ${min} min ago `;

}


const sortBtn = async () =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await response.json();
   //const allView =data?.data[0]?.others?.views
   const allView =data?.data
    console.log(allView);

    allView.forEach(item => {
        console.log(item);
    })

}


const btnBlog=()=>{
console.log('blog');
window.location.href = 'blog.html'
}



handelCategory()
displayLoad('1000')



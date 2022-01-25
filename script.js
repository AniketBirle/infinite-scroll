//URL to fetch data from
//const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://type.fit/api/quotes";
//varible to navigate through received data from api
var dataIndex = 1;

//Empy object to store retrived data
var data = {};

//constant to append dyanmically created elements
const container = document.querySelector(".container");

//function to fetch data from api
async function fetchData(url) {
    

    //document.body.style.zoom = "80%"
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
     data = await response.json();

    data.forEach(element => {
        console.log("author : "+data.author+" text : "+data.text);
    });
    //Passing data to loadData() function to load data on web-page
    loadData(data);
}

window.onload=console.log("Ready");;


//incoking fetchData() function by passing api url as argument
fetchData(url);
var count = 0;
//function to create dynamic elemnts, to display data
function loadData(data){

    //varible to track the count of articles to display
    let index = 0;

    console.log(data);
    

    while(index < 55  )
    {
        console.log("Data Index = "+dataIndex);
        //console.log(data);
        const articleBody = document.createElement("div");
        
        //const articleId = document.createElement("div");
        //articleId.innerHTML = data[dataIndex].id;

        const articleTitle = document.createElement("h3");
        articleTitle.innerHTML = /*dataIndex+ ". Author : " +*/ data[dataIndex].author;
        
        const articleText = document.createElement("p");
        articleText.innerHTML = /*"Quote : " +*/  data[dataIndex].text;
        
        const breakLine = document.createElement("hr");
        // const breakLine = document.createElement("hr");


        container.appendChild(articleBody).appendChild(articleTitle).appendChild(articleText).appendChild(breakLine);
        
        index++;
        dataIndex++;
    }
    console.log(index);
    
}

const showData = () =>{
    setTimeout(()=>{
        loadData(data);
    },1)
}


//scroll-eventlisner to perform infinite scroll on web-page
window.addEventListener('scroll',()=>{
    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
        showData();
        count++;
        console.log("count = "+count)
    }
})




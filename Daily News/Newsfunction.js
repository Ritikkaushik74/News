
// Fetching News from Newsapi
// to use this file log on to newsapi and replace your api key with your own.

let apikey = '9e96a235a6bc4d64aaa814750b1053eb';
var api = "http://newsapi.org/v2/top-headlines?pageSize=100&country=in&apiKey=";
// News Container
let newsContainer = document.getElementById("newsContainer");

// Create Ajax get Request
const xhr = new XMLHttpRequest();
xhr.open('GET', this.api + apikey, true);
// after reciving request
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        var articles = json.articles;
        console.log(json);
        let newshtml = '';
        articles.forEach(function (element) {
            console.log(element);
            source = element["source"];
            //card for displaying data
            let news = `
                <div class="card mb-3 " style="max-width: auto;">
                    <div class="row no-gutters ">
                    <div class="col-md-4 mx-auto my-auto ">
                        <img src="${element["urlToImage"]}" class="card-img " alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-header bg-transparent "><a href="${element["url"]} "target="_blank"> ${element["title"]}</a></div>
                        <div class="card-body">
                        
                        <p class="card-text">${element["content"]}</p>
                        <a class="text-right mx-3 my-1" href="${element["url"]}" target="_blank" style="float:right"><small class="card-link" >more...</small></a>
                        </div>
                    </div>
                    </div>
                </div>
                `
            newshtml += news;
        });
        newsContainer.innerHTML = newshtml;
        console.log(api);
    }
    else {
        console.log("Some Error Occured");
    }
}
xhr.send();

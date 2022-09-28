let tit= document.getElementById("title");
display()
function display(){
let video=JSON.parse(localStorage.getItem("video"))

let box=document.getElementById("other")
let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${video.videoId}`;

iframe.allow="fullscreen"

let p1=document.createElement("h4")
p1.innerText=video.title;
tit.innerText=video.title;
box.append(iframe,p1);

// setTimeout(function(){
   
// },1000)

}
  
// <-------playing video data appended------->
  let  videos=JSON.parse(localStorage.getItem("videos"))||[]




let append = (data) =>{
        videos=JSON.parse(localStorage.getItem("videos"))||[]
localStorage.setItem("videos",JSON.stringify(data))
// console.log(videos);
let box=document.getElementById("box")
box.innerHTML=""
data.forEach( ({ id:{ videoId },snippet:{ title,thumbnails},...a }) => {
    

    let data={
        videoId,
        title,
        a
    }
    let div1=document.createElement("div")
    div1.setAttribute("class","imbox")
  
 
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`;
    let image=document.createElement("img");
    image.setAttribute("id","image")
    image.style.cursor="pointer"
    iframe.allow="fullscreen"
    image.src=thumbnails.high.url;

    let p1=document.createElement("h4")
    p1.innerText=title;
    div1.append(image,p1);
    
    box.append(div1);
    div1.addEventListener("click",function(){
        playvideo(data)

    });

  
});

}
append(videos)
let playvideo=(data)=>{

localStorage.setItem("video",JSON.stringify(data));
// console.log(window.location)
window.scroll(0,0);
window.location.reload();


}
// -------------------------------------

const api2=`AIzaSyCVgQvJASOExBRUlBku-VhMgYUGWAN31ls`
const api=`AIzaSyBpAOQfg35I1VSGJ9oH6yeXU-O-92j4GMQ`;
let searchs=document.getElementById("Search");
searchs.addEventListener("keydown", function (e) {
    let query=document.getElementById("Search").value;
    if (e.key === "Enter") {  
        search(query);
    }
  });

let search = async (query)=>{
    
    // console.log("hai")
    try{
    

let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`

let res= await fetch(url);

let data= await res.json();

appends(data.items)
} catch (err){
    try{
    

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`
    
    let res= await fetch(url);
    
    let data= await res.json();
    
    appends(data.items)
    } catch (err){
        console.log(err);
    } 
} 
}
// let videos=JSON.parse(localStorage.getItem("videos"))||[]
// search("tranding telugu");
    let appends = (data) =>{
    videos=JSON.parse(localStorage.getItem("videos"))||[]
localStorage.setItem("videos",JSON.stringify(data))
let box=document.getElementById("box")
box.innerHTML=""
data.forEach( ({ id:{ videoId },snippet:{ title,thumbnails},...a }) => {
    

    let data={
        videoId,
        title,
        a
    }
    let div1=document.createElement("div")
    div1.setAttribute("class","imbox")
  
 
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`;
    let image=document.createElement("img");
    image.style.cursor="pointer"
    iframe.allow="fullscreen"
    image.src=thumbnails.high.url;

    let p1=document.createElement("h4")
    p1.innerText=title;
    div1.append(image,p1);

    box.append(div1);
    div1.addEventListener("click",function(){
        playvideos(data)

    });

  
});

}

let playvideos=(data)=>{

localStorage.setItem("video",JSON.stringify(data));
window.location.href="video.html"


}
let Sea=document.getElementById("sarch");
Sea.addEventListener("click",()=>{
    let query=document.getElementById("Search").value;
    search(query);
})

let sea=document.getElementById("secondnav").childNodes;  
  
  for(let i=0;i<sea.length;i++){
      sea[i].addEventListener("click",function(){
          Check(sea[i]);
      })
      // console.log(sea[i])
  }
  function Check(xl){
    defalut(xl.id);
  }
  let defalut = async (query)=>{
    try{
   
let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`

let res= await fetch(url);

let data= await res.json();
console.log("iam data->"+data.items)
append(data.items)
    }
    catch(err){
        console.log(err);
    }

}
function Home(){
    window.location.href="index.html";
}
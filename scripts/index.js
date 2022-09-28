

let query="Trendingsongs";
// search("Trending");
    const api2=`AIzaSyBpAOQfg35I1VSGJ9oH6yeXU-O-92j4GMQ`
const api=`AIzaSyCVgQvJASOExBRUlBku-VhMgYUGWAN31ls`
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
defalut(query);



let searchs=document.getElementById("Search");
searchs.addEventListener("keydown", function (e) {
 let query=document.getElementById("Search").value;
 if (e.key === "Enter") {  
     search(query);
 }
});
let search = async ()=>{
try{
 
let query=document.getElementById("Search").value;
let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`

let res= await fetch(url);

let data= await res.json();
console.log("iam data->"+data.items)
append(data.items)
} catch (err){

try{
 
let query=document.getElementById("Search").value;
let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api2}`

let res= await fetch(url);

let data= await res.json();
console.log(data.items)
append(data.items)
} catch (err){
 
 console.log(err+"Iam also fail");
} 
} 
}
// let videos=JSON.parse(localStorage.getItem("videos"))||[]

 let append = (data) =>{
     
     // videos=JSON.parse(localStorage.getItem("videos"))||[]
// localStorage.setItem("videos",JSON.stringify(data))
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
 let play=document.createElement("p");
 play.innerText="Play Now";
 div1.append(image,p1,play);

 box.append(div1);
 div1.addEventListener("click",function(){
     playvideo(data)

 });


});

}

let playvideo=(data)=>{

localStorage.setItem("video",JSON.stringify(data));
window.location.href="video.html"


}

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

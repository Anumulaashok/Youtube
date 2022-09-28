let videos=JSON.parse(localStorage.getItem("videos"))||[]
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

append(data.items)
} catch (err){ 
    try{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api2}`
    
    let res= await fetch(url);
    
    let data= await res.json();
    
    append(data.items)
    } catch (err){
        console.log(err);
    } 
} 
}

search("tranding");
    let append = (data) =>{
        
//        let videos=JSON.parse(localStorage.getItem("videos"))||[];
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

    let p1=document.createElement("h2")
    p1.innerText=title;
    div1.append(image,p1);

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
let Sea=document.getElementById("Sea");
Sea.addEventListener("click",()=>{
    let query=document.getElementById("Search").value;
    search(query);
})
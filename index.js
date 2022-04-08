let container = document.getElementById("container");
let limit = 500
let page = 1
let getPhotos = async () =>{
    try {
let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}$_page=${page}`)
let data = await res.json()
AppendData(data)
    }catch(e){
      console.log(e)
      
    }

}

function AppendData (data){
data.forEach(({id,title,url})=>{
    
    let div1  = document.createElement('div')
    div1.setAttribute('class', 'div1')
    let id_p = document.createElement('h2')
    id_p.innerText =id
    

    let title1 = document.createElement('p')
    title1.innerText = title
    let image = document.createElement('img')
    image.src =url

    // console.log(image)
   div1.append(id_p,title1,image)
   container.append(div1)
  
})
}
getPhotos()

const showData =() => {
setTimeout(() => {
getPhotos()
    page++;
}, 300)
}

window.addEventListener('scroll', () => {
     const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
     if(scrollTop + clientHeight > scrollHeight){
        console.log('I am at bottom');
        showData();
     }
} )


const side = document.querySelectorAll('.side_element')
const main = document.querySelectorAll('.main')

side.forEach(ed => ed.addEventListener('click',(e)=>{
    console.log('img : ', e.target.closest('.product_images').querySelector('.main'));
    const target= e.target.parentElement.parentElement.parentElement
    const t=e.target.src
    e.target.src=target.childNodes[3].childNodes[1].src
    target.childNodes[3].childNodes[1].src=t
}))

// events = [
//     { 'title':"qurban bayrami", "date" : "12.07.2022" },
//     { 'title':"qurban bayrami", "date" : "14.07.2022" },
//     { 'title':"qurban bayrami", "date" : "16.07.2022" },
// ]
// const side = document.querySelectorAll('.side_element')
// const main = document.querySelectorAll('.main')

// side.forEach(ed => ed.addEventListener('click',(e)=>{
//     const target= e.target.parentElement.parentElement.parentElement
//     const t=e.target.src
//     e.target.src=target.childNodes[3].childNodes[1].src
//     target.childNodes[3].childNodes[1].src=t
// }))

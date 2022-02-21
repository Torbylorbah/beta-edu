let list;
const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyDrBwdpzBEKRbxjuPrjGNvRNfkam4ooy5Y'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let list = data["items"];
        console.log(list);

        let holder = document.getElementById('holder')
        for (let index = 0; index < 8; index++) {
            const element = list[index];
            let holder = document.getElementById('holder')

            //create elements
            let cards = document.createElement('div')
            let imgCard = document.createElement('div')
            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            let bookSubtitleHolder = document.createElement('div')
            let bookSubtitleTitle = document.createElement('div')
            let bookSubtitle = document.createElement('div')
            let bookAuthorHolder = document.createElement('div')
            let bookAuthorTitle = document.createElement('div')
            let bookAuthor = document.createElement('div')
            let bookPublishDateHolder = document.createElement('div')
            let bookPublishDateTitle = document.createElement('div')
            let bookPublishDate = document.createElement('div')
           
            //setting id and classes
            cards.setAttribute('class', 'col-4 card')
            imgCard.setAttribute('class', 'img-card')
            bookSubtitleHolder.setAttribute('class', 'car-details')
            bookSubtitleHolder.setAttribute('id', 'book-subtitle-holder')
            bookSubtitleTitle.setAttribute('id', 'book-subtitle-title')
            bookSubtitle.setAttribute('class', 'bl')
            bookSubtitle.setAttribute('id', 'book-subtitle')
            bookAuthorHolder.setAttribute('class', 'car-details')
            bookAuthorHolder.setAttribute('id', 'book-author-title')
            bookAuthorTitle.setAttribute('id', 'book-author-title')
            bookAuthor.setAttribute('class', 'bl')
            bookAuthor.setAttribute('id', 'book-author')
            bookPublishDateHolder.setAttribute('class', 'car-details')
            bookPublishDateHolder.setAttribute('id', 'book-publish-date-title')
            bookPublishDateTitle.setAttribute('id', 'book-publish-date-title')
            bookPublishDate.setAttribute('class', 'bl')
            bookPublishDate.setAttribute('id', 'book-publish-date')

            img.setAttribute('id', 'img')
            img.setAttribute('src', element.volumeInfo.imageLinks.smallThumbnail)
            h3.innerHTML = element.volumeInfo.title;
            bookSubtitleTitle.innerHTML = "Subtitle";
            bookSubtitle.innerHTML = element.volumeInfo.subtitle;
            bookAuthorTitle.innerHTML = "Authors";
            bookAuthor.innerHTML = element.volumeInfo.authors;
            bookPublishDateTitle.innerHTML = "Published Date";
            bookPublishDate.innerHTML = element.volumeInfo.publishedDate;
            console.log(element.volumeInfo.subtitle)
            
            bookSubtitleHolder.append(bookSubtitleTitle)
            bookSubtitleHolder.append(bookSubtitle)
            bookAuthorHolder.append(bookAuthorTitle)
            bookAuthorHolder.append(bookAuthor)
            bookPublishDateHolder.append(bookPublishDateTitle)
            bookPublishDateHolder.append(bookPublishDate)

            imgCard.append(img);
            cards.append(imgCard)
            cards.append(h3)
            cards.append(bookSubtitleHolder)
            cards.append(bookAuthorHolder);
            cards.append(bookPublishDateHolder);
            holder.append(cards);
        }
        
    });
let typeWriter = document.getElementById('typeWriter');
let txt = 'o you want to join our writers??'; /* The text */
let typeIndex = 0;
let speed = 350; /* The speed/duration of the effect in milliseconds */

function typeWriterFunction() {
  if (typeIndex < txt.length) {
    typeWriter.innerHTML += txt.charAt(typeIndex);
    typeIndex++;
  } else {
      typeIndex = 0;
      typeWriter.innerHTML = 'D'
  }
}

setInterval(typeWriterFunction, speed);

let x = document.getElementById("beta")
let text = " Library"
let i = 0

function myFunction(){
  if (i < text.length) {
    x.innerHTML += text.charAt(i);
    i++
  } else {
    i = 0;
    x.innerHTML = 'Beta'
  }
}

setInterval(myFunction, speed);

function formButton(){
  document.getElementById('divform').innerHTML =
  `<h4> REGISTRATION COMPLETED!!!</h4> <br>
  <h4>THANKS FOR CHOOSING BETA-LIBRARY</h4>`
  document.getElementById('divform').style.color='white'
  document.getElementById('divform').style.fontSize='3rem'
  document.getElementById('divform').style.textAlign = 'center'  
}
function dropDown(item){
  item.firstElementChild.style.backgroundColor = '#8d8a8aa3'
  item.lastElementChild.style.display = 'block'
}

function dropDownHide(item){
  item.firstElementChild.style.backgroundColor = 'unset'
  item.lastElementChild.style.display = 'none'
}

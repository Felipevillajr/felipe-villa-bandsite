






const api_key = '?api_key=2e2b5066-9b85-43e3-b2d6-e932f9a41a5d'

const urlShowDates = `https://project-1-api.herokuapp.com/showdates${api_key}`;


const form = document.getElementById('commentForm');

const comment = document.querySelector('#comment__submmited')

axios.get(urlShowDates)
    .then((res) => {
    const shows = res.data

    let showsDivHTML= document.querySelector("#just__shows");


    let myNewHTML = shows.map(
        child => {
            return (
        `<div id="shows__section">
            <lable id= "shows__date">DATE</lable>
            <div id= "date">${child.date}</div>
            <lable id= "shows__venue">VENUE</lable>
            <div id= "venue">${child.place}</div>
            <lable id= "shows__location">LOCATION</lable>
            <p id= "location">${child.location}</p>
            <div>
            <input type="button" value="BUY TICKETS">
            </div>
        </div>`
        )
        }
        )
        .join('')
        showsDivHTML.innerHTML += myNewHTML ;
        
});

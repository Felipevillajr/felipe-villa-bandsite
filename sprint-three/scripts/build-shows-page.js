






const api_key = '?api_key=2e2b5066-9b85-43e3-b2d6-e932f9a41a5d'

const urlComments = `https://project-1-api.herokuapp.com/showdates${api_key}`;


const form = document.getElementById('commentForm');

const comment = document.querySelector('#comment__submmited')

axios.get(urlComments)
    .then((res) => {
    const comments = res.data

    let commentDivHTML= document.querySelector("#comment__submmited");


    let myNewHTML = comments.map(
        child => {
            return (
        `<div id="comment__section">
            <div id="userimg" ></div>
            <div id= "timestamp">${new Date(child.timestamp).toLocaleString().split(',')[0]}</div>
            <div id= "username">${child.name}</div>
            <p id= "user__comment">${child.comment}</p>
        </div>`
            )
        }
        )
        .join('')
        commentDivHTML.innerHTML += myNewHTML ;
        
});

























// const showsArray = [
//     {  
//         "DATE":'Mon Dec 17 2018',
//         "VENUE":'Ronald Lane',
//         "LOCATION": "San Fancisco, CA"
//     },
//     {  
//         "DATE":'Tue Jul 18 2019',
//         "VENUE":'Pier 3 East',
//         "LOCATION": "San Fancisco, CA"
//     },
//     { 
//         "DATE":'Fri Jul 22 2019',
//         "VENUE":'View Loungue',
//         "LOCATION": "San Fancisco, CA"
//     },
//     { 
//         "DATE":'Sat Aug 12 2019',
//         "VENUE":'Hyatt Agency',
//         "LOCATION": "San Fancisco, CA"
//     },
//     { 
//         "DATE":'Fri Sep 05 2019',
//         "VENUE":'Moscow Center',
//         "LOCATION": "San Fancisco, CA"
//     },
//     { 
//         "DATE":'Wed Aug 11 2019',
//         "VENUE":'Press Club',
//         "LOCATION": "San Fancisco, CA"
//     },
// ];


// function displayShows(showsArray) {
//     let showsDivHTML= "";

//     showsArray.forEach((oneShow) => {
        
//         let showsBeDiv = `
//             <div id="shows__section">
//                 <lable id= "shows__date">DATE</lable>
//                 <div id= "date">${oneShow.DATE}</div>
//                 <lable id= "shows__venue">VENUE</lable>
//                 <div id= "venue">${oneShow.VENUE}</div>
//                 <lable id= "shows__location">LOCATION</lable>
//                 <p id= "location">${oneShow.LOCATION}</p>
//                 <div>
//                 <input type="button" value="BUY TICKETS">
//                 </div>
//             </div>`;
//         showsDivHTML = showsDivHTML + showsBeDiv;
//     });
//     const divEl = document.getElementById('shows__list');
//     divEl.innerHTML = showsDivHTML;
// };

// displayShows(showsArray)





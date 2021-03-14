

const api_key = '?api_key=2e2b5066-9b85-43e3-b2d6-e932f9a41a5d'

const urlComments = `https://project-1-api.herokuapp.com/comments${api_key}`;




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





form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios
        .post(urlComments, {
            name: e.target.name.value,
            comment: e.target.textarea.value,
        })
        .then((res) => {
            const oldDiv = document.querySelector('#comment__submmited');
            const myNewHTML = document.createElement('div');
            myNewHTML.setAttribute("id", "comment__section");
            myNewHTML.innerHTML = `
            <div id="userimg" ></div>
            <div id= "timestamp">${new Date(res.data.timestamp).toLocaleDateString('en-US')}</div>
            <div id= "username">${res.data.name}</div>
            <p id= "user__comment">${res.data.comment}</p>
            `;
            oldDiv.prepend(myNewHTML);
        })
})
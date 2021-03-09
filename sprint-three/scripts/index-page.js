



// comment form selector 
const commentForm = document.querySelector(".comment--form");



const commentArray = [
    {  
        "name":'Micheal Lyons',
        "comment":'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed',
        "timestamp": "12/18/2018"
    },
    {  
        "name":'Gary Wong',
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
        "timestamp": "12/12/2018"
    },
    { 
        "name":'Theodore Duncan',
        "comment":"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!" ,
        "timestamp": "11/15/2018"
    },
];

function displayCommentsDivs(commentArray) {
    let commentDivHTML= "";

    commentArray.forEach((oneComment) => {
        
        let  commentBeDiv = `
            <div id="comment__section">
                <div id="userimg""></div>
                <div id= "timestamp">${oneComment.timestamp}</div>
                <div id= "username">${oneComment.name}</div>
                <p id= "user__comment">${oneComment.comment}</p>
                
            </div>`;
        commentDivHTML = commentDivHTML + commentBeDiv;
    });
    const divEl = document.getElementById('comment__submission');
    divEl.innerHTML = commentDivHTML;
};

displayCommentsDivs(commentArray)


// const addComment = (function(){
    
//     return(addObj);

// });



commentForm.addEventListener("submit", (e) => {
    //default setting remover
    e.preventDefault();
    
    // targeting  comment values
    // const name = e.target.name.value;
    // const comment = e.target.textarea.value;
    // const timestamp = new Date();
    
    const name = document.getElementById('name__form').value;
    const comment = document.getElementById('textarea').value;
    const timestamp =  new Date().toLocaleString().split(',')[0];



    // new array
    const commentArray = [];
    
    commentArray.push({name,comment,timestamp});
    
    let commentDivHTML= document.querySelector("#comment__submmited");
    
    let  commentBeDiv = `
            <div id="comment__section">
                <div id="userimg" ></div>
                <div id= "timestamp">${commentArray[0].timestamp}</div>
                <div id= "username">${commentArray[0].name}</div>
                <p id= "user__comment">${commentArray[0].comment}</p>
            </div>`;
        commentDivHTML.innerHTML += commentBeDiv;
        

    console.log(commentArray)
    return;
});








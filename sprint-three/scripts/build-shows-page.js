



const showsArray = [
    {  
        "DATE":'Mon Dec 17 2018',
        "VENUE":'Ronald Lane',
        "LOCATION": "San Fancisco, CA"
    },
    {  
        "DATE":'Tue Jul 18 2019',
        "VENUE":'Pier 3 East',
        "LOCATION": "San Fancisco, CA"
    },
    { 
        "DATE":'Fri Jul 22 2019',
        "VENUE":'View Loungue',
        "LOCATION": "San Fancisco, CA"
    },
    { 
        "DATE":'Sat Aug 12 2019',
        "VENUE":'Hyatt Agency',
        "LOCATION": "San Fancisco, CA"
    },
    { 
        "DATE":'Fri Sep 05 2019',
        "VENUE":'Moscow Center',
        "LOCATION": "San Fancisco, CA"
    },
    { 
        "DATE":'Wed Aug 11 2019',
        "VENUE":'Press Club',
        "LOCATION": "San Fancisco, CA"
    },
];


function displayShows(showsArray) {
    let showsDivHTML= "";

    showsArray.forEach((oneShow) => {
        
        let showsBeDiv = `
            <div id="shows__section">
                <lable id= "shows__date">DATE</lable>
                <div id= "date">${oneShow.DATE}</div>
                <lable id= "shows__venue">VENUE</lable>
                <div id= "venue">${oneShow.VENUE}</div>
                <lable id= "shows__location">LOCATION</lable>
                <p id= "location">${oneShow.LOCATION}</p>
                <div>
                <input type="button" value="BUY TICKETS">
                </div>
            </div>`;
        showsDivHTML = showsDivHTML + showsBeDiv;
    });
    const divEl = document.getElementById('shows__list');
    divEl.innerHTML = showsDivHTML;
};

displayShows(showsArray)
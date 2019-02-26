
// Fetch all meetups
fetch('http://127.0.0.1:5000/api/v2/meetups/upcoming').then(res => {
    if (res.ok) {
        return res.json();
    }
    throw new Error('Request failed!')
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    console.log(jsonResponse.meetups)

    meetupItem = (topicItem, descriptionItem) => {
        const mainDiv = document.querySelector('.meetup_one');

        // main div
        const meetupWrap = document.createElement('div');
        meetupWrap.className = 'meetup_wrap'
        meetupWrap.style.display = 'flex';

        //  time
        const timeStamp = document.createElement('div');
        timeStamp.className = 'timestamp'
        const time = document.createElement('p');

        //  meetup info
        const meetupInfo = document.createElement('div');
        meetupInfo.className = 'meetup-info'
        const topic = document.createElement('h5');
        topic.id = 'topic'
        const infoText = document.createElement('p');
        infoText.id = 'meetup-info-text'
        const description = document.createElement('a');

        time.textContent = 'ADD TIME'
        timeStamp.appendChild(time)

        topic.textContent = topicItem.toUpperCase()

        description.textContent = descriptionItem
        infoText.appendChild(description)

        meetupInfo.appendChild(topic)
        meetupInfo.appendChild(infoText)

        meetupWrap.appendChild(timeStamp)
        meetupWrap.appendChild(meetupInfo)

        mainDiv.appendChild(meetupWrap)
    }

    jsonResponse.meetups.forEach(meetup => {
        meetupItem(meetup['topic'], meetup['description'])
    });
});
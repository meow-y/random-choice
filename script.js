const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //starting second part

    if (e.key === 'Enter') {
        setTimeout(() => {

            e.target.value = ''

        }, 10)  //waiting 10 milisecond

        randomSelect()

    }

    //second part

})

function createTags(input) {
    //console.log(input)
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {

        const tagEl = document.createElement('span')  //creating span 
        tagEl.classList.add('tag')  //adding a class called 'tag' on span
        tagEl.innerText = tag

        /*setting innertext to whatever the tag is  because while looping through whatever we get we can put that in innertext */

        tagsEl.appendChild(tagEl) //getting the tags element and adding those tag elements inside the parent element of tags

    })

}

function randomSelect() {
    //console.log(123) //see in console if it fires off

    const times = 30 //number of time its gonna highlight before it stops
    //setting interval because the hioghlight of each one repeats 
    //interval of highlight and the remove of highlight each one 
    const interval = setInterval(() => {

        //what we want to happen in 100 milisecond is to pick random tag
        const randomTag = pickRandomTag()


        //starting third part
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)  //gonna wait 100 milisecond to unhighlight

        //third part
    }, 100);

    //third part again
    setTimeout(() => {
        clearInterval(interval)


        //picking random tag to highlight
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)

    }, times * 100) //whatever time before (which is 30) then multiply with 100 miliseconds


    //third part again ending

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') //getting all the element with the class of tag
    //querySelector All puts everything on the node list which is like an array
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
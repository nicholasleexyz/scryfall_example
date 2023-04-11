let button = document.getElementById('submit')
load()

button.addEventListener("click", evt => {
    load()
})

function load() {
    let quotesDiv = document.getElementById('quotes')

    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(quote => {
            quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
        })
    /////////////////
    let text = document.getElementById('text').value
    let cardDiv = document.getElementById('card-pics')
    cardDiv.innerHTML = ""

    text.split('\n').forEach(async card => {
        if (card.trim()) {
            link = `https://api.scryfall.com/cards/named?fuzzy=${card}`
            let json

            try {
                const response = await fetch(link)
                json = await response.json()
            }
            catch { }

            if (json.image_uris) {
                cardDiv.innerHTML += `<img src="${json.image_uris.normal}" alt="card" width="25%" height="25%"/>`
            }
        }
    })
}



// let quotesDiv = document.getElementById('quotes')

// fetch('https://api.kanye.rest')
// .then(res => res.json())
// .then(quote => {
//     quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
// })

// let catButton = document.getElementById('give-cat')

// // catButton.addEventListener("click", evt => {
// //     let catDiv = document.getElementById('cat-pic')
// //     fetch('https://api.thecatapi.com/v1/images/search?')
// //     .then(res => res.json())
// //     .then(cats => {
// //         cats.forEach(cat => {
// //             catDiv.innerHTML = `<h3>Here is this cat wishing you the bestest day 🌈♥</h3>
// //             <img src="${cat.url}" alt="kitty"/>`
// //         });
// //     })
// // })
// catButton.addEventListener("click", evt => {
//     let catDiv = document.getElementById('cat-pic')
//     fetch('https://api.scryfall.com/cards/named?fuzzy=hedron%20crab')
//     .then(res => res.json())
//     .then(img => {
//         catDiv.innerHTML = `<h3>Here's a magic card instead</h3>
//         <img src="${img.image_uris.normal}" alt="card"/>`
//     })
// })
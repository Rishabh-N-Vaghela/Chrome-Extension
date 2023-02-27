
//let fetchRes = fetch("https://type.fit/api/quotes");
// //  fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes.then(res =>
//     res.json()).then(d => {
//         for (i = 0; i <= 1800; i++) {
//             console.log(d[i])
//         }
//     })
// document.getElementById("data").innerHTML = d.text;

// fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//         return response.json();
//     }).
//     then(temp.foreach(function (data) {
//         console.log(data);


//     }));

// let fetchRes = fetch("https://type.fit/api/quotes");
// // fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes.then(res =>
//     res.json()).then(d.forEach((text, auther) => {
//         console.log('Quote: ' + text + ' Auther: ' + auther);
//     }))




function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




let fetchRes = fetch(
    "https://type.fit/api/quotes");


fetchRes.then(res =>
    res.json()).then(d => {





        const i = randomIntFromInterval(0, 1637)
        console.log(d[i].text);
        console.log(d[i].author);
        //console.log(rndInt)

        document.getElementById("data").innerHTML = d[i].text;
        document.getElementById("data2").innerHTML = d[i].author;


    }

    )

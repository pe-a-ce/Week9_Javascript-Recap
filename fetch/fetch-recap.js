const question = fetch("https://opentdb.com/api.php?amount=1&type=boolean")
// fetch returns a promise
    .then((response)=> response.json())  //needs a callback 
    .then(data => console.log(data))


    // this method does the same using async and await
    // const loadData = async () => {
    //     const fetchResult = await fetch("https://opentdb.com/api.php?amount=1&type=boolean");
    //     const json = await fetchResult.json();
    //     console.log(json);
    // }

    // loadData();
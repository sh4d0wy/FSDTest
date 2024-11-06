let from = document.querySelector("#from").value;
let to = document.querySelector("#to").value;
let fromAmount = document.querySelector("#fromAmount").value;


const main = async ()=>{
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`).then(async (data)=>
     data.json()
    ).then(response=>{
        let rate = response.rates[to];
        console.log(rate);
        document.querySelector("#toAmount").value = (rate * parseFloat(fromAmount)).toFixed(2);
    })
}

document.querySelector(".submit-button").addEventListener("click",()=>{
    main();
})
async function getPrice() {
    const answer = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await answer.json();
    const price = data.bitcoin.usd;
    document.getElementById('btcPrice').textContent = price.toFixed(0);
}

getPrice();
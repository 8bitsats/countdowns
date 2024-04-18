const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    fetch('https://api.blockchain.info/q/getblockcount')
        .then(response => response.json())
        .then(currentBlock => {
            const blocksUntilHalving = 210000 - (currentBlock % 210000);
            const estimatedTimeUntilHalving = blocksUntilHalving * 10; // Approx 10 minutes per block
            const halvingDate = new Date(new Date().getTime() + estimatedTimeUntilHalving * 60000);
            countdownElement.innerText = `Approx ${blocksUntilHalving} blocks until halving, around ${halvingDate}`;
        })
        .catch(err => {
            console.error('Error fetching block count:', err);
            countdownElement.innerText = 'Failed to load countdown.';
        });
}

// Update every 10 minutes
setInterval(updateCountdown, 600000);
updateCountdown();

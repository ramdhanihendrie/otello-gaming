// Script specific for index and games page
function indexAndGamesScript() {
  const gameDetail = document.getElementsByClassName('card-detail')

  for(let i = 0; i < gameDetail.length; i++){
    gameDetail[i].addEventListener('click', event => {
      const game = event.target.dataset.bsGame

      const gameTitle = document.querySelector('#games-title')
      gameTitle.textContent = `${game}`

      const detailImage = document.querySelector('#detail-image')
      detailImage.setAttribute('src', `./assets/games/${game}.png`)
    })
  }

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  const btnCopy = document.querySelector('#btn-copy-code')
  btnCopy.addEventListener('click', () => {
    const copyText = document.getElementById("redeem-code").innerText;
    
    navigator.clipboard.writeText(copyText);
  })
}

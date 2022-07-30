// Script specific for index and games page
const gameList = [
  {
    title: "Atlantica Rebirth",
    benefits: ["Atlas Ore (x50)", "Cake Box Premium License Pack (3 Days)", "Star Stone Pouch"]
  },
  {
    title: "PUBG Mobile",
    benefits: [""]
  },
  {
    title: "Audition Ayodance Mobile",
    benefits: ["50 Ruby (Real Value)", "1 Magic Card Ticket", "50 Avatar Ticket", "50 Face Ticket", "50 Acc Ticket"]
  },
  {
    title: "Audition Ayodance PC",
    benefits: [""]
  },
  {
    title: "Castle Clash",
    benefits: ["Kotak Emblem Langka (x3)", "Peti Enchant Halus (x3)", "Kotak Kristal Biru (x50)", "Vestige Hero Legendaris (x50)", "Kitab Berkat (x50)", "Title Talent Badge (x50)", "Tas Peliharaan V (x50)", "Peti Insignia II (x2)"]
  },
  {
    title: "Dawn of Dynasty",
    benefits: ["Level 4 Art of War (x10)", "Energy Potion I (x5)", "Regular Wish (x5)", "Premium Wish (x2)"]
  },
  {
    title: "Domino Qiuqiu Zumba",
    benefits: ["Bonus Coin 150M", "Special Badge (Custom)"]
  }, 
  {
    title: "Free Fire",
    benefits: [""]
  },
  {
    title: "Genshin Impact",
    benefits: ["50 Primogems"]
  },
  {
    title: "Legend of Kingdoms",
    benefits: ["50 Diamond", "500 Gold"]
  },
  {
    title: "Lets Get Rich",
    benefits: ["Gamers Cube : S+ Top 6 Super Pendant Selection Cube (3 Days), S+ Red Monster (3 Days), S+ Donation King Copy Draw (3 Days), S+ Impregnable Helmet (3 Days), S+ Landlord Bear (3 Days), S+ Spaceship Drawing Equipment (3 Days), S+ Spy Trap (3 Days), RP Defense Free (1 Day), 100.000 Gold"]
  },
  {
    title: "Lords Mobile",
    benefits: ["500 Gems", "Speed-Up 3 Hours (x3)", "Speed-Up Research 3 Hours (x3)", "Random Relocator (x5)", "Shield 8 Hours", "Anti Scout 8 Hours", "Snow Beast Chest (x10)", "Noceros Chest (x10)", "Rare Material Chest (x10)"]
  },
  {
    title: "Lost Saga Origin",
    benefits: ["Exclusive Supply Package"]
  },
  {
    title: "Perfect World",
    benefits: ["15 Lucky Box Key"]
  },
  {
    title: "Pokemon Unite",
    benefits: [""]
  },
  {
    title: "PUBG New State",
    benefits: [""]
  },
  {
    title: "Ragnarok Online Forever Love",
    benefits: ["100% EXP", "25% Drop", "Akses NPC Premium"]
  },
  {
    title: "Ragnarok X",
    benefits: ["Advanced Gacha Coin Selection Pack (x600)", "Rubber Ducky (30 Days)", "Gaming Zone Chat Frame (30 Days)", "Odin’s Resplendent Reliquary (x7)", "Gaming Zone Side Bar, Gaming Zone Zone Avatar Frame (30 Days)", "Gacha Coin Selection Pack (x50)"]
  },
  {
    title: "Ragnarok",
    benefits: [""]
  },
  {
    title: "RF Online Classic",
    benefits: ["Weapon Box Rare D Level 50"]
  },
  {
    title: "RF Online Remastered",
    benefits: ["Potion Buff Expansion Capsule", "Critical Potion (x50)", "Hissy Potion (x8)"]
  }
]



function tooltip() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  const btnCopy = document.querySelector('#btn-copy-code')
  btnCopy.addEventListener('click', () => {
    const copyText = document.getElementById("redeem-code").innerText;
    
    navigator.clipboard.writeText(copyText);
  })
}

function showGameCard() {
  const gamesCardContainer = document.getElementById("games-card-container");
  const gamesInHTML = gameList.map((game) => {
    return `
      <div class="col-md-4 p-2">
        <div class="card p-3">
          <img src="./assets/games/${game.title}.png" class="card-img-top" alt="games-image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-white">${game.title}</h5>
            <a href="#" class="card-detail fw-bold my-2 flex-grow" data-bs-toggle="modal" data-bs-target="#gamesDetailModal" data-bs-game="${game.title}">See Details</a>
            <a href="#" class="btn btn-red mt-auto" data-bs-toggle="modal" data-bs-target="#claimModal">Claim</a>
          </div>
        </div>
      </div>
    `
  }).join(' ')

  gamesCardContainer.innerHTML = gamesInHTML;
}

function showGameDetail() {
  const gameDetail = document.getElementsByClassName('card-detail')
  
  for(let i = 0; i < gameDetail.length; i++){
    gameDetail[i].addEventListener('click', event => {
      const gameName = event.target.dataset.bsGame
  
      const gameTitle = document.querySelector('#games-title')
      gameTitle.textContent = `${gameName}`
  
      const detailImage = document.querySelector('#detail-image')
      detailImage.setAttribute('src', `./assets/games/${gameName}.png`)
  
      
      const gameBenefit = document.getElementById('gameBenefit')
    })
  }
}

function indexPage() {
  showGameCard();
  showGameDetail();
  tooltip();
}

function gamesPage() {
  showGameCard();
  showGameDetail();
  tooltip();
}
// APHORISMS
const aphorisms = [
  {
    aphorism:
      "Coding is not just a job, it's an art form. Keep refining your craft and creating masterpieces.",
    author: 'Unknown',
  },
  {
    aphorism: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    aphorism:
      'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
  {
    aphorism: "Code is like humor. When you have to explain it, it's bad.",
    author: 'Cory House',
  },
  {
    aphorism:
      "Programming isn't about what you know, it's about what you can figure out.",
    author: 'Chris Pine',
  },
  {
    aphorism: 'Good code is its own best documentation.',
    author: 'Steve McConnell',
  },
  {
    aphorism: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    aphorism: 'Code is read much more than it is written. Plan accordingly.',
    author: 'Unknown',
  },
  {
    aphorism:
      'A good programmer is someone who always looks both ways before crossing a one-way street.',
    author: 'Doug Linder',
  },
  {
    aphorism:
      'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    author: 'Antoine de Saint-Exupéry',
  },
]

const randomAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)]

const aphorismOutput = document.querySelector('#aphorismOutput')
const authorOutput = document.querySelector('#authorOutput')

aphorismOutput.innerHTML = '"' + randomAphorism.aphorism + '"'
authorOutput.innerHTML = '- ' + randomAphorism.author

// STARS
function createStars() {
  const sky = document.querySelector('.sky')
  count = 0
  while (count <= 300) {
    count++
    const star = document.createElement('div')
    // star.innerHTML = "";
    sky.appendChild(star)

    star.classList.add('stars')
    star.style.left = Math.floor(Math.random() * 1440) + 'px'
    star.style.top = Math.floor(Math.random() * window.innerHeight) + 'px'
    // star.style.transform = "scale(Math.floor(Math.random() * 2))"
    star.style.transform =
      'scale(' + ((Math.random() * 20) / 10).toFixed(2) + ')'
  }
}

createStars()

// CLOUDS
function moveClouds1() {
  const cloud1 = document.querySelector('.cloud-1')
  let pos = 0
  const id = setInterval(frame, 60)

  function frame() {
    pos++
    cloud1.style.backgroundPosition = pos + 'px'

    // clearInterval(id);
  }
}

moveClouds1()

function moveClouds2() {
  const cloud2 = document.querySelector('.cloud-2')
  let pos = 0
  const id = setInterval(frame, 60)

  function frame() {
    pos--
    cloud2.style.backgroundPosition = pos + 'px'

    // clearInterval(id);
  }
}

moveClouds2()

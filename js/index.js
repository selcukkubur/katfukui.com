var gradientColors = [
  '#FF3D0C',
  '#FE9B1E',
  '#E1AD9D',
  '#94C7B6',
  '#1C1F33'
]
const gradMin = 0
const gradMax = gradientColors.length

// Gets random integer between gradientColors length
function getRandomIntInclusive() {
  const min = Math.ceil(gradMin)
  const max = Math.floor(gradMax)

  return Math.floor(Math.random() * (max - min)) + min
}

// Returns an object of the gradient values
function getGradient() {
  var random1 = getRandomIntInclusive()
  var random2 = getRandomIntInclusive()

  if (random1 == random2) {
    // If same array position, change random2 to +/- 1 of random1
    if (random1 == 0) {
      random2 = random1 + 1
    } else {
      random2 = random1 - 1
    }
  }

  return {
    grad1: gradientColors[random1],
    grad2: gradientColors[random2]
  }
}

function generateGradient() {
  const generatedGrad = getGradient()
  var title = document.getElementById('js-gradient')

  title.setAttribute('style', 'background-image: -webkit-linear-gradient(left, ' + generatedGrad.grad1 + ', ' + generatedGrad.grad2 + ')')
}

window.onload = function() {
  if(document.getElementById('js-index')) {
    generateGradient()
  }
}

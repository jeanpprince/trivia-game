// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

let baseUrl = "https://jservice.kenzie.academy"

let categoriesDiv = document.getElementById("Categories")
let button = document.getElementById("button")
let score = document.getElementById("score")
let form = document.getElementById("WhoIsWhatIs")
let clue = document.getElementById("question")
let gameOver = document.createElement("h1")
gameOver.classList.add("gameOver")
let playAgain = document.createElement("button")
playAgain.innerHTML ="play again?"




let index = randomIndex()
let userScore = 0
let question = ""
let categories = ""
let id 
let answer


console.log(index)

function randomIndex() {
  return  Math.floor(Math.random()*100)
}
function getClues() {
    index  = randomIndex() 
    return fetch(baseUrl + "/api/clues")
    .then(data => data.json())
    .then(data => {console.log(data)
        question = data.clues[index].question
        id = data.clues[index].category.title
        answer = data.clues[index].answer.toLowerCase()
       console.log(question)
       console.log(answer)
       clue.innerHTML = question
       categoriesDiv.innerHTML = id
      
    }
    )
    
    }

    function clearContent(elementID) {
       return document.getElementById(elementID).innerHTML = "";
    }
    


    function eventHandler(event) {
        event.preventDefault()
        
        
        console.log(answer)
        console.log(score)
        if(form.value === answer){
            index = randomIndex()
            userScore += 1
            getClues()
            console.log(index)
        }else{
            clearContent("Categories")
                            
            userScore = 0 
            gameOver.innerHTML = "GAME OVER"
            categoriesDiv.append(gameOver)
            categoriesDiv.append(playAgain)
            
        }
        score.innerText = userScore
        
    }
    
    getClues()
    playAgain.addEventListener("click",getClues)
    button.addEventListener("click",eventHandler)
    
    


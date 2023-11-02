let answer = document.querySelector(".answer")
let computer = document.querySelector(".computer")
let input = document.querySelector("input")

function generate(){
    let prompt = input.value
    if(prompt === "Hi" || prompt === "Hello" || prompt === "hi" || prompt === "hello" || prompt === "hey" ||prompt === "Hey" || prompt === "Hello there"|| prompt === "hello there"|| prompt === "Hi there" ||  prompt === "hi there"){
        answer.innerHTML= prompt
        computer.innerHTML = "Hello there! How can I help you today?"
    }else if(prompt === "sorry" || prompt === "Sorry"){
        answer.innerHTML= prompt
        computer.innerHTML = "As an AI model , I don't feel anything so you don't have to say sorry."
    }else if(prompt === "thank you" || prompt === "Thank you" || prompt === "Thanks" || prompt === "thanks"){
        answer.innerHTML= prompt
        computer.innerHTML = "My pleasure."
    }else if(prompt === "How are you?" || prompt === "how are you?" || prompt === "How are you" || prompt === "how are you"){
        answer.innerHTML = prompt
        computer.innerHTML = "I'm doing well, thank you for asking!"
    }else if(prompt === "What is your name?" || prompt === "what is your name?" || prompt === "What's your name?" || prompt === "what's your name?" || prompt === "what is your name"){
        answer.innerHTML = prompt
        computer.innerHTML = "My name is School AI. How can I assist you?"
    }else if(prompt === "What time is it?" || prompt === "what time is it?" || prompt === "What's the time?" || prompt === "what's the time?" || prompt === "what is the time"){
        answer.innerHTML = prompt
        let date = new Date()
        let time = date.toLocaleTimeString()
        computer.innerHTML = `The time is ${time}.`
    }else if(prompt === ""){
        computer.innerHTML = "You prompt field is empty"
    }else{
        answer.innerHTML = prompt
        computer.innerHTML = "Sorry , I am not trained to do this."
    }
    
    // Add the question and answer to the history list
    let historyList = document.querySelector(".history ul")
    let listItem = document.createElement("li")
    listItem.innerHTML = `<strong>You:</strong> ${prompt}<br><strong>AI:</strong> ${computer.innerHTML}`
    historyList.appendChild(listItem)
    
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generate()
    }
})


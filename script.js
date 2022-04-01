const input = document.querySelector("input")
const ball = document.querySelector(".ball-img img")
const answer = document.querySelector(".answer")
const error = document.querySelector(".error")

const response = [
	"Yes",
	"No",
	"Maybe",
	"As I see it, yes.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"It is certain.",
	"It is decidedly so.",
	"Most likely.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Outlook good.",
	"Reply hazy, try again.",
	"Signs point to yes.",
	"Very doubtful.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
]

const checkAndResponse = () => {
	chakeTheBall()
	setTimeout(() => {
		const randomElement = response[Math.floor(Math.random() * response.length)]
		if (input.value != "" && input.value.endsWith("?")) {
			answer.innerHTML = `<span>Answer:</span> ${randomElement}`
			error.innerText = ""
		} else if (input.value != "" && !input.value.endsWith("?")) {
			error.innerText = 'The question must end with a "?"!'
			answer.innerText = ""
		} else {
			error.innerText = "You have to ask a question!"
			answer.innerText = ""
		}
	}, 1000)
}

const chakeTheBall = () => {
	ball.classList = "shake-animaton"
	setTimeout(() => {
		ball.classList = ""
	}, 1000)
}

ball.addEventListener("click", checkAndResponse)

var questions = [ 
	{
		question: "Who created the Batman character?",
		answer: "Bob Kane"
	},
	{
		question: "What's Batman's trusty butler's name?",
		answer: "Alfred"
	},
	{
		question: "What city is Batman in?",
		answer: "Gotham"
	},
	{
		question: "Edward Nygma is the name for which villain?",
		answer: "The Riddler"
	},
	{
		question: "Who is the alter-ego of Selena Kyle?",
		answer: "Catwoman"
	},
	{
		question: "What is the name of Batman's car?",
		answer: "Batmobile"
	},
	{
		question: "Besides his trust butiler, Batman's primary sidekick is...?",
		answer: "Robin"
	},
	{
		question: "Who is the police commissioner and ally of Batman?",
		answer: "Gordon"
	},
	{
		question: "Batman's deceased mother's name is...?",
		answer: "Martha"
	},
	{
		question: "After a horrible accident, Harvey Dent was turned into the ruthles villain...",
		answer: "Two-Face"
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}
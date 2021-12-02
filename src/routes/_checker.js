import {solution, keepGoing} from './_solution.json'

export default function submitAnswer(submission){
	var returnResult = {
		isCorrect: false, 
		isFinished: false,
		message: ''
	}

	if(!submission || !submission.answer)
		return returnResult

	const cleanAnswer = encodeURI(submission.answer.split(' ').join('').toUpperCase())
	const sol = solution[submission.round][submission.id]
	const isCorrect = cleanAnswer === sol
	returnResult.isCorrect = isCorrect
	returnResult.message = isCorrect? 'ถูกต้อง!✔️': submissionResponse(cleanAnswer, sol)
	
	if (isCorrect)
		if((submission.round == 0 && submission.id == 5) || (submission.round == 1 && submission.id == 4))
			returnResult.isFinished = true
	return returnResult
}

function submissionResponse(ans, sol){
	const found = keepGoing.find((e) => e[0] === ans)
	if (found)
		return '⚠️' + found[1]
		
	// return false if lengths don't match
	if (ans.length != sol.length)
		return 'ยังไม่ถูก ❌'

	// then, check if it's off by one letter
	var count = 0
	for(var i in sol)
		count += ans[i] === sol[i]? 1:0

	if (count == sol.length - 1)
		return '⚠️ ผิดตัวอักษรเดียว ตรวจคำตอบอีกที'
	else
		return 'ยังไม่ถูก ❌'
}
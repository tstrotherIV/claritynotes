import lton from 'letter-to-number'


export default {

  convertID(e) {
    const questionId = e.target.name.split('').map(y => {
      if (y % 1 === 0) {
        return String.fromCharCode(y + 10) 
      }
      return y
    }).filter(x => {
      return x != "_"
      }
    )
    const convertedQuestionID = lton(questionId.join('').toUpperCase())
    return convertedQuestionID
  }
}


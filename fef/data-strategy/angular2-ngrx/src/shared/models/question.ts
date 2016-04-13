export class Question {
    itemCode: string;
    itemCategory: string;
    questionText: string;
    itemType: string;
    questionAnswers: Array<QuestionAnswer>
}

export class QuestionAnswer {
    answerCode: string;
    answerText: string;
    answerFrequencies: Array<string>
}
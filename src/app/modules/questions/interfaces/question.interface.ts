export interface IQuestion {
    id: number;
    text: string;
    type: QuestionType;
    options?: {option: string}[];
    answer?: string | number | number[];
    answerDate?: string;
}

export type QuestionType = 'open' | 'single' | 'multiple';
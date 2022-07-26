export interface IQuestion {
    text: string;
    type: 'single' | 'multiple' | 'open';
    answer: IAnswerOption;
}

export interface IAnswerOption {
    options?: string[];
    text?: string;
}
interface choice {
  [list: number]: choiceDetail;
}
interface choiceDetail {
  index: number;
  text: string;
  point: number;
}

export { choice, choiceDetail };

function getInitialAnswerValue(question) {
  switch (question.type) {
    case "range":
      return question.range.min;
    case "input":
      return "";
    default:
      return null;
  }
}

export function createInitialAnswers(pages) {
  return pages.map((page) => ({
    title: page.title,
    questions: page.questions.map((question) => ({
      label: question.label,
      answer: getInitialAnswerValue(question)
    }))
  }));
}

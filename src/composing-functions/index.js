import { compose, head, isEmpty, not, pipe } from "ramda";

const data = ["dog", "cat", ""];

const isFirstWordNotEmpty = (values) => values[0].length > 0;
// const isFirstWordNotEmpty = (values) => not(isEmpty(head(values)));
// const isFirstWordNotEmpty = compose(not, isEmpty, head);
// const isFirstWordNotEmpty = pipe(head, isEmpty, not);

console.log("isFirstWordNotEmpty  ---->", isFirstWordNotEmpty(data));

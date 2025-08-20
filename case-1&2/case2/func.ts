import { IComment } from "./comment-type";

export function countComments(comments: IComment[]): number {
  return comments.reduce((total, comment) => {
    let count = 1;

    if (comment.replies && comment.replies.length > 0) {
      count += countComments(comment.replies);
    }
    return total + count;
  }, 0);
}

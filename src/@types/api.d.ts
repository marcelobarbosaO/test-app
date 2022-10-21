interface Response {
  userId: number;
  id: number;
  title: string;
}

interface PostResponse extends Response {
  body: string;
}

interface TodoResponse extends Response {
  completed: boolean;
}

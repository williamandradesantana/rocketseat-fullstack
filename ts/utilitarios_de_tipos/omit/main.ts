interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book: Omit<Book, "description"> = {
  title: "Title",
  pages: 0,
  author: "Author",
};

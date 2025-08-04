interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

interface BookPreview {
  title: string;
}

const bookPreview: BookPreview = { title: "TypeScript" };
const book: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 30 };

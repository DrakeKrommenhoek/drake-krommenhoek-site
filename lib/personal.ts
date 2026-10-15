// The personal parts of the site: what Drake is doing now, what he reads, and what he does for fun.
// Anything in [BRACKETS: ...] is a placeholder. It shows while developing and is hidden on the live site,
// along with any line that was only a placeholder, until Drake fills it in.

export const now = {
  updated: 'October 2026',
  items: [
    'Junior fall at Washington and Lee, and rush chair for Sigma Chi.',
    'Recruiting for a Summer 2027 internship in product, analytics, or venture capital, in New York, Denver, or Atlanta.',
    'Leading the native App Store rebuild of The Answer Movement, aiming for January 2027.',
    'Reading: [NOW: the book you are reading right now]',
    '[NOW: one more thing on your mind this month, e.g. a class you like or a trip coming up]',
  ],
};

export interface Book {
  title: string;
  author: string;
  /** "Lately" or "Grew up on". */
  shelf: 'Lately' | 'Grew up on';
  /** Optional: one line, in Drake's words, on why he loves it. Rankings and ratings come later. */
  note?: string;
}

export const books: Book[] = [
  { title: 'The Four Agreements', author: 'Don Miguel Ruiz', shelf: 'Lately' },
  { title: 'Man’s Search for Meaning', author: 'Viktor E. Frankl', shelf: 'Lately' },
  { title: 'Greenlights', author: 'Matthew McConaughey', shelf: 'Lately' },
  { title: 'The Happiness Advantage', author: 'Shawn Achor', shelf: 'Lately' },
  { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', shelf: 'Lately' },
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', shelf: 'Lately' },
  { title: 'Septology', author: 'Jon Fosse', shelf: 'Lately' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', shelf: 'Grew up on' },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', shelf: 'Grew up on' },
  { title: 'Harry Potter series', author: 'J.K. Rowling', shelf: 'Grew up on' },
  { title: 'Percy Jackson and the Olympians', author: 'Rick Riordan', shelf: 'Grew up on' },
  { title: 'The Always War', author: 'Margaret Peterson Haddix', shelf: 'Grew up on' },
  { title: 'The Giving Tree', author: 'Shel Silverstein', shelf: 'Grew up on' },
];

export const offTheClock = [
  {
    name: 'Golf',
    detail:
      'I captained the varsity team at Holy Family High School, and we won regionals two years in a row. [GOLF: your handicap now, or a favorite course]',
  },
  {
    name: 'Scuba',
    detail: 'PADI Open Water certified. [SCUBA: your best dive, where and what you saw]',
  },
  {
    name: 'Euchre',
    detail: '[EUCHRE: who taught you, or how seriously your group takes it]',
  },
  {
    name: 'Pickleball, basketball, and travel',
    detail: '[TRAVEL: a favorite trip, or the next place you want to go]',
  },
];

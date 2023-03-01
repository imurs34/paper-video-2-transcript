import palleteColours from './pallete';

const {
  yellow,
  darkBlue,
  salmon,
  petrolBlue,
  pink,
  purple,
  lightGreen,
  platinum,
  champagnePink,
  linen,
  mintCream,
  columbiaBlue,
  teaRose,
} = palleteColours;

const pdfBlock = [
  {
    paragraph: [0, 1, 5, 9],
    colour: columbiaBlue,
    background: '',
  },
  {
    paragraph: [12, 13, 19],
    colour: platinum,
    background: '',
  },
  {
    paragraph: [21, 24, 26],
    colour: linen,
    background: '',
  },
  {
    paragraph: [27, 29, 33, 36, 40, 45],
    colour: champagnePink,
    background: '',
  },
  {
    paragraph: [48, 49, 50, 58, 61],
    colour: teaRose,
    background: '',
  },
  {
    paragraph: [66, 75, 76, 84],
    colour: columbiaBlue,
    background: '',
  },
  {
    paragraph: [85, 89, 94, 99, 101, 104],
    colour: linen,
    background: '',
  },
  {
    paragraph: [102],
    colour: champagnePink,
    background: '',
  },
];

export default pdfBlock;

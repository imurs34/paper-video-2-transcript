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
    colour: darkBlue,
    background: '',
  },
  {
    paragraph: [21, 24, 26],
    colour: salmon,
    background: '',
  },
  {
    paragraph: [27, 29, 33],
    colour: petrolBlue,
    background: '',
  },
  {
    paragraph: [36, 40, 45],
    colour: pink,
    background: '',
  },
  {
    paragraph: [48, 49, 50, 58, 61],
    colour: purple,
    background: '',
  },
  {
    paragraph: [66, 75, 76, 84],
    colour: lightGreen,
    background: '',
  },
  {
    paragraph: [85, 89, 94, 99, 101, 104],
    colour: columbiaBlue,
    background: '',
  },
  {
    paragraph: [102],
    colour: petrolBlue,
    background: '',
  },
];

export default pdfBlock;

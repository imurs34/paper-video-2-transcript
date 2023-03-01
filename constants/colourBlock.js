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
    paragraph: [1, 2],
    colour: yellow,
    background: '',
  },
  {
    paragraph: [3, 4, 68, 69, 70, 71],
    colour: darkBlue,
    background: '',
  },
  {
    paragraph: [14, 15, 16, 74],
    colour: salmon,
    background: '',
  },
  {
    paragraph: [30, 86, 87, 88, 89, 90],
    colour: petrolBlue,
    background: '',
  },
  {
    paragraph: [31, 32, 33, 42, 43, 44, 45],
    colour: pink,
    background: '',
  },
  {
    paragraph: [51, 52],
    colour: purple,
    background: '',
  },
  {
    paragraph: [61, 62, 63, 64],
    colour: lightGreen,
    background: '',
  },
];

export default pdfBlock;

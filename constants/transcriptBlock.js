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

const paragraph = [
  { initial: 0, final: 3, color: yellow },
  { initial: 2, final: 5, color: darkBlue },
  { initial: 4, final: 6, color: salmon },
  { initial: 5, final: 7, color: petrolBlue },
  { initial: 6, final: 10, color: pink },
  { initial: 10, final: 13, color: purple },
  { initial: 13, final: 16, color: lightGreen },
  { initial: 21, final: 24, color: darkBlue },
  { initial: 23, final: 25, color: salmon },
  { initial: 25, final: 28, color: petrolBlue },
];

const sections = [
  { initial: 0, final: 5, color: columbiaBlue },
  { initial: 4, final: 7, color: linen },
  { initial: 6, final: 10, color: champagnePink },
  { initial: 9, final: 19, color: teaRose },
  { initial: 18, final: 22, color: columbiaBlue },
  { initial: 21, final: 24, color: linen },
  { initial: 23, final: 28, color: champagnePink },
];

export { paragraph, sections };

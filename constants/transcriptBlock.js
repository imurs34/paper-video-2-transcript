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
  { initial: 1, final: 2, color: yellow },
  { initial: 3, final: 4, color: darkBlue },
  { initial: 5, final: 5, color: salmon },
  { initial: 6, final: 6, color: petrolBlue },
  { initial: 7, final: 9, color: pink },
  { initial: 14, final: 15, color: lightGreen },
  { initial: 22, final: 23, color: darkBlue },
  { initial: 24, final: 24, color: salmon },
  { initial: 26, final: 27, color: petrolBlue },
];

const sections = [
  { initial: 1, final: 3, color: columbiaBlue },
  { initial: 4, final: 6, color: linen },
  { initial: 7, final: 9, color: champagnePink },
  { initial: 10, final: 18, color: teaRose },
  { initial: 19, final: 21, color: columbiaBlue },
  { initial: 22, final: 23, color: linen },
  { initial: 24, final: 27, color: champagnePink },
];

export { paragraph, sections };

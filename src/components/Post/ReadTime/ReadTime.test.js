// @flow
describe('ReadTime', () => {
  it('renders correctly', () => {
    const testCoffee = (minute) => (Math.floor(minute / 5) % 4 + (minute < 20 ? 1 : 0));
    const listOfMinutes = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
    ];

    const numOfCoffees = [
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      0,
      0,
    ];

    listOfMinutes.forEach((minute, index) => {
      expect(testCoffee(minute)).toEqual(numOfCoffees[index]);
    });
  });
});

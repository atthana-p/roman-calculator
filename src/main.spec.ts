import { calculate } from './main';

describe('Calculator', () => {
  it('should be zero', () => {
    const result = calculate('');

    // then
    expect(result).toEqual(0);
  });
});

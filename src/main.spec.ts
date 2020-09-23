import { dec_to_roman } from './main';

describe('Calculator', () => {
  it('should be zero', () => {
    const result = dec_to_roman(1);

    // then
    expect(result).toEqual('I');
  });
});

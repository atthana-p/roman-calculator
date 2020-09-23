import { calculate } from '../main';

describe('Calculator', () => {
  it('should correctly calculate simple case', () => {
    const result: string = calculate('I', 'I');

    // then
    expect(result).toEqual('II');
  });
});

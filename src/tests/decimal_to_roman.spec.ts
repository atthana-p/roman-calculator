import { dec_to_roman } from '../main';

describe('Roman to Decimal', () => {
  it('should correctly convert digit I', () => {
    const result = dec_to_roman(1);

    // then
    expect(result).toEqual('I');
  });

  it('should correctly convert digit V', () => {
    const result = dec_to_roman(5);

    // then
    expect(result).toEqual('V');
  });

  it('should correctly convert digit X', () => {
    const result = dec_to_roman(10);

    // then
    expect(result).toEqual('X');
  });

  it('should correctly convert digit L', () => {
    const result = dec_to_roman(50);

    // then
    expect(result).toEqual('L');
  });

  it('should correctly convert digit C', () => {
    const result = dec_to_roman(100);

    // then
    expect(result).toEqual('C');
  });

  it('should correctly convert digit D', () => {
    const result = dec_to_roman(500);

    // then
    expect(result).toEqual('D');
  });

  it('should correctly convert digit M', () => {
    const result = dec_to_roman(1000);

    // then
    expect(result).toEqual('M');
  });

  it('should correctly convert two same digits', () => {
    const result = dec_to_roman(2);

    // then
    expect(result).toEqual('II');
  });

  it('should correctly convert two same digits for X', () => {
    const result = dec_to_roman(20);

    // then
    expect(result).toEqual('XX');
  });

  it('should correctly convert single increased from V', () => {
    const result = dec_to_roman(6);

    // then
    expect(result).toEqual('VI');
  });

  it('should correctly convert double increased from V', () => {
    const result = dec_to_roman(7);

    // then
    expect(result).toEqual('VII');
  });

  it('should correctly convert triple increased from V', () => {
    const result = dec_to_roman(8);

    // then
    expect(result).toEqual('VIII');
  });

  it('should correctly convert increased from X', () => {
    const result = dec_to_roman(11);

    // then
    expect(result).toEqual('XI');
  });
});

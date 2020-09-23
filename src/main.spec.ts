import { roman_to_dec } from './main';

describe('Roman to Decimal', () => {
  it('should correctly convert digit I', () => {
    const result = roman_to_dec('I');

    // then
    expect(result).toEqual(1);
  });

  it('should correctly convert digit V', () => {
    const result = roman_to_dec('V');

    // then
    expect(result).toEqual(5);
  });

  it('should correctly convert digit X', () => {
    const result = roman_to_dec('X');

    // then
    expect(result).toEqual(10);
  });

  it('should correctly convert digit L', () => {
    const result = roman_to_dec('L');

    // then
    expect(result).toEqual(50);
  });

  it('should correctly convert digit C', () => {
    const result = roman_to_dec('C');

    // then
    expect(result).toEqual(100);
  });

  it('should correctly convert digit D', () => {
    const result = roman_to_dec('D');

    // then
    expect(result).toEqual(500);
  });

  it('should correctly convert digit M', () => {
    const result = roman_to_dec('M');

    // then
    expect(result).toEqual(1000);
  });

  it('should correctly convert two same digits', () => {
    const result = roman_to_dec('II');

    // then
    expect(result).toEqual(2);
  });

  it('should correctly convert two same digits for X', () => {
    const result = roman_to_dec('XX');

    // then
    expect(result).toEqual(20);
  });

  it('should correctly convert single increased from V', () => {
    const result = roman_to_dec('VI');

    // then
    expect(result).toEqual(6);
  });

  it('should correctly convert double increased from V', () => {
    const result = roman_to_dec('VII');

    // then
    expect(result).toEqual(7);
  });

  it('should correctly convert triple increased from V', () => {
    const result = roman_to_dec('VIII');

    // then
    expect(result).toEqual(8);
  });

  it('should correctly convert increased from X', () => {
    const result = roman_to_dec('XI');

    // then
    expect(result).toEqual(11);
  });
});

import { roman_to_dec } from '../main';

describe('Roman to Decimal', () => {
  describe('Normal cases', () => {
    describe('Single digits', () => {
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
    });

    describe('Two digits', () => {
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
    });

    describe('Increasing', () => {
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

      it('should correctly convert increased from L', () => {
        const result = roman_to_dec('LII');

        // then
        expect(result).toEqual(52);
      });

      it('should correctly convert multiple increased from L', () => {
        const result = roman_to_dec('LVIII');

        // then
        expect(result).toEqual(58);
      });

      it('should correctly convert increased from C', () => {
        const result = roman_to_dec('CX');

        // then
        expect(result).toEqual(110);
      });

      it('should correctly convert multiple increased from C', () => {
        const result = roman_to_dec('CXXVI');

        // then
        expect(result).toEqual(126);
      });

      it('should correctly convert increased from D', () => {
        const result = roman_to_dec('DL');

        // then
        expect(result).toEqual(550);
      });

      it('should correctly convert multiple increased from D', () => {
        const result = roman_to_dec('DCCLXXVIII');

        // then
        expect(result).toEqual(778);
      });

      it('should correctly convert increased from M', () => {
        const result = roman_to_dec('MD');

        // then
        expect(result).toEqual(1500);
      });

      it('should correctly convert multiple increased from M', () => {
        const result = roman_to_dec('MCCCXXXVIII');

        // then
        expect(result).toEqual(1338);
      });
    });
  });

  describe('Error cases', () => {
    describe('V,L,D more than one', () => {
      it('should error when specified two V', () => {
        expect(() => {
          roman_to_dec('XVV');
        }).toThrow();
      });

      it('should error when specified three L', () => {
        expect(() => {
          roman_to_dec('CLLL');
        }).toThrow();
      });

      it('should error when specified four D', () => {
        expect(() => {
          roman_to_dec('MDDDD');
        }).toThrow();
      });
    });

    describe('I,X,C more than three', () => {
      it('should error when specified four I', () => {
        expect(() => {
          roman_to_dec('VIIII');
        }).toThrow();
      });

      it('should error when specified five X', () => {
        expect(() => {
          roman_to_dec('LXXXXX');
        }).toThrow();
      });

      it('should error when specified six C', () => {
        expect(() => {
          roman_to_dec('DCCCCCC');
        }).toThrow();
      });
    });
  });
});

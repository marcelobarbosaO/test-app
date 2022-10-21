import { isIOS } from './index';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: () => null,
}));

describe('Test Utils', () => {
  it('should be return ios Platform', () => {
    expect(isIOS).toBeTruthy();
    expect(!isIOS).toBeFalsy();
  });
});

import { isNotAsked, notAsked, success, failure, map, mapFailure } from '../src';

describe('RemoteData', () => {
  it('Should be the same', () => {
    expect(isNotAsked(notAsked)).toEqual(true);
  });

  it('Should map data on success', () => {
    const inc = map((data: number): number => data + 1);

    expect(inc(success(1))).toEqual(success(2));
  });

  it('Should map error on failure', () => {
    const nextErr = mapFailure((error: string): string => error + "!");

    expect(nextErr(failure("Something went wrong"))).toEqual(failure("Something went wrong!"));
  });
});

import { isNotAsked, notAsked, success, map } from '../src';

describe('RemoteData', () => {
  it('Should be the same', () => {
    expect(isNotAsked(notAsked)).toEqual(true)
  })

  it('Should map data on success', () => {
    const inc = map((data: number): number => data + 1);

    expect(inc(success(1))).toEqual(success(2))
  })
})
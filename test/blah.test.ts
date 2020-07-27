import {
  isNotAsked,
  notAsked,
  success,
  failure,
  map,
  mapFailure,
  fold,
  loading,
} from '../src';

describe('RemoteData', () => {
  it('Should be the same', () => {
    expect(isNotAsked(notAsked)).toEqual(true);
  });

  it('Should map data on success', () => {
    const inc = map((data: number): number => data + 1);

    expect(inc(success(1))).toEqual(success(2));
  });

  it('Should map error on failure', () => {
    const nextErr = mapFailure((error: string): string => error + '!');

    expect(nextErr(failure('Something went wrong'))).toEqual(
      failure('Something went wrong!')
    );
  });

  it('Should fold `notAsked`', () => {
    const remoteData = notAsked;

    expect(
      fold(
        () => 'notAsked',
        () => 'loading',
        _ => 'we have data',
        _ => 'we got an error'
      )(remoteData)
    ).toEqual('notAsked');
  });

  it('Should fold `loading`', () => {
    const remoteData = loading;

    expect(
      fold(
        () => 'notAsked',
        () => 'loading',
        _ => 'we have data',
        _ => 'we got an error'
      )(remoteData)
    ).toEqual('loading');
  });

  it('Should fold `success`', () => {
    const remoteData = success('We got some data!');

    expect(
      fold(
        () => 'notAsked',
        () => 'loading',
        (data: string) => data,
        _ => 'we got an error'
      )(remoteData)
    ).toEqual('We got some data!');
  });

  it('Should fold `failure`', () => {
    const remoteData = failure('An error occurred');

    expect(
      fold(
        () => 'notAsked',
        () => 'loading',
        _ => 'we have data',
        (error: string) => error
      )(remoteData)
    ).toEqual('An error occurred');
  });
});

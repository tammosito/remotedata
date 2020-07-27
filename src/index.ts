// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 */
export interface NotAsked {
  readonly _tag: 'NotAsked';
}

/**
 * @category model
 */
export interface Loading {
  readonly _tag: 'Loading';
}

/**
 * @category model
 */
export interface Success<A> {
  readonly _tag: 'Success';
  readonly data: A;
}

/**
 * @category model
 */
export interface Failure<E> {
  readonly _tag: 'Failure';
  readonly error: E;
}

/**
 * @category model
 */
export type RemoteData<E, A> = NotAsked | Loading | Success<A> | Failure<E>;

// -------------------------------------------------------------------------------------
// guards
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise
 * @category guards
 */
export const isNotAsked = <E, A>(ma: RemoteData<E, A>): ma is NotAsked =>
  ma._tag === 'NotAsked';

/**
 * Returns `true` if the remoteData is an instance of `Loading`, `false` otherwise
 * @category guards
 */
export const isLoading = <E, A>(ma: RemoteData<E, A>): ma is Loading =>
  ma._tag === 'Loading';

/**
 * Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise
 * @category guards
 */
export const isSuccess = <E, A>(ma: RemoteData<E, A>): ma is Success<A> =>
  ma._tag === 'Success';

/**
 * Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise
 * @category guards
 */
export const isFailure = <E, A>(ma: RemoteData<E, A>): ma is Failure<E> =>
  ma._tag === 'Failure';

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 */
export const notAsked: RemoteData<never, never> = { _tag: 'NotAsked' };

/**
 * @category constructors
 */
export const loading: RemoteData<never, never> = { _tag: 'Loading' };

/**
 * @category constructors
 */
export const success = <A>(a: A): RemoteData<never, A> => ({
  _tag: 'Success',
  data: a,
});

/**
 * @category constructors
 */
export const failure = <E>(e: E): RemoteData<E, never> => ({
  _tag: 'Failure',
  error: e,
});

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------

/**
 * A specialized `map` for `RemoteData`
 */
export const map = <A, B>(f: (a: A) => B) => (fa: RemoteData<never, A>) =>
  isSuccess(fa) ? success(f(fa.data)) : fa;

export const mapFailure = <E, A>(f: (a: E) => A) => (
  fe: RemoteData<E, never>
) => (isFailure(fe) ? failure(f(fe.error)) : fe);

// TODO: use HKT
export const fold = <E, A, R extends unknown>(
  onNotAsked: () => R,
  onLoading: () => R,
  onSuccess: (a: A) => R,
  onFailure: (e: E) => R
) => (a: RemoteData<E, A>) => {
  switch (a._tag) {
    case 'NotAsked':
      return onNotAsked();
    case 'Loading':
      return onLoading();
    case 'Success':
      return onSuccess(a.data);
    case 'Failure':
      return onFailure(a.error);
  }
};

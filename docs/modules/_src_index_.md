[remotedata](../README.md) › [Globals](../globals.md) › ["src/index"](_src_index_.md)

# Module: "src/index"

## Index

### model Interfaces

* [Failure](../interfaces/_src_index_.failure.md)
* [Loading](../interfaces/_src_index_.loading.md)
* [NotAsked](../interfaces/_src_index_.notasked.md)
* [Success](../interfaces/_src_index_.success.md)

### model Type aliases

* [RemoteData](_src_index_.md#remotedata)

### Other Functions

* [map](_src_index_.md#const-map)
* [mapFailure](_src_index_.md#const-mapfailure)

### constructors Functions

* [failure](_src_index_.md#const-failure)
* [success](_src_index_.md#const-success)

### guards Functions

* [isFailure](_src_index_.md#const-isfailure)
* [isLoading](_src_index_.md#const-isloading)
* [isNotAsked](_src_index_.md#const-isnotasked)
* [isSuccess](_src_index_.md#const-issuccess)

### constructors Object literals

* [loading](_src_index_.md#const-loading)
* [notAsked](_src_index_.md#const-notasked)

## model Type aliases

###  RemoteData

Ƭ **RemoteData**: *[NotAsked](../interfaces/_src_index_.notasked.md) | [Loading](../interfaces/_src_index_.loading.md) | [Success](../interfaces/_src_index_.success.md)‹A› | [Failure](../interfaces/_src_index_.failure.md)‹E›*

*Defined in [src/index.ts:38](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L38)*

## Other Functions

### `Const` map

▸ **map**‹**A**, **B**›(`f`: function): *(Anonymous function)*

*Defined in [src/index.ts:110](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L110)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *(Anonymous function)*

___

### `Const` mapFailure

▸ **mapFailure**‹**E**, **A**›(`f`: function): *(Anonymous function)*

*Defined in [src/index.ts:113](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L113)*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: E): *A*

**Parameters:**

Name | Type |
------ | ------ |
`a` | E |

**Returns:** *(Anonymous function)*

___

## constructors Functions

### `Const` failure

▸ **failure**‹**E**›(`e`: E): *[RemoteData](_src_index_.md#remotedata)‹E, never›*

*Defined in [src/index.ts:97](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L97)*

**Type parameters:**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

**Returns:** *[RemoteData](_src_index_.md#remotedata)‹E, never›*

___

### `Const` success

▸ **success**‹**A**›(`a`: A): *[RemoteData](_src_index_.md#remotedata)‹never, A›*

*Defined in [src/index.ts:89](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L89)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[RemoteData](_src_index_.md#remotedata)‹never, A›*

___

## guards Functions

### `Const` isFailure

▸ **isFailure**‹**E**, **A**›(`ma`: [RemoteData](_src_index_.md#remotedata)‹E, A›): *ma is Failure<E>*

*Defined in [src/index.ts:69](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L69)*

Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`ma` | [RemoteData](_src_index_.md#remotedata)‹E, A› |

**Returns:** *ma is Failure<E>*

___

### `Const` isLoading

▸ **isLoading**‹**E**, **A**›(`ma`: [RemoteData](_src_index_.md#remotedata)‹E, A›): *ma is Loading*

*Defined in [src/index.ts:55](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L55)*

Returns `true` if the remoteData is an instance of `Loading`, `false` otherwise

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`ma` | [RemoteData](_src_index_.md#remotedata)‹E, A› |

**Returns:** *ma is Loading*

___

### `Const` isNotAsked

▸ **isNotAsked**‹**E**, **A**›(`ma`: [RemoteData](_src_index_.md#remotedata)‹E, A›): *ma is NotAsked*

*Defined in [src/index.ts:48](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L48)*

Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`ma` | [RemoteData](_src_index_.md#remotedata)‹E, A› |

**Returns:** *ma is NotAsked*

___

### `Const` isSuccess

▸ **isSuccess**‹**E**, **A**›(`ma`: [RemoteData](_src_index_.md#remotedata)‹E, A›): *ma is Success<A>*

*Defined in [src/index.ts:62](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L62)*

Returns `true` if the remoteData is an instance of `NotAsked`, `false` otherwise

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`ma` | [RemoteData](_src_index_.md#remotedata)‹E, A› |

**Returns:** *ma is Success<A>*

## constructors Object literals

### `Const` loading

### ▪ **loading**: *object*

*Defined in [src/index.ts:84](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L84)*

###  _tag

• **_tag**: *"Loading"* = "Loading"

*Defined in [src/index.ts:84](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L84)*

___

### `Const` notAsked

### ▪ **notAsked**: *object*

*Defined in [src/index.ts:79](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L79)*

###  _tag

• **_tag**: *"NotAsked"* = "NotAsked"

*Defined in [src/index.ts:79](https://github.com/tammosito/remotedata/blob/027b75e/src/index.ts#L79)*

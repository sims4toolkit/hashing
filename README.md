# Sims 4 Toolkit - Hashing (@s4tk/hashing)

## Overview

This project contains utility functions for hashing strings (using the same algorithm as The Sims 4) and formatting those hashes for use in tuning, SimData, or elsewhere.

**PLEASE NOTE**: Proper documentation for this package will be provided when the Sims 4 Toolkit website has been completed. For now, please reference this README's Documentation section, where the TS declaration file stubs are provided.

## Installation

Install the package as a dependency from npm with the following command:

```sh
npm i @s4tk/hashing
```

## Disclaimers

Sims 4 Toolkit (S4TK) is a collection of creator-made modding tools for [The Sims 4](https://www.ea.com/games/the-sims). "The Sims" is a registered trademark of [Electronic Arts, Inc](https://www.ea.com/). (EA). Sims 4 Toolkit is not affiliated with or endorsed by EA.

All S4TK software is currently considered to be in its pre-release stage. Use at your own risk, knowing that breaking changes are likely to happen.

## Documentation

### Index

Hashing Functions
- function fnv24
- function fnv32
- function fnv56
- function fnv64
- function fnv32to24
- function fnv64to56

Formatting Functions
- function formatStringKey
- function formatResourceType
- function formatResourceGroup
- function formatResourceInstance
- function formatResourceKey
- function formatAsHexString

---

### hashing

#### Importing

Import the entire file:

```ts
import * as hashing from "@s4tk/hashing"; // ESM
const hashing = require("@s4tk/hashing"); // CJS
```

Or individual functions:

```ts
import { fnv32, ... } from "@s4tk/hashing"; // ESM
const { fnv32, ... } = require("@s4tk/hashing"); // CJS
```

#### Functions

```ts
/**
 * Gets the 24-bit FNV-1 hash of the given string.
 *
 * @param value String to hash
 * @returns 24-bit FNV-1 hash of given string
 */
function fnv24(value: string): number;
```

```ts
/**
 * Gets the 32-bit FNV-1 hash of the given string.
 *
 * @param value String to hash
 * @param highBit Whether or not the force the high bit to 1
 * @returns 32-bit FNV-1 hash of given string
 */
function fnv32(value: string, highBit?: boolean): number;
```

```ts
/**
 * Gets the 56-bit FNV-1 hash of the given string.
 *
 * @param value String to hash
 * @returns 56-bit FNV-1 hash of given string
 */
function fnv56(value: string): bigint;
```

```ts
/**
 * Gets the 64-bit FNV-1 hash of the given string.
 *
 * @param value String to hash
 * @param highBit Whether or not the force the high bit to 1
 * @returns 64-bit FNV-1 hash of given string
 */
function fnv64(value: string, highBit?: boolean): bigint;
```

```ts
/**
 * Converts the given 32-bit hash to 24-bit.
 *
 * @param hash Hash value to convert
 */
function fnv32to24(hash: number): number;
```

```ts
/**
 * Converts the given 64-bit hash to 56-bit.
 *
 * @param hash Hash value to convert
 */
function fnv64to56(hash: bigint): bigint;
```

---

### formatting

#### Importing

Import the entire file:

```ts
import * as formatting from "@s4tk/hashing/formatting"; // ESM
const formatting = require("@s4tk/hashing/formatting"); // CJS
```

Or individual functions:

```ts
import { formatAsHexString, ... } from "@s4tk/hashing/formatting"; // ESM
const { formatAsHexString, ... } = require("@s4tk/hashing/formatting"); // CJS
```

#### Functions

```ts
/**
 * Formats a string table entry's key as a 32-bit hex string with a 0x prefix.
 *
 * @param key String key to format
 */
function formatStringKey(key: number): string;
```

```ts
/**
 * Formats a resource's type as a 32-bit hex string with no prefix.
 *
 * @param value Value to format
 */
function formatResourceType(value: number): string;
```

```ts
/**
 * Formats a resource's group as a 32-bit hex string with no prefix.
 *
 * @param value Value to format
 */
function formatResourceGroup(value: number): string;
```

```ts
/**
 * Formats a resource's instance as a 64-bit hex string with no prefix.
 *
 * @param value Value to format
 */
function formatResourceInstance(value: bigint): string;
```

```ts
/**
 * Formats a resource key using the given delimeter (':' by default).
 * 
 * @param type Type of key
 * @param group Group of key
 * @param instance Instance of key
 * @param delimeter Character to separate the numbers with
 */
function formatResourceKey(type: number, group: number, instance: bigint, delimeter?: string): string;
```

```ts
/**
 * Formats the given number or bigint as a hex string, padding the start with zeros to match the number of given digits, with or without a "0x" prefix.
 *
 * @param value Values to format as hex
 * @param digits Digits to pad start of hex number with
 * @param usePrefix Whether or not the prefix string with "0x"
 */
function formatAsHexString(value: number | bigint, digits: number, usePrefix?: boolean): string;
```

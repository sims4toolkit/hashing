/**
 * Formats a string table entry's key as a 32-bit hex string with a 0x prefix.
 * 
 * @param key String key to format
 */
export function formatStringKey(key: number): string {
  validatePositive32bit(key);
  return formatAsHexString(key, 8, true);
}

/**
 * Formats a resource's type as a 32-bit hex string with no prefix.
 * 
 * @param value Value to format
 */
export function formatResourceType(value: number): string {
  validatePositive32bit(value);
  return formatAsHexString(value, 8, false);
}

/**
 * Formats a resource's group as a 32-bit hex string with no prefix.
 * 
 * @param value Value to format
 */
export function formatResourceGroup(value: number): string {
  validatePositive32bit(value);
  return formatAsHexString(value, 8, false);
}

/**
 * Formats a resource's instance as a 64-bit hex string with no prefix.
 * 
 * @param value Value to format
 */
export function formatResourceInstance(value: bigint): string {
  validatePositive64bit(value);
  return formatAsHexString(value, 16, false);
}

/**
 * Formats a resource key using the given delimeter (':' by default).
 * 
 * @param type Type of key
 * @param group Group of key
 * @param instance Instance of key
 * @param delimeter Character to separate the numbers with
 */
export function formatResourceKey(type: number, group: number, instance: bigint, delimeter: string = ":"): string {
  return `${formatResourceType(type)}${delimeter}${formatResourceGroup(group)}${delimeter}${formatResourceInstance(instance)}`;
}

/**
 * Formats the given number or bigint as a hex string, padding the start with
 * zeros to match the number of given digits, with or without a "0x" prefix.
 * 
 * @param value Values to format as hex
 * @param digits Digits to pad start of hex number with
 * @param usePrefix Whether or not the prefix string with "0x"
 */
export function formatAsHexString(value: number | bigint, digits: number, usePrefix = false): string {
  return `${usePrefix ? '0x' : ''}${value.toString(16).padStart(digits, '0').toUpperCase()}`;
}

//#region Validation Helpers

/**
 * Validates that the given value is a positive 32-bit integer.
 * 
 * @param value Value to validate
 * @throws If the value is not a positive 32-bit integer
 */
function validatePositive32bit(value: number) {
  if (Number.isNaN(value) || value < 0 || value > 0xFFFFFFFF) {
    throw new Error(`Expected value to be a positive, 32-bit integer, but got ${value}.`)
  }
}

/**
 * Validates that the given value is a positive 64-bit integer.
 * 
 * @param value Value to validate
 * @throws If the value is not a positive 64-bit integer
 */
function validatePositive64bit(value: bigint) {
  if (value < 0n || value > 0xFFFFFFFFFFFFFFFFn) {
    throw new Error(`Expected value to be a positive, 64-bit integer, but got ${value}.`)
  }
}

//#endregion Validation Helpers

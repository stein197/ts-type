/**
 * Represents JSON type
 */
export type Json = null | boolean | number | string | JsonArray | JsonObject

/**
 * Represents an array of JSON values
 */
export type JsonArray = Json[];

/**
 * Represents an object of JSON values
 */
export type JsonObject = {[K: string | number]: Json}

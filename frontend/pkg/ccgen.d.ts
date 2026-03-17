/* tslint:disable */
/* eslint-disable */

/**
 * Detect card brand from number prefix
 */
export function detect_brand(number: string): string;

/**
 * Generate credit card numbers
 * Returns a JSON string with the generation result
 */
export function generate(bin_pattern: string, count: number, include_expiry: boolean, include_cvv: boolean, format: string, min_years: number, max_years: number, unique: boolean, card_length: number): string;

/**
 * Get all supported card brands
 */
export function get_brands(): string;

/**
 * Get the default BIN pattern for a brand
 */
export function get_default_bin(brand_code: string): string;

/**
 * Initialize the WASM module
 */
export function init(): void;

/**
 * Look up a BIN (first 6-8 digits)
 * Returns a JSON string with card info
 */
export function lookup_bin(bin: string): string;

/**
 * Validate a card number
 * Returns a JSON string with the validation result
 */
export function validate_card(card_number: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly detect_brand: (a: number, b: number) => [number, number];
    readonly generate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => [number, number];
    readonly get_brands: () => [number, number];
    readonly get_default_bin: (a: number, b: number) => [number, number];
    readonly lookup_bin: (a: number, b: number) => [number, number];
    readonly validate_card: (a: number, b: number) => [number, number];
    readonly init: () => void;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

export type UUIDv7 = string & `{string}-{string}-7{string}-{a|b|8|9}{string}-{string}`;
export const UUIDv7Regex = /^[0-9(a-f|A-F)]{8}-[0-9(a-f|A-F)]{4}-7[0-9(a-f|A-F)]{3}-[89ab][0-9(a-f|A-F)]{3}-[0-9(a-f|A-F)]{12}$/;
export const isUUIDv7 = (s: string): s is UUIDv7 => s.match(UUIDv7Regex) != null;

/**
 * Generates UUIDv7 using crypto API compatible with cloudflare and modern browsers
 * 
 * @returns {string} UUIDv7
 * @example
 * ```
 * // Mock string format: "TTTTTTTT-TTTT-7XXX-bXXX-XXXXXXXX"
 * // T: Timestamp
 * // X: Random values
 * Here's an example of the UUIDv7 string output where (t) represent timest:
 * // Example output "0195acfc-48db-7a33-9997-f86dffc91039"
 * console.log(uuid_generate_v7());
 * ```
*/
export const uuid_generate_v7 = (): UUIDv7 => {
  // get timestamp
  const t = Date.now().toString(16).padStart(12,'0');
  // generate UUIDv4
  const r = crypto.randomUUID();
  // form UUIDv7 from timestamp and UUIDv4 (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
  return t.substring(0,8).padStart(8,'0') + '-' 
    + t.substring(8,12).padStart(4,'0') + '-' 
    + '7' + r.substring(0,3) + '-' 
    + 'b' + r.substring(3,6) + '-' 
    + r.substring(24) as UUIDv7;
}

/**
 * Decodes UUIDv7 into a timestamp
 * 
 * @param {string & UUIDv7} uuid The UUIDv7 to decode.
 * @returns {number} The timestamp in milliseconds since epoch Jan 1, 1970
 * @example
 * // Prints timestamp in milliseconds for current date and time
 * console.log(uuid_decode_v7(uuid_generate_v7));
*/
export const uuid_decode_v7 = (uuid: UUIDv7): number => parseInt(uuid.substring(0,8) + uuid.substring(9,13), 16);

export default {
  uuid_generate_v7: uuid_generate_v7,
  uuid_decode_v7: uuid_decode_v7
}

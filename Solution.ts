/**
 * Finds the index of the first occurrence of the needle string in the haystack string.
 * If the needle is not found, returns -1.
 * @param haystack - The string to search in.
 * @param needle - The string to search for.
 * @returns The index of the first occurrence of the needle, or -1 if not found.
 */
class Solution {
    strStr(haystack: string, needle: string): number {
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            if (haystack.substring(i, i + needle.length) === needle) {
                return i;
            }
        }
        return -1;
    }
}

const sol = new Solution();
console.log(sol.strStr("hello", "g"));
/**
 * Alternative solution using indexOf method
 */
class AlternativeSolution {
    strStr(haystack: string, needle: string): number {
        return haystack.indexOf(needle);
    }
}

const altSol = new AlternativeSolution();
console.log(altSol.strStr("hello", "g"));

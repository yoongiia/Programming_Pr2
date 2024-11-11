"""
Finds the index of the first occurrence of the needle string in the haystack string.

Args:
    haystack (str): The string to search in.
    needle (str): The string to search for.

Returns:
    int: The index of the first occurrence of the needle in the haystack, or -1 if the needle is not found.
"""
class Solution(object):
    def strStr(self, haystack, needle):
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i + len(needle)] == needle:
                return i
        return -1

sol = Solution()         
print(sol.strStr("hello","g"))
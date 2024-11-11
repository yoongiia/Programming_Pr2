/// <summary>
/// Finds the index of the first occurrence of the needle string in the haystack string.
/// If the needle is not found, returns -1.
/// </summary>
/// <param name="haystack">The string to search in.</param>
/// <param name="needle">The string to search for.</param>
/// <returns>The index of the first occurrence of the needle, or -1 if not found.</returns>
using System;

public class Solution
{
    public int StrStr(string haystack, string needle)
    {
        for (int i = 0; i <= haystack.Length - needle.Length; i++)
        {
            if (haystack.Substring(i, needle.Length) == needle)
            {
                return i;
            }
        }
        return -1;
    }
}

class Program
{
    static void Main()
    {
        Solution sol = new Solution();
        Console.WriteLine(sol.StrStr("hello", "g")); 
    }
}

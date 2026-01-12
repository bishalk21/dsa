/** Tries
 * A trie (pronounced "try") is a tree-like data structure
 * that is used to store a dynamic set of strings efficiently.
 * Each node in the trie represents a single character of a stringq,
 * where the keys are usually strings.
 * Tries are particularly useful for tasks involving
 * prefix matching and autocomplete features.
 *
 * - also known as a prefix tree,
 *   because they are often used to store prefixes of words.
 *
 * For example, in google search autocomplete,
 * as you type each letter, the system suggests possible completions
 * based on the prefixes stored in a trie.
 *
 * - Words are stored character by character,
 *   with each node representing a character.
 * - common prefixes are shared among words,
 *   leading to space efficiency.
 * - Each path represents a word or a prefix of a word.
 * - some of the nodes are marked as "end of word" nodes
 *   to indicate the completion of a valid word.
 *
 * suppose,
 * strArr = ["cat", "car", "cup", "cut", "bat", "ball"]
 * we have to find the words starting with "ca"
 * The trie structure would look like this:
 *                    []root
 *                  /    \
 *                 c       b
 *               /   \      \
 *              ca    cu      ba
 *             / \    / \     / \
 *           cat car cup cut bat ball
 * In this trie:
 * - The root node is empty and has two children: 'c' and 'b'.
 * - The 'c' node has two children: 'a' and 'u',
 *   representing the prefixes "ca" and "cu".
 * - The 'a' node has two children: 't' and 'r',
 *   representing the words "cat" and "car".
 * - The 'u' node has two children: 'p' and 't',
 *   representing the words "cup" and "cut".
 * - The 'b' node has one child: 'a',
 *   representing the prefix "ba".
 * - The 'a' node has one child: 't' and 'l',
 *   representing the words "bat" and "ball".
 *
 * Prefix Searching becomes efficient,
 * as we can traverse the trie according to the characters
 * of the prefix we are searching for.
 *
 * When to use Tries:
 * - Prefix-based searches
 * - Autocomplete systems
 * - Dictionary implementations or problem solving
 * - Spell checking
 * - Longest prefix matching
 * - word suggestions
 *
 * When not to use Tries:
 * - exact string matching: like searching for a single word "apple" (hash tables are better)
 * - small datasets: for small sets of strings, simpler data structures like arrays or hash sets may be more efficient
 * - memory constraints: Tries can consume more memory than other data structures (use hash tables or arrays)
 *
 * Tries are particularly useful for:
 * 1. Autocomplete systems
 * 2. Spell checking
 * 3. IP routing (longest prefix matching)
 * 4. T9 predictive text
 * 5. DNA sequence analysis
 * 6. Word games (like Boggle)
 * 7. Implementing dictionaries
 * 8. Search engines
 * 9. Data compression
 * 10. Network protocols
 * 11. Natural language processing
 * 12. File system indexing
 * 13. Pattern matching algorithms
 * 14. Storing a large set of strings efficiently
 * 15. Implementing efficient search algorithms for stringss
 *
 * Basic Operations:
 * 1. Insertion: Adding a word to the trie.
 * 2. Search: Checking if a word exists in the trie.
 * 3. StartsWith: Checking if there is any word in the trie
 *   that starts with a given prefix.
 */

/**
 * Time Complexity:
 * Insertion: O(m), where m is the length of the word being inserted.
 * Search: O(m), where m is the length of the word being searched.
 * StartsWith: O(m), where m is the length of the prefix being checked.
 *
 * Space Complexity:
 * In the worst case, the space complexity is O(N * M),
 * where N is the number of words inserted into the trie
 * and M is the average length of the words.
 * This occurs when there are no shared prefixes among the words,
 * leading to a separate path for each word.
 * However, in practice, tries can be more space-efficient
 * due to shared prefixes among words.
 * The actual space used depends on the number of unique prefixes
 * and the structure of the inserted words.
 * So the space complexity can be considered O(U),
 * where U is the number of unique prefixes in the trie.
 *
 * Speed >>>>> Space
 */

/** Trie Node
 * A TrieNode represents a single node in the trie.
 * Each node contains:
 * - children: A map or object that holds references to child nodes.
 * - isEndOfWord: A boolean flag indicating whether the node
 *                marks the end of a valid word.
 */
class TrieNode {
  constructor() {
    this.children = {}; // Map of character to TrieNode
    this.isEndOfWord = false; // True if the node marks the end of a word
  }
}

/** Trie
 * The Trie class encapsulates the root node and provides methods
 * for inserting words, searching for words, and checking prefixes.
 */
class Trie {
  constructor() {
    this.root = new TrieNode(); // Initialize the root node
  }
  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode(); // Create a new node if it doesn't exist
      }
      node = node.children[char]; // Move to the child node
    }
    node.isEndOfWord = true; // Mark the end of the word
  }
  // Search for a word in the trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false; // If the character is not found, the word doesn't exist
      }
      node = node.children[char]; // Move to the child node
    }
    return node.isEndOfWord; // Return true if it's the end of a valid word
  }
  // Check if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false; // If the character is not found, no word with the prefix exists
      }
      node = node.children[char]; // Move to the child node
    }
    return true; // All characters in the prefix were found
  }
}

// Example usage:
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true

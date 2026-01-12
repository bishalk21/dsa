/** Implement Trie (Prefix Tree) [medium]
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * A trie (pronounced as "try") is a tree data structure used to efficiently
 * store and retrieve keys in a dataset of strings.
 * There are various applications of this data structure,
 * such as autocomplete and spellchecker.
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - boolean search(String word) Returns true if the string word is in the trie
 *   (i.e., was inserted before), and false otherwise.
 * - boolean startsWith(String prefix) Returns true if there is a previously
 *   inserted string word that has the prefix prefix, and false otherwise.
 *
 * Example 1:
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 *
 * @class TrieNode
 * A TrieNode represents a single node in the Trie.
 * It contains a map of children nodes and a boolean flag to indicate
 * whether it marks the end of a valid word.
 * @class Trie
 * The Trie class encapsulates the root node and provides methods
 * for inserting words, searching for words, and checking prefixes.
 *
 * @method insert(word)
 * Inserts a word into the trie.
 * @method search(word)
 * Searches for a word in the trie.
 * @method startsWith(prefix)
 * Checks if there is any word in the trie that starts with the given prefix.
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

/** Initialize your data structure here. */
var Trie = function () {
  this.root = new TrieNode(); // Initialize the root node

  //   this.root = {
  //     children: {},
  //     isEndOfWord: false,
  //   };
};

/** Inserts a word into the trie
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode(); // Create a new node if it doesn't exist
      //   node.children[char] = {
      //     children: {},
      //     isEndOfWord: false,
      //   };
    }
    node = node.children[char]; // Move to the child node
  }
  node.isEndOfWord = true; // Mark the end of the word
};

/** Returns true if the word is in the trie
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      return false; // If the character is not found, the word doesn't exist
    }
    node = node.children[char]; // Move to the child node
  }
  return node.isEndOfWord; // Return true if it's the end of a valid word
};

/** Returns true if there is a word in the trie that starts with the given prefix
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children[char]) {
      return false; // If the character is not found, no word with the prefix exists
    }
    node = node.children[char]; // Move to the child node
  }
  return true; // All characters in the prefix were found
};

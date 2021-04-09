/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let previousNode = null;
  const licstCycle = (list) => {
    const listCopy = list;
    if (listCopy.next) {
      if (listCopy.value === k) {
        if (previousNode) {
          listCopy.value = listCopy.next.value;
          listCopy.next = listCopy.next.next;
          licstCycle(listCopy.next);
        } else {
          previousNode = listCopy.next;
          licstCycle(previousNode);
        }
      }
      licstCycle(listCopy.next);
    }
    return previousNode;
  };
  return licstCycle(l);
}

module.exports = removeKFromList;

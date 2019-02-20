// reverse a linked list


// solution works but their bs main function doesn't
function reverse(head) {
  // let startNode = null;

  if (Boolean(head)) {
      let prev = head;
      let curr = head.next;
      let next = curr.next;

      head.next = null;

      while (Boolean(next)) {
          curr.next = prev;

          prev = curr;
          curr = next;
          next = curr.next;
      }

      curr.next = prev;
      // startNode = curr;
  }

  // debug to prove it's working
  // while (!!startNode) {
  //     console.log(startNode.data);
  //     console.log();
  //     startNode = startNode.next;
  // }
}
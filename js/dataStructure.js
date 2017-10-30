/*String*/

var str = new String();

/*Linked List 链表*/
/*
1、当访问链表中某个节点 curt.next 时，一定要先判断 curt 是否为 null
2、全部操作结束后，判断是否有环；若有环，则置其中一端为 null
 */

function LinkedList() {
  var Node = function (element) {
    this.element = element //存放节点内容
    this.next = null //指针
  }

  var length = 0, //存放链表长度
      head = null //头指针

  this.append = function (element) {
    var node = new Node(element)
    if(!head){
      head = node
    }else{
      var current = head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    length++
    return true
  }

  this.insert = function (position, element) {
    if(position>=0 && position <= length){
      var node = new Node(element),
          current = head,
          prev = null,
          index = 0
      if(position === 0){
        node.next = current
        head = node
      }else{
        while (index++ < position){
          prev = current
          current = current.next
        }
        node.next = current
        prev.next = node
      }
      length++
      return true
    }else{
      return false
    }
  }
  
  this.reverse = function () {
    
  }
  //http://blog.csdn.net/zhuwq585/article/details/53130741
}
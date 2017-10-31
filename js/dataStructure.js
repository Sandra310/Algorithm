/*String*/

var str = new String();

/*Linked List 链表*/
/*
1、当访问链表中某个节点 curt.next 时，一定要先判断 curt 是否为 null
2、全部操作结束后，判断是否有环；若有环，则置其中一端为 null
3、快慢指针，常用的在单链表中用
快指针每次走2，慢指针每次走1，快慢指针都从头开始，快指针走到末尾，慢指针刚好走到中间位置。
若快指针为null说明是单链表，若快指针=慢指针，则快指针追上慢指针，为循环链表。
 */

function LinkedList() {
  var Node = function (element) {
    this.element = element //存放节点内容
    this.next = null //指针
  }

  var length = 0, //存放链表长度
      head = null //头指针

  this.append = function (element) { //追加
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

  this.insert = function (position, element) { //插入
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

  this.removeAt = function (position) {
    if(position >=0 && position < length){
      var current = head,
          previous,
          index = 0
      if(position == 0){
        head = current.next
      }else{
        while(index++ < position){
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element

    }else{
      return false
    }
  }
  
  this.remove = function (element) {
    var current = head,
        index = 0,
        previous
    if(element === current.element){
      head = current.next
      length--
      return true
    }
    while(current){
      if(element === current.element){
        previous.next = current.next
        length--
        return true
      }else{
        index++
        previous = current
        current = current.next
      }
    }
    return false
  }

  this.remove = function () { //删除链表最后一个节点
    if(length < 1){
      return false
    }
    var current = head,
        previous
    if(length == 1){
      head = null
      length--
      return current.element
    }
    while(current.next !== null){
      previous = current
      current = current.next
    }
    previous.next = null
    length--
    return current.element
  }

  this.indexOf = function (element) {
    var current = head,
        index = 0
    while(current){
      if(current.element === element){
        return index
      }else{
        index++
        current = current.next
      }
    }
    return false
  }

  /* 思路：next暂存除了第一个节点之外的后面部分
          让第一个节点连接prev       最初为 节点1->null
          把连接好的节点给prev

   *  */
  this.reverse = function () {  //链表反转
    var current = head,
        prev = null
    while(current){
      var next = current.next
      current.next = prev
      prev = current
      current = next
    }
  }
  //http://blog.csdn.net/zhuwq585/article/details/53130741
}

/*二叉树*/
/*根据访问根元素的前后顺序，遍历方式可分为：深度优先（根据根节点相对于左右子节点的访问顺序可分为：前序、中序、后序）、广度优先
* 前序：根->左->右
* 中序：左->根->右
* 后序：左->右->根
* */
function BinaryTree() {
  var TreeNode = function (val) {
    this.left = null
    this.right = null
    this.val = val
    this.key = key
  }
  var root = null

  this.preorder = function (node) { // 前序遍历
    if(node){
      console.log(node.val)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }

  this.inorder = function (node) { // 中序遍历
    if(node){
      this.inorder(node.left)
      console.log(node.val)
      this.inorder(node.right)
    }
  }

  this.postorder = function (node) { // 后序遍历
    if(node){
      this.inorder(node.left)
      this.inorder(node.right)
      console.log(node.val)
    }
  }

  this.levelOrderTraversal = function (node) { //广度优先
    if(node){
      var que = []
      que.push(node)
      while (que.length !== 0){
        node = que.shift() //把数组中第一个元素删除并返回
        console.log(node.val)
        if(node.left) que.push(node.left)
        if(node.right) que.push(node.right)
      }
    }
  }
}

/* 二叉查找树
* 每个节点含有键及相应的值，每个节点的键都大于等于左子树中任意节点的键，小于右子树种任意节点键
* 使用中序遍历可得到有序数组。  http://www.cnblogs.com/Cathamerst/p/7231182.html
* */
function BinarySearchTree() {
  var TreeNode = function (key) {
    this.left = null
    this.right = null
    this.key = key
  }
  var root = null

  this.insertNode = function (newNode) {
    var node = root
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode
      }else{
        this.insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }



}
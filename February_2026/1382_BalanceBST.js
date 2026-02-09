
function TreeNode(val,left,right){
    this.val=val;
    this.left=left;
    this.right=right;
}
var BalanceBST=function(root){
    // store the tree in sorted order we will get using inorder traversal
    let arr=[];

    function inorder(node){
        if(!node){
            return;
        }
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    function BalancingTree(l,r){

         if(l>r){
            return null;
        }
        let mid=Math.floor((l+r)/2);
        let node=new TreeNode(arr[mid]);

       
        node.left=BalancingTree(l,mid-1);
        node.right=BalancingTree(mid+1,r);
        return node;
    }
    return BalancingTree(0,arr.length-1);
}
const root=new TreeNode(1);
root.right=new TreeNode(2);
root.right.right=new TreeNode(3);
root.right.right.right=new TreeNode(4);
console.log(BalanceBST(root));



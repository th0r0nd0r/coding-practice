# insert into binary search tree

def insert(r,val):
    if r == None:
        r = Node(val)
    elif val <= r.data:
        r.left = insert(r.left, val)
    else:
        r.right = insert(r.right, val)
    return r




# find the lowest common ancestor of two nodes in a bst

# recursively
def lca(root , v1 , v2):
    r = root.data
    
    if r < v1 and r < v2:
        return lca(root.right, v1, v2)
    elif r > v1 and r > v2:
        return lca(root.left, v1, v2)
    else:
        return root

# iteratively
def lca(root , v1 , v2):
    while True:
        r = root.data
        if r < v1 and r < v2:
            root = root.right
        elif r > v1 and r > v2:
            root = root.left
        else:
            return root



# given the root of a bst, find the height of the tree

def height(root):
    if root == None:
        return -1
    leftHeight = height(root.left)
    rightHeight = height(root.right)
    
    return max(leftHeight, rightHeight) + 1



# print the "top view" of a binary tree

def topView(root):
    left_side = [root.data]
    right_side = []
    
    left_node = root.left
    right_node = root.right
    
    while left_node != None:
        left_side.insert(0, left_node.data)
        left_node = left_node.left
    while right_node != None:
        right_side.append(right_node.data)
        right_node = right_node.right
        
    top_view = left_side + right_side
    print " ".join(map(str, top_view))

# Level order traversal of a binary tree

def levelOrder(root):
    q = [root]
    nodes = []
    
    while q:
        curr_node = q.pop(0)
        nodes.append(curr_node.data)
        if curr_node.left != None:
            q.append(curr_node.left)
        if curr_node.right != None:
            q.append(curr_node.right)
    
    print " ".join(map(str, nodes))



# decode a huffman tree

def decodeHuff(root , s):
    i = 0
    curr_node = root
    message = ""
    
    if is_leaf(root):
        for i in range(s.length):
            message += root.data
    else:
        while i < len(s):
            if s[i] == "0":
                curr_node = curr_node.left
            else:
                curr_node = curr_node.right   
                
            if is_leaf(curr_node):
                message += curr_node.data
                curr_node = root 

            i += 1
        
    print message



# determine if a binary tree is a bst
def check_binary_search_tree_(root):
    return checkBST(root, -1, 10001)

def checkBST(root, Min, Max):
    if not root:
        return True
    if root.data <= Min or root.data >= Max:
        return False
    return checkBST(root.left, Min, root.data) and checkBST(root.right, root.data, Max)
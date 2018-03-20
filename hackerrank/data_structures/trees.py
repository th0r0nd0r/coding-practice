# insert into binary search tree

def insert(r,val):
    new_node = Node(val)
    if r == None:
        r = new_node
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
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
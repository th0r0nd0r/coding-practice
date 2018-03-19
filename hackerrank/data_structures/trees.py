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

def lca(root , v1 , v2):
    r = root.data
    
    if r < v1 and r < v2:
        return lca(root.right, v1, v2)
    elif r > v1 and root > v2:
        return lca(root.left, v1, v2)
    else:
        return root
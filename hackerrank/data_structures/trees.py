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
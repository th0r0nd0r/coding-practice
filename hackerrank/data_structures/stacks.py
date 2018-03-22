# balanced brackets problem
# verbose version because hackerranck doesn't want boolean answers
def isBalanced(s):
    stack = []
    bracket_map = {
        "}":"{",
        "]":"[",
        ")":"("
    }
    
    for b in s:
        if b not in bracket_map:
            stack.append(b)
        else:
            if not stack:
                return "NO"
            
            pair = stack.pop()
            if bracket_map[b] != pair:
                return "NO"
    
    if not stack:
        return "YES"
    else:
        return "NO"

# simplified version
def isBalanced(s):
    stack = []
    bracket_map = {
        "}":"{",
        "]":"[",
        ")":"("
    }
    
    for b in s:
        if b not in bracket_map:
            stack.append(b)
        elif not stack or bracket_map[b] != stack.pop():
            return False
    
    return not stack

# balanced brackets problem

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
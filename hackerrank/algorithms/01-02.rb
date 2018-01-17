def digital_root(n)
  root = 0

  if n < 10
    return n
  end

  while n > 0
    root += n % 10
    root += n / 10
    n /= 10
  end

  return digital_root(root)
end

p digital_root(103)
p digital_root(999)
p digital_root(1234)
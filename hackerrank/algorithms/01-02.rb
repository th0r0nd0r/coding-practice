def digital_root(n)
  digits = []

  if n < 10
    return n
  end

  while n >= 10
    digits << n % 10
    digits << n / 10
    n /= 10
  end

  new_n = digits.inject(:+)

  return digital_root(new_n)
end
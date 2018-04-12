### Mock Interview notes
- isNan
- refs in react

### Stuff to Research
- promises
- event loops
- bit manipulation
- make hashing function in JS
- Static methods (class methods?) in JS

### Rails Stuff

#### Forms
- form tag
  + input tags (type=text/textarea, etc.)
  + input tag (type=submit)
  + 'action' field is the route (e.g. '/books')
  + the 'name' field on inputs corresponds to the params
  + nest params like this: 'book[title]'

- for 'new' forms (method='post'),

- for 'update' forms,
  + start the form as a 'post' form
  + as the first input, do this:
  + type='hidden' name='_method' value='PATCH'
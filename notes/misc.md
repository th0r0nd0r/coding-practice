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

#### Controllers
- use instance variables @variable to give views access to items

#### Forms
- form tag
  + input tags (type=text/textarea, etc.)
  + input tag (type=submit)
  + 'action' field is the route (e.g. '/books')
  + the 'name' field on inputs corresponds to the params
  + nest params like this: 'book[title]'
  - dropdowns
    + select tag
    + <option disabled selected> --please select-- </option>
    + <option value="fiction">fiction</option>


- for 'new' forms (method='post'),

- for 'update' forms,
  + start the form as a 'post' form
  + <form action="<%= book_url(@book) %>" method="post">
  + as the first input, do this:
  + type='hidden' name='_method' value='PATCH'
  + for normal inputs, add: value="<%= @book.title %>"
  + for dropdowns, instead of having a default selected, do:
    - <=% @book.category == "Fiction" ? "selected" : "" %>
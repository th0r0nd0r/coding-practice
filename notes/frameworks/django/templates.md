# Templates
- where frontend rendering happens (if not using a frontent framework like React)
- analogous to Views in Rails

### Setup
- generally live inside an app
- create a templates folder inside app
- create a sub-folder with the name of the app (this helps prevent name conflicts)
- file extension is just .html

### Routing (URL Mapping)
typical pattern goes like this:

- in the app's views.py file, set up a method like this:

```python
from django.shortcuts import render # this line is default since render is so common in views

def home(request):
    return render(request, )
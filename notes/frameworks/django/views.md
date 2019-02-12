# Views
- controll http requests/responses
- analogous to controllers in rails

### Setup
- views.py file is auto-generated when creating an app
- views.py comes with the default import:
```python
from django.shortcuts import render
```

### Rendering Views
```python
def home(request):
    return render(request, "player/home.html")
```
the ```render``` method delegates rendering html to the template, ```player/home.html```
- don't have to include ```templates/``` in the filepath. The method looks there automatically.

- first argument is the request object
- second argument is the filepath
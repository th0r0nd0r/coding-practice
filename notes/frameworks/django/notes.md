# Django Notes



## Terminology

### MVCs vs MTVs

- Instead of MVC, Django uses MTVs
- they map like this:

**Model ==> Model**
**Template ==> View**
**View ==> Controller**

## Commands

#### Running the development server
- bash: python manage.py runserver
- zsh: ./manage.py runserver

## MVTs, Apps

### Views (Controllers)
- take a request parameter
- return a response object

#### urlpatterns
- similar to react router

syntax like:
```python
urlpatterns = [
    url(r'^admin/', admin.site.urls), # ^ matches the beginning of a string
    url(r'welcome', welcome), # finds the string 'welcome' anywhere in a url
    url(r'users$', users) # $ shows exactly users, nothing else
]
```

- the r'word' syntax denotes regular expressions.  Django uses regex to map incoming requests to views



### Apps
- Python package
- contains models, views, templates, urls
- function as mini-web apps
- most Django projects contain several


### Models
- Python classes
- mapped to database tables
- each object is a row in the table

#### Migrations
- Python scripts
- keep db structure in sync with code

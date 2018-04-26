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
- can be designed to be reused between projects


### Models
- Python classes
- mapped to database tables
- each object is a row in the table

#### Inheritance
- all models must inherit from the base model class
- this allows them to represent a table in the database
syntax:

```python
class Move(models.Model):
```

#### Columns
- to add columns to a model, just assign variables
- columns are instances of classes from the models module:

```python
class Move(models.Model):
    x = models.IntegerField()
    y = models.IntegerField()
    comment = models.CharField(max_length=300, blank=True)
```

- most fields in Django are set to disallow null values by default

#### Foreign Keys
- instead of ActiveRecord associations, we assign table relations in a similar way to adding columns:
- we can give aliases to the foreign-keyed classes/tables with *related_name*

```python
class Game(models.Model):
    first_player = models.ForeignKey(User,
                                        related_name="games_first_player")
    second_player = models.ForeignKey(User,
                                        related_name="games_second_player")
```

#### Migrations
- Python scripts
- keep db structure in sync with code

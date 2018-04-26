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

##### Model Field Options
- passed as arguments to the class being instantiated as the model's attribute:
```python
Models.IntegerField(null = True)
```

#### Foreign Keys (one-to-many relations)
- instead of ActiveRecord associations, we assign table relations in a similar way to adding columns:
- we can give aliases to the foreign-keyed classes/tables with *related_name*

```python
class Game(models.Model):
    first_player = models.ForeignKey(User,
                                        related_name="games_first_player")
    second_player = models.ForeignKey(User,
                                        related_name="games_second_player")
```

- starting with Django 2, every foreign key will need an on_delete attribute, e.g.:

```python
class Move(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
```

in this case, deleting the game will delete all of its associated moves

#### Migrations
- Python scripts
- keep db structure in sync with code

##### Checking for Changes
- to see what changes you've made to models that haven't been reflected in the database tables, run:
```python manage.py makemigrations```
- this will create new migrations for you to update the db based on your changed models.
- NOTE: for this to work, your app must be in the installed apps list in settings.py

##### Running Migrations
```python manage.py <app name> <migration number (or full name)>```

#### Migration Workflow
1. Change model code
2. Generate migration script + edit if necessary
```python manage.py makemigrations```
```python manage.py showmigrations```
```python manage.py sqlmigrate <appname> <migrationname> #show SQL for specific migration```
3. Run migrations
```python manage.py migrate```



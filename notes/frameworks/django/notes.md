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
- Django Field classes
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

### Admin Site
- the admin app is installed by default (admin.py)
- urlpatterns configured for admin site by default

#### Registering Models with the Admin Site
```python
# in admin.py
from django.contrib import admin
from .models import Game
admin.site.register(Game)
```


#### Commands
- create superuser to login to the admin site: ```python manage.py createsuperuser```

#### Displaying Info
- define a __str__ method
```python
def __str__(self):
    return "{0} vs {1}".format(
        self.first_player, self.second_player
    )
```
- if using python2, add these lines to your imports:
```python
from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
```

#### Customizing the Admin Site
- adding dropdowns:

```python
GAME_STATUS_CHOICES = (
    ("F", "First player's move"),
    ("S", "Second player's move"),
)

class Game(models.Model):
    # other columns
    status = models.CharField(max_length=1, default='F', choices=GAME_STATUS_CHOICES)
```

#### ModelAdmin Classes
- remove line registering the class with admin
```admin.site.register(Game)```

- replace with the admin class:

```python
@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_player', 'second_player', 'status') #what you see in the list display for the model
    list_editable = ('status',) # lets you edit the field from list display
```

### The Model API
```python manage.py shell``` gives access to django
```python
from gameplay.models import Game, Move
Game.objects.all() #gives a QuerySet of all Game objects
g=Game.objects.get(pk=1) #gets one Game object with primary key = 1

g.status = 'S' #changes the value of the 'status' column locally in the shell
g.save() #executes the appropirate SQL insert to save all local changes to the database

Game.objects.filter(status='F') #filters by field name
Game.objects.exclude(status='F') #filters by exclusion
Game.objects.filter(second_player__username="bill") # __ lets you access the fields of a foreign-keyed table
g.move_set.count() #returns the number of moves in a game
```

### Managers

#### Objects
- every class gets a default 'objects' manager (e.g. Game.objects.all()) that lets you manipulate it

#### One-to-Many Relations
- the "one" side gets a xxx_set attribute
- xxx is name of related model
- this is a 'related manager' object
- works just like 'objects' manager

##### Setting new relations
- from Move m to Game g:
    + m.game=g, or
    + g.move_set.add(m)

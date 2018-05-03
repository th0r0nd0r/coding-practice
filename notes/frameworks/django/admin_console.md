# Customizing the Admin Console

## Adding actions/routing

- add a url to list in get_urls method
like this:
```python
url(
        r'(?P<user_id>.+)/batches/new$',  # regex route
        self.admin_site.admin_view(self.start_batch),  # method to call (pass in <user_id> as argument)
        name='start-batch'  #alias for the method
    )
```

- create a method under the Admin class you're updating:

```python
    def start_batch(self, request, user_id, *args, **kwargs):
        user = User.objects.get(pk=user_id)
        manager = UserQuoteManager(user)
        batch = manager.start_quote_batch()

        return HttpResponseRedirect(reverse("admin:batch-review", args=[batch.pk]))  
```
- define a method that creates the html to render in the list view

```python
    def batches(self, obj):
        if obj.owned_batches.count() == 0:
            return format_html(
                '<a class="button" href="{}">{}</a>'.format(reverse('admin:start-batch', args=[obj.pk]), "Start Batch")
            )
        else:
            return format_html(" ".join(['<a class="button" href="{}">{}</a>'.format(reverse('admin:batch-review', args=[b.pk]), b.id) for b in obj.owned_batches.all()]))
```

- finally, throw that variable in the list_display:

```python
list_display = (
        ...,
        'batches',
        ,,,,
    )
```

Now you have a snazzy button to create a new batch (or do whatever)
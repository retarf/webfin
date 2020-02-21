from budget.models import Entry

def add_entry():
    for i in range(50):
        n = 'test{0}'.format(i)
        a = Entry(month='2020-01-01', name='test', value=10.99)
        a.save()


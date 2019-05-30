from django.test import Client
from rest_framework.response import Response

from api.models import Section, Order, Dish


def test_section_list_200(db, client: Client, section: Section) -> None:
    response: Response = client.get(path='/api/sections/')
    assert len(response.data) == 5
    assert response.data['results'][0]['id'] == section.id
    assert response.data['results'][0]['name'] == 'Restaurant'
    assert response.data['results'][1]['name'] == 'Bar'


def test_review_create_201(db, client: Client) -> None:
    response: Response = client.post(
        path='/api/orders/',
        content_type='application/json',
        data={'text': 'Very good'}
    )
    assert Order.objects.count() == 1
    order = Order.objects.last()
    assert response.status_code == 201
    assert response.data['id'] == order.id
    assert response.data['text'] == 'Very good'


def test_dish_put_200(db, client: Client, dish: Dish) -> None:
    response: Response = client.put(
        path=f'/api/dishes/{dish.id}/',
        content_type='application/json',
        data={'name': 'changed dish',
              'price': 0}
    )
    assert Dish.objects.count() == 1
    dish.refresh_from_db()
    assert response.status_code == 200
    assert response.data['id'] == dish.id
    assert response.data['name'] == 'changed dish' == dish.name

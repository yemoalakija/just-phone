"""Test cases for the models in the base app."""

from django.test import TestCase
from django.contrib.auth.models import User
from .models import Product


class ProductModelTest(TestCase):
    """Test cases for the Product model."""

    @classmethod
    def setUpTestData(cls):
        # Create a user for testing
        cls.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )

        # Create a product for testing
        cls.product = Product.objects.create(
            user=cls.user,
            name="Test Product",
            brand="Test Brand",
            category="Test Category",
            description="Test Description",
            rating=4.5,
            numReviews=10,
            price=99.99,
            countInStock=5,
        )

    def test_str_method(self):
        self.assertEqual(str(self.product), "Test Product")

    def test_user_foreign_key(self):
        self.assertEqual(self.product.user, self.user)

    def test_name_field(self):
        self.assertEqual(self.product.name, "Test Product")

    def test_brand_field(self):
        self.assertEqual(self.product.brand, "Test Brand")

    def test_category_field(self):
        self.assertEqual(self.product.category, "Test Category")

    def test_description_field(self):
        self.assertEqual(self.product.description, "Test Description")

    def test_rating_field(self):
        self.assertEqual(self.product.rating, 4.5)

    def test_num_reviews_field(self):
        self.assertEqual(self.product.numReviews, 10)

    def test_price_field(self):
        self.assertEqual(self.product.price, 99.99)

    def test_count_in_stock_field(self):
        self.assertEqual(self.product.countInStock, 5)

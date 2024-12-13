const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
},
{
    timestamps: false,
});

const Order = sequelize.define('Order', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
}, 
{
    timestamps: false,
});

const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
});

sequelize.sync().then(() => console.log('Database synced.'));

app.get('/api/books', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.get('/api/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found.');
  }
});

app.post('/api/books', async (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).send('Missing required fields.');
  }
  const newBook = await Book.create({ title, author, year });
  res.status(201).json({ id: newBook.id });
});

app.delete('/api/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).send('Book not found.');
  }
});

app.get('/api/orders/:userId', async (req, res) => {
    const orders = await Order.findAll({ where: { userId: req.params.userId } });
    res.json(orders);
});

app.post('/api/orders', async (req, res) => {
    const { userId, bookId, quantity } = req.body;
  
    if (!userId || !bookId || !quantity) {
      return res.status(400).send('Missing required fields.');
    }
  
    // Sprawdzenie czy książka istnieje
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).send('Book not found.');
    }
  
    // Tworzenie zamówienia
    const newOrder = await Order.create({ userId, bookId, quantity });
    res.status(201).json({ id: newOrder.id });
});

app.delete('/api/orders/:id', async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).send('Order not found.');
    }
});

app.patch('/api/orders/:id', async (req, res) => {
    const { quantity } = req.body;
    const order = await Order.findByPk(req.params.id);
  
    if (!order) {
      return res.status(404).send('Order not found.');
    }
  
    if (quantity !== undefined) {
      order.quantity = quantity;
      await order.save();
      res.json(order);
    } else {
      res.status(400).send('No fields to update.');
    }
});

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send('Missing required fields.');
    }
  
    try {
      const newUser = await User.create({ email, password });
      res.status(201).json({ id: newUser.id });
    } catch (error) {
      res.status(400).send('Email already in use.');
    }
});

const jwt = require('jsonwebtoken');
const SECRET_KEY = '123';

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return res.status(401).send('Invalid email or password.');
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
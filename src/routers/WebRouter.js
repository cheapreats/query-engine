const express = require('express');

export const WebRouter = express.Router();

WebRouter.get('/', (req, res) => res.render('editor'));
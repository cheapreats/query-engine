import ScriptController from "../controllers/ScriptController";

const express = require('express');

export const APIRouter = express.Router();

APIRouter.post('/run', ScriptController.runScript);
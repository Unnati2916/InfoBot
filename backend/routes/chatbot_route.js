import express from 'express';
import { Message } from '../controller/chatbot_message.js';

const router = express.Router();

router.post("/message",Message)

export default router;


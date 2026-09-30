import { Router } from 'express';
import { handleContactForm } from '../controllers/contactController';
import { contactRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/contact', contactRateLimiter, handleContactForm);

export default router;

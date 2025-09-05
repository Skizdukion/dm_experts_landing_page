import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatbotRoutes } from "./chatbot";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Register chatbot routes
  app.use('/api/chatbot', chatbotRoutes);

  const httpServer = createServer(app);

  return httpServer;
}

import express from "express";
import { login } from "../services/login.js";

export const loginRoute = express.Router();

loginRoute.post("/", login);
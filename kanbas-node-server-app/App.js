//const express = require('express')
import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
const app = express()
Hello(app)
app.use(cors());  
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);                  
Lab5(app);
app.listen(process.env.PORT || 4000)

import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Tasks from "./pages/tasks";
import Form from "./pages/tasks/Form";

const AppRoutes: React.FC = () => {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tarefas" element={<Tasks />} />
<Route path="/tarefas/cadastro" element={<Form />} />
<Route path="/tarefas/cadastro/:id" element={<Form />} />
</Routes>
);
};

export default AppRoutes
import { Routes, Route, Navigate } from "react-router-dom";
import { GridItems } from "./componentes/GridItems";
import { ItemPage } from "./pages/ItemPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<GridItems />} />
      <Route path="/:itemId" element={<ItemPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

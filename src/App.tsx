// src/App.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

const App: React.FC = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Item List
            </Typography>
            <AddItemForm />
            <ItemList />
        </Container>
    );
};

export default App;

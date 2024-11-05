// src/components/AddItemForm.tsx
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../api/itemsApi";
import { Button, TextField, Box } from "@mui/material";

const AddItemForm: React.FC = () => {
    const [itemName, setItemName] = useState("");
    const [error, setError] = useState("");
    const queryClient = useQueryClient();

    const { mutate } = useMutation(addItem, {
        onSuccess: () => {
            queryClient.invalidateQueries("items");
            setItemName("");
        },
        onError: () => {
            setError("Failed to add item. Please try again.");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!itemName.trim()) {
            setError("Item name cannot be empty.");
            return;
        }
        setError("");
        mutate(itemName);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
            <TextField
                label="Item Name"
                variant="outlined"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                error={!!error}
                helperText={error}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Item
            </Button>
        </Box>
    );
};

export default AddItemForm;

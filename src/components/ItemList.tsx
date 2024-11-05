// src/components/ItemList.tsx
import React from "react";
import { useQuery } from "react-query";
import { fetchItems } from "../api/itemsApi";
import { Item } from "../types/item";
import { CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";

const ItemList: React.FC = () => {
    const { data: items, isLoading, isError } = useQuery<Item[]>("items", fetchItems);

    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography color="error">Failed to load items.</Typography>;

    return (
        <List>
            {items?.map((item) => (
                <ListItem key={item.id}>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
    );
};

export default ItemList;

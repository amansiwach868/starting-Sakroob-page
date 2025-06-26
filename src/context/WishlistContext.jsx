import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const stored = localStorage.getItem("wishlistItems");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        setWishlistItems((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) return prev;
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider
            value={{ wishlistItems, addToWishlist, removeFromWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);

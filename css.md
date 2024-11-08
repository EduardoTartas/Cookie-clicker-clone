/*/* Center container on the page */
body {
    color: #e7e7e7;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}

/* General styling */
.container {
    gap: 10%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    background-color: #4682a9;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 800px;
    box-sizing: border-box;
}

.left-panel, .right-panel {
    box-sizing: border-box;
    padding: 10px;
}

.left-panel {
    flex: 1;
    text-align: center;
    margin-bottom: 20px;
}

.cookie {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin: 20px 0;
}

.stats {
    font-size: 1.2em;
    text-align: left;
}

.right-panel {
    flex: 2;
    width: 100%;
}

.item {
    background-color: #75a4c6;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item img {
    width: 50px;
    height: auto;
    margin-right: 20px;
}

.item-info {
    display: flex;
    align-items: center;
    font-size: 1.2em;
}

.price {
    display: flex;
    align-items: center;
}

.cookie-icon {
    width: 16px;
    height: auto;
    vertical-align: middle;
    margin-left: 3px;
}

.item-buttons {
    display: flex;
    gap: 10px;
}

.button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
}

.button-buy1 {
    background-color: #e0e0e0;
    color: black;
}

.button-buy10 {
    background-color: #d0d0d0;
    color: black;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .left-panel, .right-panel {
        width: 100%;
        text-align: center;
    }

    .item {
        flex-direction: column;
        align-items: center;
    }

    .item-info {
        margin-bottom: 10px;
    }

    .item-buttons {
        justify-content: center;
    }

    .stats {
        text-align: center;
    }

    .bakery-name {
        font-size: 1.5em;
    }
}

@media (max-width: 480px) {
    .bakery-name {
        font-size: 1.2em;
        content: "Tartas'";
    }

    .stats {
        font-size: 1em;
    }

    .item img {
        width: 40px;
    }

    .button {
        padding: 6px 10px;
        font-size: 0.9em;
    }
}

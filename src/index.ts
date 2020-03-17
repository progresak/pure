import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(
        `<p style="text-align: center;">Server is listening on port ${PORT}!</p>`
    );
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${PORT}!`);
});

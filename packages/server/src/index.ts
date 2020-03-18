import express from 'express';
import { SampleEnum } from '@pure/enums';
import hello from './modules/compoennt';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // eslint-disable-next-line no-console
    console.log(hello('world'));
    // eslint-disable-next-line no-console
    console.log(SampleEnum.SampleValue1);
    res.send(
        `<p style="text-align: center;">Server is listening on port ${PORT}!</p>`
    );
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${PORT}!`);
});

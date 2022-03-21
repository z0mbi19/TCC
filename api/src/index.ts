import express from 'express'

import routes from "./routes";

const app = express()

app.use(express.json())

app.use(routes)

app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: `Não encontrei essa URL: ${req.path}`,
    });
});


app.listen(4000, () =>
    console.log('🚀 REST API server ready at: http://localhost:4000'),
)

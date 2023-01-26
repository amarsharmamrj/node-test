import express from 'express'
import cors from 'cors'
const app = express();

// middleware
app.use(express.json())

// cors
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "*"
}
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

const port = process.env.PORT || 3000

app.get("/home", (req, res) => {
    res.send("<h1>home api</h1>")
})

app.listen(port, () => {
    console.log("App is running on the port:", port)
})

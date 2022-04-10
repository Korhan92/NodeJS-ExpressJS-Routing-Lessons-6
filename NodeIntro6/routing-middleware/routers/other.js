const express = require('express')
const router = express.Router();

//app.get('/', (req, res) => res.send('Hello World!'))

router.get('/', (req, res) => res.render('index.pug'))

//? => kendinden önceki harfin zorunluluğunu ortadan kaldırıyor. = "aout"
router.get('/ab?out', (req, res) => res.send('Hello world from about page.'))
router.get('/co(nt)?act', (req, res) => res.send('Hello world from Contact page.'))
router.get('/u?se?r', (req, res) => res.send('Hello world from User page.'))

//* olduğu kısma herhangi bir text yazılabilir. = "contXXXact2"
router.get('/cont*act2', (req, res) => res.send('Hello world from Contact page.'))
//+ yazdığın yerden hemen önceki karakteri en az bir defa olmak üzere istediğimiz kadar kullanabiliyoruz. = "contaccccccc+t3"
router.get('/contac+t3', (req, res) => res.send('Hello world from Contact page.'))

//GET/POST/PUT/DELETE
// app.get('/helping', (req, res) => res.send('Hello world from helping page.(GET)'))
// app.post('/helping', (req, res) => res.send('Hello world from helping page.(POST)'))
// app.put('/helping', (req, res) => res.send('Hello world from helping page.(PUT)'))
// app.delete('/helping', (req, res) => res.send('Hello world from helping page.(DELETE)'))

//GET/POST/PUT/DELETE
router.get('/helping', (req, res) => res.send('Hello world from helping page.(GET)'))
.post('/helping', (req, res) => res.send('Hello world from helping page.(POST)'))
.put('/helping', (req, res) => res.send('Hello world from helping page.(PUT)'))
.delete('/helping', (req, res) => res.send('Hello world from helping page.(DELETE)'))

//ALL Method
//GET/POST/PUT/DELETE
router.all('/info', (req, res) => res.send('Hello world from helping page.(All)'))

//send params with GET
router.get('/image/:imageId', 
(req, res) => {console.log(req.params);
res.end('image Id:' + req.params.imageId)})



router.use(express.static('public'))

router.use(express.static('public-2'))


module.exports=router
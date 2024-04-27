import express from 'express'
import { upload } from './fileupload'
import { EOL } from 'os'

const PORT = process.env.PORT || 3000

const app = express()

const fileuploadMiddleware = upload.fields([{ name: 'file' }, { name: 'info' }])

app.post('/fileupload', fileuploadMiddleware, (req, res) => {
  console.log(req.files)
  res.status(200).json({
    message: 'success',
  })
})

app.listen(PORT, () =>
  console.log(`Running on port ${PORT}${EOL}>> http://localhost:3000`)
)

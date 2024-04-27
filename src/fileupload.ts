import multer from "multer";
import path from "path";
import dayjs from "dayjs";

const uploadsDir = path.join(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const milliseconds = dayjs().valueOf();
    const filename = `${milliseconds}-${file.fieldname}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

export { upload };

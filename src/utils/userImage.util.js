import multer from "multer";
import path from "path";

const attachmentsStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/users"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now();
    cb(null, uniqueName + ext);
  },
});

const userUploader = multer({ storage: attachmentsStorage });
export { userUploader };
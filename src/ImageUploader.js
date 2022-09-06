import { Button } from "@mui/material";
import React, { useState } from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUpLoaded, setUpLoaded] = useState(false);
  

  const OnFileUploadToFirebase = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setUpLoaded(true);
      }
    );
  };
    
  return (
    <>
      {loading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <>
          {isUpLoaded ? (
            <h2>アップロードが完了しました！</h2>
          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img src={ImageLogo} alt="imagelogo" />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input
                  className="imageUploadInput"
                  multiple
                  name="imageURL"
                  type="file"
                  accept=".png, .jpeg,  .jpg"
                  onChange={OnFileUploadToFirebase}
                />
              </div>
              <p>または</p>
              <Button variant="contained">
                ファイルを選択
                <input className="imageUploadInput" onChange={OnFileUploadToFirebase} accept=".png .jpeg .jpg" />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUploader;

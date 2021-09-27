import firebase from "firebase/app";
import "firebase/storage";
import { resolve } from "path";

const firebaseConfig = {
  apiKey: process.env.apikey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: "mrble-illust.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const storage = firebase.storage();

// const getListAll = (page: "illustration" | "drawing") => {
//   const storage = firebase.storage();
//   const storageRef = storage.ref();
//   const listRef = storageRef.root.child(page);

//   return new Promise((resolve, reject) => {
//     listRef
//       .listAll()
//       .then((res) => {
//         const list = [];
//         console.log("===");
//         // res.items.forEach((folderRef) => {
//         //   folderRef.getDownloadURL().then((url) => list.push(url));
//         // });

//         resolve("hoge");
//       })
//       .catch((error) => {
//         console.error(error);
//         reject();
//       });
//   });
// };

// export { getListAll };

// const getListAll = (page: "illustration" | "drawing", setImages) => {
//   const storageRef = storage.ref();
//   const listRef = storageRef.child(`${page}/`);
//   let list: string[] = [];
//   listRef
//     .listAll()
//     .then((res) => {
//       res.items.forEach((item) => {
//         item
//           .getMetadata()
//           .then((meta) => {
//             console.log(meta.fullPath);
//             list.push(meta.fullPath);
//           })
//           .catch((e) => {
//             console.error(e);
//           });
//       });
//     })
//     .catch((e) => {
//       console.error(e);
//     });
//   console.log("-----");
//   list.map((item) => {
//     console.log(item);
//   });
//   setImages(list);
// };

// res.items.forEach(async (item) => {

//   const meta = await item.getMetadata();
//   const src = `https://firebasestorage.googleapis.com/v0/b/${
//     meta.bucket
//   }/o/${encodeURIComponent(meta.fullPath)}?alt=media`;
//   console.log("====");
//   console.log(images);
//   setImages([...images, src]);
// });
// ■rules
// https://firebase.google.com/docs/firestore/security/insecure-rules?hl=ja

import * as admin from "firebase-admin";

export const initFirebaseAdmin = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.project_id,
        privateKey: process.env.private_key.replace(/\\n/g, "\n"),
        clientEmail: process.env.client_email,
      }),
      storageBucket: "mrble-illust.appspot.com",
    });
  }

  return admin.storage().bucket();
};

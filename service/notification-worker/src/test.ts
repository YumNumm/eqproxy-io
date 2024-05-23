import * as admin from "firebase-admin"
const firebaseApp = admin.initializeApp({})

firebaseApp.messaging().send({
  token:
    "ep30XRhsi0C8idsAFsE8gL:APA91bGksZvwJogB2pds0MZBoqbgmYxLRsYBIYvKTvKVP8QI_lSuLi9bFNbG0OaFKEeKzmSvn-W9KIPWBX9EYS8K0-5Mn1CexRhXVg_0cxFbfD5I6z-dkZkW75X-hQGfOHnLly3DSzn8",

  notification: {
    title: "[テスト] これはテストです",
    body: "これはテストです",
  },
  data: {
    type: "test",
  },
  apns: {
    payload: {
      aps: {
        contentAvailable: true,
        mutableContent: true,
        sound: {
          critical: true,
          name: "default",
          volume: 1,
        }
      },
      payload:
        "H4sIAAAAAAAAEwFBAL7/Cg4yMDI0MDUyMzIwMDAwNxovCisIvQESFeagueWupOWNiuWztuWNl+adseaylh1mZixCJZqZEUMoPDWamYlAEB5MquF+QQAAAA==",
    },
  },
})

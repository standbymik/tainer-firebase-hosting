import firebase from '@firebase/app'
import '@firebase/firestore'

export const loadDB = () => {
    try {
        const config = {
            apiKey: "xxx",
            authDomain: "xxx",
            databaseURL: "xxx",
            projectId: "xxx",
            storageBucket: "xxx",
            messagingSenderId: "xxx",
            appId: "xxx"
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

    } catch (err) {
        console.log(err.message)
    }

    return firebase
}
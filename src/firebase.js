import app from 'firebase/app'
import  'firebase/auth'
import 'firebase/database'
let firebaseConfig = {
    apiKey: "AIzaSyDlGD_r1FEJIBfoEHF0acBlPVt23NyeKkU",
    authDomain: "dogneo-4465d.firebaseapp.com",
    projectId: "dogneo-4465d",
    storageBucket: "dogneo-4465d.appspot.com",
    messagingSenderId: "107604503152",
    appId: "1:107604503152:web:8e37a429bb4feb5c7ba2b5"
  };
  
  
  class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

    }      

    login(email,password){
        return app.auth().signInWithEmailAndPassword(email, password)

    }

    async register(name,email,password){
        await app.auth().createUserWithEmailAndPassword(email,password)
        
        const uid = app.auth().currentUser.uid;

        return app.database().red('usuarios').child(uid).set({
            name:name
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve)
        })
    }

}

export default new Firebase()
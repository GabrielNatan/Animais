import app from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
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

    login(email,password,manter = false){

        if(manter){
            return app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL).then(res=>{
                return app.auth().signInWithEmailAndPassword(email, password)
            })
        }else{
            return app.auth().setPersistence(app.auth.Auth.Persistence.SESSION).then(res=>{
                return app.auth().signInWithEmailAndPassword(email, password)
            })
        }

    }

    async register(name,email,password){
        await app.auth().createUserWithEmailAndPassword(email,password)
        
        const uid = app.auth().currentUser.uid;
        console.log(uid)
        let db = app.firestore();

        db.collection("usuarios").add({
            name: name
        }).then(doc=>{
            return true
        }).catch(err=> {
            return false
        } )
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve)
        })
    }

    async resetPassword(email){
        await app.auth().sendPasswordResetEmail(email)
        .then(res=>{
            alert("Email enviado para seu email")
        })
        .catch(error=>{
            console.log(error)
        })
    }

    async userLogged(){
        await app.auth().onAuthStateChanged(user=>{
            if(user){
                console.log(user)
            }else{
                console.log("nenhum usuario logado")
            }
        })
    }

}

export default new Firebase()
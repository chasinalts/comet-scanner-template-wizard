
{initializeApp}from'firebase/app';
{getAuth}from'firebase/auth';
{getFirestore}from'firebase/firestore';
{getStorage}from'firebase/storage';
{getPerformance}from'firebase/performance';
{getAnalytics,isSupported}from'firebase/analytics';//ImportAnalytics

//YouractualFirebaseprojectconfiguration
constfirebaseConfig={
apiKey:"AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",
authDomain:"comet-scanner-template-wizard.firebaseapp.com",
projectId:"comet-scanner-template-wizard",
storageBucket:"comet-scanner-template-wizard.firebasestorage.app",//Correctedbucketnameifnecessary
messagingSenderId:"1073315238272",
appId:"1:1073315238272:web:13e744ae6d06fa0949f165",
measurementId:"G-D0CQ6B72BS"//IMPORTANT:AddyourMeasurementIDfromFirebase/GoogleAnalytics
};

//InitializeFirebase
constapp=initializeApp(firebaseConfig);

//InitializeFirebaseservices
constauth=getAuth(app);
constdb=getFirestore(app);
conststorage=getStorage(app);
constperf=getPerformance(app);

//InitializeAnalytics(checkforbrowsersupport)
letanalytics:ReturnType<typeofgetAnalytics>|null=null;
isSupported().then((supported)=>{
if(supported){
analytics=getAnalytics(app);
console.log("FirebaseAnalyticsinitialized.");
}else{
console.log("FirebaseAnalyticsisnotsupportedinthisenvironment.");
}
});


//Exporttheservicesforuseinotherpartsoftheapp
//Exportanalyticsonlyafterit'spotentiallyinitialized
export{app,auth,db,storage,perf,analytics};

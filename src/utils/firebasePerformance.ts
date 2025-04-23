{getPerformance,trace}from'firebase/performance';
{app}from'../firebaseConfig';

//InitializeFirebasePerformance
constperf=getPerformance(app);

//Sanitizeattributevaluestoensurethey'revalidforFirebasePerformance
constsanitizeAttributeValue=(value:string):string=>{
//Replaceinvalidcharacterswithunderscores
//FirebasePerformancehasrestrictionsonattributevalues
returnvalue.replace(/[^a-zA-Z0-9_.-]/g,'_').substring(0,40);
};

//Createacustomtrace
exportconststartTrace=(traceName:string)=>{
try{
constcustomTrace=trace(perf,traceName);
customTrace.start();
returncustomTrace;
}catch(error){
console.error('ErrorstartingFirebasePerformancetrace:',error);
returnnull;
}
};

//Stopatrace
exportconststopTrace=(customTrace:any)=>{
if(!customTrace)return;

try{
customTrace.stop();
}catch(error){
console.error('ErrorstoppingFirebasePerformancetrace:',error);
}
};

//Addacustomattributetoatrace
exportconstputTraceAttribute=(customTrace:any,name:string,value:string)=>{
if(!customTrace)return;

try{
//Sanitizetheattributevaluebeforesettingit
constsanitizedValue=sanitizeAttributeValue(value);
customTrace.putAttribute(name,sanitizedValue);
}catch(error){
console.error('ErroraddingattributetoFirebasePerformancetrace:',error);
}
};

//Recordaperformancemetric
exportconstrecordPerformanceMetric=(metricName:string,value:number)=>{
try{
constcustomTrace=trace(perf,'custom_metric');
customTrace.start();

//Addthemetricnameandvalueasattributes
customTrace.putAttribute('metric_name',sanitizeAttributeValue(metricName));
customTrace.putAttribute('metric_value',String(value));

//Stopthetrace
customTrace.stop();
}catch(error){
console.error('Errorrecordingperformancemetric:',error);
}
};

exportdefault{
startTrace,
stopTrace,
putTraceAttribute,
recordPerformanceMetric
};

import{j as e,m as b}from"./vendor-ui-B2A3YeRo.js";import{a,c as P,L as M}from"./vendor-react-CTBdW232.js";import{u as F,F as R}from"./index-CKRzOxtK.js";const z={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},O=()=>{const[o,p]=a.useState(""),[d,f]=a.useState(""),[n,t]=a.useState(""),[i,c]=a.useState(!1),[g,m]=a.useState(!1),[u,y]=a.useState(""),[j,w]=a.useState(!1),{login:v,sendPasswordResetEmail:N,guestLogin:k}=F(),x=P(),C=a.useRef(null),S=async s=>{if(s.preventDefault(),!o.trim()||!d.trim()){t("Please enter both email and password");return}try{t(""),c(!0),await v(o,d),x("/wizard/step1")}catch(r){console.error("Login failed:",r);let l="Failed to sign in. Please check your credentials.";if(r instanceof R)switch(r.code){case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":l="Invalid email or password.";break;case"auth/invalid-email":l="Please enter a valid email address.";break;case"auth/user-disabled":l="This account has been disabled.";break;case"auth/too-many-requests":l="Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";break}t(l)}finally{c(!1)}},E=()=>{m(!0)},L=async s=>{s.preventDefault();try{await N(u),w(!0),t("")}catch(r){console.log(r),t("Failed to send password reset email. Please try again later.")}},h=()=>{m(!1)};return e.jsxs(b.div,{variants:z,initial:"initial",animate:"animate",exit:"exit",className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[e.jsx("h2",{className:"text-center text-3xl font-extrabold text-gray-900",children:"COMET Scanner Wizard"}),e.jsx("h3",{className:"mt-2 text-center text-xl text-gray-600",children:"Sign in to your account"})]}),e.jsxs("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[e.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[n&&e.jsx(b.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"rounded-md bg-red-50 p-4 mb-4",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"ml-3",children:e.jsx("p",{className:"text-sm text-red-700",children:n})})]})}),e.jsxs("form",{className:"space-y-6",onSubmit:S,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address "}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:o,onChange:s=>p(s.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:d,onChange:s=>f(s.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})})]}),e.jsx("div",{children:e.jsxs("button",{type:"submit",disabled:i,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${i?"bg-blue-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}`,children:[i?e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null,i?"Signing in...":"Sign in"]})})]}),e.jsx("div",{children:e.jsx("button",{onClick:async()=>{await k(),x("/wizard/step1")},className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Sign In As Guest"})}),e.jsx("div",{className:"mt-2",children:e.jsx("button",{onClick:E,className:"text-blue-600 hover:text-blue-500 text-sm",children:"Forgot Password?"})}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-white text-gray-500",children:"New to COMET Scanner?"})})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx(M,{to:"/signup",className:"text-blue-600 hover:text-blue-500 font-medium",children:"Create an account"})})]})]}),g&&e.jsx("div",{ref:C,className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:e.jsxs("div",{className:"bg-white p-8 rounded-lg max-w-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Reset Password"}),e.jsx("button",{onClick:h,className:"text-gray-500 hover:text-gray-700",children:e.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),n&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4",role:"alert",children:e.jsx("span",{className:"block sm:inline",children:n})}),j?e.jsxs("div",{children:[e.jsx("p",{children:"Password reset email has been sent!"}),e.jsx("button",{onClick:h,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Close"})]}):e.jsxs("form",{onSubmit:L,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"resetEmail",children:"Email"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"resetEmail",type:"email",placeholder:"Enter your email",value:u,onChange:s=>y(s.target.value),required:!0})]}),e.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Send Reset Link"})]})]})})]})]})};export{O as default};
